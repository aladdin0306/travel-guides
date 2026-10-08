const STORAGE_KEY = "travel-guides-v2";
const KIND = { sight: "景点", food: "餐厅", transport: "交通", stay: "住宿" };
const FLAG = { required: "必须预约", recommended: "建议预约", none: "不用预约" };

const state = load();
let map;
let markers = [];
let dayFilter = "";
let bookingsOpen = false;
let editing = null;

const main = document.querySelector("#main");
const tripList = document.querySelector("#trip-list");
const editor = document.querySelector("#editor");
const form = document.querySelector("#editor-form");

function load() {
  const seed = structuredClone(window.SEED_TRIPS);
  let booked = {};
  let tripId = seed[0].id;
  let extras = [];
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (saved) {
      booked = saved.booked || {};
      tripId = saved.tripId || tripId;
      const seedIds = new Set(seed.map((item) => item.id));
      extras = (saved.trips || []).filter((item) => !seedIds.has(item.id));
    }
  } catch (_) { /* keep the seed trip */ }
  return { trips: [...seed, ...extras], booked, tripId };
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
  const chosen = activeDay(current);
  const todo = pending(current);
  const required = todo.filter((row) => row.item.reservation === "required");
  const suggested = todo.length - required.length;
  const days = dayFilter === "all" ? current.days : current.days.filter((day) => day.id === (chosen && chosen.id));
  const bookLabel = required.length
    ? `${required.length} 项必须订${suggested ? ` · ${suggested} 项建议订` : ""}`
    : "必须订的都已勾掉";

  main.innerHTML = `
    <section class="summary">
      <div class="day-head">
        <h2>${esc(current.title)}</h2>
        <span class="day-tools">
          <button type="button" class="btn btn-quiet" id="rename-trip">改名</button>
          <button type="button" class="btn btn-quiet" id="add-day">加一天</button>
          ${state.trips.length > 1 ? `<button type="button" class="btn btn-quiet" id="delete-trip">删除</button>` : ""}
        </span>
      </div>
      <p class="path">${esc(cityRun(current.days))}</p>
      <div class="day-switch">
        ${current.days.map((day) => `
          <button type="button" class="btn${dayFilter !== "all" && chosen && day.id === chosen.id ? " active" : ""}" data-day="${esc(day.id)}">
            ${esc((day.date || "").slice(5) || "未定")} ${esc(day.city)}
          </button>`).join("")}
        <button type="button" class="btn${dayFilter === "all" ? " active" : ""}" data-day="all">全部</button>
      </div>
    </section>
    <button type="button" class="btn book-bar" id="toggle-books">${esc(bookLabel)}</button>
    ${bookingsOpen ? `<section class="alert">
      ${todo.length ? todo.map(({ day, item }) => `
        <div class="alert-row">
          <div>
            <span class="flag ${esc(item.reservation)}">${FLAG[item.reservation]}</span>
            <b>${esc(item.name)}</b>
            <span class="muted"> ${esc((day.date || "").slice(5))} ${esc(day.city)}</span>
          </div>
          ${safeUrl(item.bookingUrl) ? `<a class="btn ${item.reservation === "required" ? "btn-primary" : "btn-primary warn"}" href="${esc(safeUrl(item.bookingUrl))}" target="_blank" rel="noopener">预约</a>` : ""}
        </div>`).join("") : `<p class="muted">这趟没有还要处理的预约。</p>`}
    </section>` : ""}
    ${days.map((day) => renderDay(day)).join("")}
  `;
  document.querySelector("#map-title").textContent = dayFilter === "all" ? "全程" : (chosen ? chosen.city : "这一天");
}

function renderDay(day) {
  const link = googleDayUrl(day.items);
  return `<section class="day" id="${esc(day.id)}">
    <div class="day-head">
      <div>
        <p class="eyebrow">${esc((day.date || "").slice(5) || "未定日期")} 周${weekday(day.date)} · ${esc(day.city)}</p>
        <h2>${esc(day.title || day.city)}</h2>
      </div>
      <span class="day-tools">
        ${link ? `<a class="btn" href="${esc(link)}" target="_blank" rel="noopener">这一天的地图</a>` : ""}
        <button type="button" class="btn btn-quiet" data-add="${esc(day.id)}">加一站</button>
      </span>
    </div>
    <div class="glance">
      <p class="layer-label">总结</p>
      <ol class="glance-list">
        ${day.items.map((item) => renderGlance(item)).join("") || `<li class="empty">这一天还没有地点。</li>`}
      </ol>
    </div>
    ${day.items.length ? `<div class="detail">
      <p class="layer-label">详情</p>
      <ol class="stops">
        ${day.items.map((item, index) => renderItem(day, item, index)).join("")}
      </ol>
    </div>` : ""}
  </section>`;
}

