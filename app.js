const STORAGE_KEY = "travel-guides-v2";
const KIND = { sight: "景点", food: "餐厅", transport: "交通", stay: "住宿" };
const FLAG = { required: "必须预约", recommended: "建议预约", none: "不用预约" };

const state = load();
let map;
let markers = [];
let dayFilter = "all";
let editing = null;

const main = document.querySelector("#main");
const tripList = document.querySelector("#trip-list");
const editor = document.querySelector("#editor");
const form = document.querySelector("#editor-form");

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (saved && Array.isArray(saved.trips) && saved.trips.length) {
      return { trips: saved.trips, booked: saved.booked || {}, tripId: saved.tripId || saved.trips[0].id };
    }
  } catch (_) { /* use the seed trip */ }
  return { trips: structuredClone(window.SEED_TRIPS), booked: {}, tripId: window.SEED_TRIPS[0].id };
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    trips: state.trips,
    booked: state.booked,
    tripId: state.tripId
  }));
}

function trip() {
  return state.trips.find((item) => item.id === state.tripId) || state.trips[0];
}

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
}

function weekday(date) {
  if (!date) return "";
  const day = new Date(`${date}T12:00:00`).getDay();
  return "日一二三四五六"[day];
}

function safeUrl(url) {
  if (!url || !/^https:\/\//i.test(url)) return "";
  return url;
}

function googleUrl(item) {
  const query = `${item.name || ""} ${item.address || ""}`.trim();
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function googleDayUrl(items) {
  const points = items.filter((item) => Number.isFinite(item.lat) && Number.isFinite(item.lng));
  if (!points.length) return "";
  if (points.length === 1) return googleUrl(points[0]);
  return `https://www.google.com/maps/dir/${points.map((item) => `${item.lat},${item.lng}`).join("/")}`;
}

function pending(current = trip()) {
  const rows = [];
  for (const day of current.days) {
    for (const item of day.items) {
      if (item.reservation === "none") continue;
      if (state.booked[item.id]) continue;
      rows.push({ day, item });
    }
  }
  rows.sort((a, b) => (a.item.reservation === "required" ? -1 : 1) - (b.item.reservation === "required" ? -1 : 1));
  return rows;
}

function renderTrips() {
  tripList.innerHTML = state.trips.map((item) => {
    const left = pending(item).filter((row) => row.item.reservation === "required").length;
    return `<button type="button" class="trip-btn${item.id === trip().id ? " active" : ""}" data-trip="${esc(item.id)}">
      <b>${esc(item.title)}</b>
      <span>${esc(item.start || "未定日期")} — ${esc(item.end || "")}</span>
      ${left ? `<em>${left} 项必须预约还没订</em>` : `<span>该订的都勾过了</span>`}
    </button>`;
  }).join("");
}

function renderMain() {
  const current = trip();
  const todo = pending(current);
  const required = todo.filter((row) => row.item.reservation === "required");
  const days = dayFilter === "all" ? current.days : current.days.filter((day) => day.id === dayFilter);

  main.innerHTML = `
    <section class="summary">
      <div class="day-head">
        <h2>${esc(current.title)}</h2>
        <span class="day-tools">
          <button type="button" class="text-btn" id="rename-trip">改名</button>
          <button type="button" class="text-btn" id="add-day">加一天</button>
          ${state.trips.length > 1 ? `<button type="button" class="text-btn" id="delete-trip">删除这趟</button>` : ""}
        </span>
      </div>
      <p>${esc(current.summary || "点每一天的「加地点」。餐厅和景点保存后会出现在右边地图，也能跳到谷歌。")}</p>
    </section>
    <section class="alert">
      <h2>${required.length ? `还有 ${required.length} 项必须提前订` : "必须提前订的都已勾掉"}${todo.length - required.length ? `，另有 ${todo.length - required.length} 项建议订` : ""}</h2>
      ${todo.length ? todo.map(({ day, item }) => `
        <div class="alert-row">
          <div>
            <span class="flag ${esc(item.reservation)}">${FLAG[item.reservation]}</span>
            <b>${esc(item.name)}</b>
            <span class="muted"> ${esc(day.date)} ${esc(day.city)} · ${esc(item.reservationNote || "")}</span>
          </div>
          ${safeUrl(item.bookingUrl) ? `<a class="book ${esc(item.reservation)}" href="${esc(safeUrl(item.bookingUrl))}" target="_blank" rel="noopener">去预约</a>` : `<span class="muted">没有预约链接</span>`}
        </div>`).join("") : `<p class="muted">这趟没有还要处理的预约。</p>`}
    </section>
    ${days.map((day) => renderDay(day)).join("")}
  `;
  document.querySelector("#map-title").textContent = dayFilter === "all" ? "全程" : "这一天";
}

function renderDay(day) {
  const link = googleDayUrl(day.items);
  return `<section class="day" id="${esc(day.id)}">
    <div class="day-head">
      <h2>${esc(day.date || "未定日期")} 周${weekday(day.date)} <small>${esc(day.city)} · ${esc(day.title)}</small></h2>
      <span class="day-tools">
        ${link ? `<a class="google" href="${esc(link)}" target="_blank" rel="noopener">谷歌地图看这一天</a>` : ""}
        <button type="button" class="text-btn" data-add="${esc(day.id)}">加地点</button>
      </span>
    </div>
    ${day.items.map((item) => renderItem(day, item)).join("") || `<p class="empty">这一天还没有地点。</p>`}
  </section>`;
}

function renderItem(day, item) {
  const book = safeUrl(item.bookingUrl);
  const booked = !!state.booked[item.id];
  return `<article class="item" id="item-${esc(item.id)}">
    <time>${esc(item.time || "—")}</time>
    <div>
      <div class="item-top">
        <h3>${esc(item.name)} <span class="kind">${KIND[item.kind] || ""}</span></h3>
        <span class="item-actions">
          <a class="google" href="${esc(googleUrl(item))}" target="_blank" rel="noopener">谷歌打点</a>
          ${book && item.reservation !== "none" ? `<a class="book ${esc(item.reservation)}" href="${esc(book)}" target="_blank" rel="noopener">去预约</a>` : ""}
          <button type="button" class="text-btn" data-edit="${esc(day.id)}:${esc(item.id)}">改</button>
          <button type="button" class="text-btn" data-del="${esc(day.id)}:${esc(item.id)}">删</button>
        </span>
      </div>
      <p>${esc(item.note || "")}</p>
      <span class="flag ${esc(item.reservation)}">${FLAG[item.reservation] || ""}</span>
      ${item.reservationNote ? `<p class="muted">${esc(item.reservationNote)}</p>` : ""}
      ${item.reservation !== "none" ? `<label class="booked"><input type="checkbox" data-booked="${esc(item.id)}" ${booked ? "checked" : ""} /> 已经订好</label>` : ""}
    </div>
  </article>`;
}

function color(reservation) {
  if (reservation === "required") return "#b4332a";
  if (reservation === "recommended") return "#8a5a12";
  return "#2f6b4f";
}

function visibleItems() {
  const current = trip();
  const days = dayFilter === "all" ? current.days : current.days.filter((day) => day.id === dayFilter);
  return days.flatMap((day) => day.items.map((item) => ({ day, item })));
}

function drawMap() {
  markers.forEach((marker) => marker.remove());
  markers = [];
  const groups = new Map();
  for (const row of visibleItems()) {
    const { item } = row;
    if (!Number.isFinite(item.lat) || !Number.isFinite(item.lng)) continue;
    const key = `${item.lat.toFixed(4)},${item.lng.toFixed(4)}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(row);
  }
  const bounds = [];
  for (const rows of groups.values()) {
    const worst = rows.some((row) => row.item.reservation === "required")
      ? "required"
      : rows.some((row) => row.item.reservation === "recommended") ? "recommended" : "none";
    const { lat, lng } = rows[0].item;
    const marker = L.circleMarker([lat, lng], {
      radius: 8,
      color: color(worst),
      fillColor: color(worst),
      fillOpacity: 0.95,
      weight: 2
    });
    marker.bindPopup(rows.map(({ item }) =>
      `<b>${esc(item.name)}</b><span>${esc(FLAG[item.reservation] || "")}</span><br><a href="${esc(googleUrl(item))}" target="_blank" rel="noopener">在谷歌地图打开</a>`
    ).join("<hr>"));
    marker.addTo(map);
    markers.push(marker);
    bounds.push([lat, lng]);
  }
  if (bounds.length) map.fitBounds(bounds, { padding: [28, 28], maxZoom: 14 });
  setTimeout(() => map.invalidateSize(), 0);
}

function render() {
  if (!state.trips.length) return;
  if (!trip()) state.tripId = state.trips[0].id;
  const scroll = main.scrollTop;
  renderTrips();
  renderMain();
  drawMap();
  main.scrollTop = scroll;
  save();
}

function openEditor(dayId, item) {
  editing = { dayId, id: item ? item.id : null };
  form.reset();
  document.querySelector("#editor-title").textContent = item ? "修改地点" : "添加地点";
  if (item) {
    for (const key of ["time", "name", "kind", "address", "reservation", "reservationNote", "bookingUrl", "note"]) {
      form.elements[key].value = item[key] || (key === "kind" ? "sight" : key === "reservation" ? "none" : "");
    }
    form.elements.lat.value = Number.isFinite(item.lat) ? item.lat : "";
    form.elements.lng.value = Number.isFinite(item.lng) ? item.lng : "";
  }
  editor.showModal();
}

function readForm() {
  const data = Object.fromEntries(new FormData(form));
  const lat = parseFloat(data.lat);
  const lng = parseFloat(data.lng);
  return {
    time: data.time.trim(),
    name: data.name.trim(),
    kind: data.kind,
    address: data.address.trim(),
    lat: Number.isFinite(lat) ? lat : null,
    lng: Number.isFinite(lng) ? lng : null,
    reservation: data.reservation,
    reservationNote: data.reservationNote.trim(),
    bookingUrl: data.bookingUrl.trim(),
    note: data.note.trim()
  };
}

map = L.map("map", { zoomControl: true });
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "&copy; OpenStreetMap"
}).addTo(map);
map.setView([-25.5, 146.5], 4);

document.querySelector("#new-trip").addEventListener("click", () => {
  const id = `trip-${Date.now()}`;
  const title = window.prompt("这趟叫什么", "新行程");
  if (!title) return;
  state.trips.unshift({
    id,
    title: title.trim(),
    start: "",
    end: "",
    summary: "",
    days: [{ id: `${id}-d1`, date: "", city: "", title: "第一天", items: [] }]
  });
  state.tripId = id;
  dayFilter = "all";
  render();
});

document.querySelector("#export-btn").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify({ trips: state.trips, booked: state.booked }, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${trip().title || "行程"}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
});

document.querySelector("#import-btn").addEventListener("click", () => {
  document.querySelector("#import-file").click();
});

document.querySelector("#import-file").addEventListener("change", async (event) => {
  const file = event.target.files[0];
  event.target.value = "";
  if (!file) return;
  const data = JSON.parse(await file.text());
  const trips = Array.isArray(data) ? data : data.trips;
  if (!Array.isArray(trips) || !trips.length) return;
  state.trips = trips;
  state.booked = data.booked || {};
  state.tripId = trips[0].id;
  dayFilter = "all";
  render();
});

document.querySelector("#fit-all").addEventListener("click", () => {
  dayFilter = "all";
  render();
});

document.querySelector("#geocode-btn").addEventListener("click", async () => {
  const query = `${form.elements.name.value} ${form.elements.address.value}`.trim();
  if (!query) return;
  const button = document.querySelector("#geocode-btn");
  button.disabled = true;
  button.textContent = "正在查";
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q=${encodeURIComponent(query)}`, {
      headers: { Accept: "application/json" }
    });
    const rows = await response.json();
    if (!rows.length) {
      button.textContent = "没找到，换个地址再试";
      return;
    }
    form.elements.lat.value = Number(rows[0].lat).toFixed(5);
    form.elements.lng.value = Number(rows[0].lon).toFixed(5);
    button.textContent = "已找到坐标";
  } catch (_) {
    button.textContent = "查找失败";
  } finally {
    button.disabled = false;
    setTimeout(() => { button.textContent = "按名称查找坐标并打点"; }, 1600);
  }
});

document.querySelector("#editor-cancel").addEventListener("click", () => editor.close());

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const current = trip();
  const day = current.days.find((item) => item.id === editing.dayId);
  if (!day) return;
  const data = readForm();
  if (!data.name) return;
  if (editing.id) {
    const index = day.items.findIndex((item) => item.id === editing.id);
    day.items[index] = { ...day.items[index], ...data };
  } else {
    day.items.push({ id: `p-${Date.now()}`, ...data });
  }
  editor.close();
  render();
});

main.addEventListener("click", (event) => {
  const add = event.target.closest("[data-add]");
  if (add) return openEditor(add.dataset.add, null);
  const edit = event.target.closest("[data-edit]");
  if (edit) {
    const [dayId, itemId] = edit.dataset.edit.split(":");
    const day = trip().days.find((item) => item.id === dayId);
    return openEditor(dayId, day.items.find((item) => item.id === itemId));
  }
  const del = event.target.closest("[data-del]");
  if (del) {
    const [dayId, itemId] = del.dataset.del.split(":");
    const day = trip().days.find((item) => item.id === dayId);
    day.items = day.items.filter((item) => item.id !== itemId);
    delete state.booked[itemId];
    return render();
  }
  if (event.target.id === "add-day") {
    const date = window.prompt("日期，写成 2027-05-06", "");
    if (date == null) return;
    const current = trip();
    current.days.push({
      id: `day-${Date.now()}`,
      date: date.trim(),
      city: "",
      title: "新的一天",
      items: []
    });
    return render();
  }
  if (event.target.id === "rename-trip") {
    const title = window.prompt("行程名称", trip().title);
    if (!title) return;
    trip().title = title.trim();
    return render();
  }
  if (event.target.id === "delete-trip") {
    if (!window.confirm(`删除「${trip().title}」？`)) return;
    state.trips = state.trips.filter((item) => item.id !== state.tripId);
    state.tripId = state.trips[0].id;
    dayFilter = "all";
    return render();
  }
});

main.addEventListener("change", (event) => {
  const box = event.target.closest("[data-booked]");
  if (!box) return;
  if (box.checked) state.booked[box.dataset.booked] = true;
  else delete state.booked[box.dataset.booked];
  render();
});

tripList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-trip]");
  if (!button) return;
  state.tripId = button.dataset.trip;
  dayFilter = "all";
  render();
});

render();