function renderGlance(item) {
  const optional = /可不去|想进去|再订/.test(item.time || "");
  const flag = item.reservation !== "none"
    ? `<span class="flag ${esc(item.reservation)}">${FLAG[item.reservation]}</span>`
    : "";
  return `<li class="glance-row${optional ? " optional" : ""}">
    <time>${esc(item.time || "—")}</time>
    <a href="#item-${esc(item.id)}">${esc(item.name)}</a>
    ${flag}
  </li>`;
}

function renderItem(day, item, index) {
  const book = safeUrl(item.bookingUrl);
  const booked = !!state.booked[item.id];
  const parts = splitNote(item.note);
  const optional = /可不去|想进去|再订/.test(item.time || "");
  return `<li class="stop${optional ? " optional" : ""}" id="item-${esc(item.id)}">
    <div class="stop-rail"><span class="stop-num">${index + 1}</span></div>
    <div class="stop-body">
      <div class="stop-top">
        <h3>${esc(item.name)}</h3>
        <time>${esc(item.time || "—")}</time>
      </div>
      ${parts.lead ? `<p class="lead">${esc(parts.lead)}</p>` : ""}
      ${parts.rest ? `<p class="extra">${esc(parts.rest)}</p>` : ""}
      ${item.reservation !== "none" && item.reservationNote ? `<p class="extra">${esc(item.reservationNote)}</p>` : ""}
      <div class="stop-actions">
        <a class="btn" href="${esc(googleUrl(item))}" target="_blank" rel="noopener">地图</a>
        ${book && item.reservation !== "none" ? `<a class="btn ${item.reservation === "required" ? "btn-primary" : "btn-primary warn"}" href="${esc(book)}" target="_blank" rel="noopener">预约</a>` : ""}
        ${item.reservation !== "none" ? `<label class="booked"><input type="checkbox" data-booked="${esc(item.id)}" ${booked ? "checked" : ""} /> 已订</label>` : ""}
        <button type="button" class="btn btn-quiet" data-edit="${esc(day.id)}:${esc(item.id)}">改</button>
        <button type="button" class="btn btn-quiet" data-del="${esc(day.id)}:${esc(item.id)}">删</button>
      </div>
    </div>
  </li>`;
}

function color(reservation) {
  if (reservation === "required") return "#b42318";
  if (reservation === "recommended") return "#9a6700";
  return "#18794e";
}

function splitNote(note) {
  const text = String(note || "").trim();
  const sentences = text.split(/(?<=。)/).map((part) => part.trim()).filter(Boolean);
  if (sentences.length < 2) return { lead: text, rest: "" };
  const route = sentences.find((part) => /坐|走|换乘|打车|下车|上船|电车|公交|渡轮|导航/.test(part));
  if (!route || route === sentences[0]) {
    return { lead: sentences[0], rest: sentences.slice(1).join("") };
  }
  return { lead: route, rest: sentences.filter((part) => part !== route).join("") };
}

function cityRun(days) {
  const runs = [];
  for (const day of days) {
    const city = day.city || "未定";
    if (!runs.length || runs[runs.length - 1].city !== city) runs.push({ city, n: 1 });
    else runs[runs.length - 1].n += 1;
  }
  return runs.map((run) => `${run.city} ${run.n}天`).join(" → ");
}

function activeDay(current) {
  if (dayFilter === "all") return null;
  return current.days.find((day) => day.id === dayFilter) || current.days[0] || null;
}

function visibleItems() {
  const current = trip();
  const chosen = activeDay(current);
  const days = dayFilter === "all" ? current.days : current.days.filter((day) => chosen && day.id === chosen.id);
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
  dayFilter = "";
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
  dayFilter = "";
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
  const jump = event.target.closest(".glance-row a");
  if (jump) {
    event.preventDefault();
    const target = document.querySelector(jump.getAttribute("href"));
    if (target) target.scrollIntoView({ block: "nearest" });
    return;
  }
  const dayButton = event.target.closest("[data-day]");
  if (dayButton) {
    dayFilter = dayButton.dataset.day;
    main.scrollTop = 0;
    return render();
  }
  if (event.target.id === "toggle-books") {
    bookingsOpen = !bookingsOpen;
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
    dayFilter = "";
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
  dayFilter = "";
  bookingsOpen = false;
  render();
});

render();
