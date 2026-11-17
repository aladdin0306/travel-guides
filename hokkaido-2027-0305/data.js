const PHOTOS = {
  "hk-d1-susukino": ["Chuoterminal · CC BY 3.0", "Sapporo_tram_Susukino_station_platform_20160207_205636.jpg"],
  "hk-d2-otaru": ["t-konno · CC BY-SA 3.0", "小樽雪あかりの路2013（Otaru_Snow_Light_Path_2013）_-_panoramio_(3).jpg"],
  "hk-d2-asahikawa": ["ほくなん · Public domain", "SciPal_Asahikawa_Hokkaido_Japan.jpg"],
  "hk-d2-asahiyama": ["Lionel Leong · CC BY-SA 2.0", "Winter_in_Hokkaido(Asahiyama_Zoo_旭山動物園)_-_03_(26152902302).jpg"],
  "hk-d3-jozankei": ["MIKI Yoshihito · CC BY 2.0", "Jozankei_Onsen,_Sapporo,_Hokkaido_Prefecture;_January_2018_(22).jpg"],
  "hk-d4-odori": ["ノボホショコロトソ · CC BY 4.0", "Sapporo_TV_Tower_and_Odori_Park_01.jpg"],
  "hk-d4-moiwa": ["掬茶 · CC BY-SA 4.0", "City_nightscape_of_Sapporo_from_Mt._Moiwa_20260703b.jpg"]
};

function photo(id) {
  const [credit, file] = PHOTOS[id];
  return { src: `photos/${id}.jpg`, credit, link: `https://commons.wikimedia.org/wiki/File:${file}` };
}

window.SEED_TRIPS = [
  {
    id: "hokkaido-2027-0305",
    title: "北海道 · 札幌休闲看雪 5 日",
    start: "2027-03-05",
    end: "2027-03-09",
    summary: "",
    visa: {
      status: "required",
      passport: "中国大陆护照",
      type: "日本单次/多次旅游签证（个人旅游 · 上海领区）",
      applyUrl: "https://www.shanghai.cn.emb-japan.go.jp/itpr_zh/00_000897.html",
      guideUrl: "https://www.shanghai.cn.emb-japan.go.jp/itpr_ja/11_000001_00633.html",
      feeNote: "单次合计约 ¥950–1,150 人民币/人（2026年7月1日起使领馆规费涨至单次 ¥715、多次 ¥1,430，另加指定旅行社代办服务费约 ¥230–400；多次签合计约 ¥1,650–1,900）",
      timeline: "建议最晚 2027 年 1 月底前递交；春节档前后旅行社排期更紧",
      docs: [
        { id: "passport", label: "护照有效期覆盖行程", note: "至少 2 页空白签证页；如有旧护照需一并提交" },
        { id: "photo", label: "签证用近照（4.5×4.5cm）", note: "6 个月内白底无修图清晰照" },
        { id: "form", label: "签证申请表与停留日程表", note: "可用本页打印的路书作行程参考" },
        { id: "hotel", label: "酒店预订单", note: "札幌 4 晚；可先订可免费取消的商务酒店，出签前勿随意退改" },
        { id: "flight", label: "往返机票行程单", note: "NH972+NH69 / NH78+NH967 已订，导出电子行程单即可" },
        { id: "funds", label: "资产与在职/学生证明", note: "上海领区常见税单/银行流水/存款任一 + 在职证明，按所选代办社要求准备" }
      ],
      tips: [
        "中国大陆护照赴日旅游签须通过日本驻上海总领事馆指定旅行社代办（或符合条件走 JAPAN eVISA 单次电子签），使领馆不接受个人直接送签",
        "2026 年 7 月 1 日起日本自 1978 年以来首次大幅上调签证规费（单次 ¥145 → ¥715、多次 ¥285 → ¥1,430），注意甄别网上未更新的老旧低价攻略",
        "不要把护照号、签证申请号写进本页",
        "3 月初札幌市区积雪不稳定：有残雪就逛市景；想看厚雪优先定山溪，市区几乎化光则把第 2 天改成旭川一日"
      ],
      disclaimer: "政策、费用与材料清单以日本驻上海总领事馆（2026年7月1日调价标准）及指定代办旅行社为准；本页只作出行准备清单，不构成签证代理或获批承诺。"
    },
    budget: {
      currency: "JPY",
      party: "1 人独自出行",
      basis: "当地吃住行门票约 6.37 万日元（约 ¥2,660 人民币），压在 3,000 元以内；但加上 2026 年 7 月涨价后的日本单次签证（规费 ¥715 + 代办费，合计约 ¥980），除机票外总成本约 ¥3,640 人民币。若想连签证一起严控在 ¥3,000 左右，需把 4 晚住宿压到高级胶囊/青旅（每晚 ¥4,000–5,000 日元）。",
      cnyRate: 0.0418,
      rateDate: "2026-11-16",
      extras: [
        {
          label: "日本单次旅游签证（上海送签：领馆规费 + 旅行社代办）",
          cat: "other",
          cny: 980,
          note: "2026年7月1日起领馆单次规费涨至 ¥715 人民币，加上海领区指定旅行社常规代办费（自备机酒约 ¥238–300）合计约 ¥950–1,020，按 ¥980 计；若办三年多次（规费 ¥1,430 + 代办）则约 ¥1,800+。"
        },
        {
          label: "当地交通（机场快线 + 市内 + 小樽或旭川 JR + 定山溪巴士）",
          cat: "transport",
          amount: 10000,
          note: "默认含小樽往返；若改旭川看雪，JR 往返约 ¥4,500–5,500，比小樽贵，总额按此条机动。"
        },
        {
          label: "便利店/简餐机动",
          cat: "food",
          amount: 6000,
          note: "未单列的早饭与咖啡零食；正餐已尽量写在各站。"
        },
        {
          label: "已订机票（上海—羽田—新千岁开口程）",
          cat: "flight",
          note: "去：NH972+NH69；回：NH78+NH967。票价已付，不重复计入待花总额。"
        }
      ],
      origins: [
        {
          id: "shanghai",
          label: "上海",
          brief: "去：3月5日 NH972 浦东 08:35–羽田 12:20，转 NH69 羽田 15:00–新千岁约 16:35。回：3月9日 NH78 新千岁约 19:30–羽田 21:10，转 NH967 羽田 22:40–浦东次日 01:15。",
          note: "机票已出，班期以机票行程单为准；羽田国内/国际航站楼换乘预留充足时间。"
        }
      ]
    },
    days: [
      {
        id: "hk-d1",
        date: "2027-03-05",
        city: "札幌",
        title: "转机落地，薄野安顿与第一碗拉面",
        items: [
          {
            id: "hk-d1-flight1",
            time: "08:35–12:20",
            kind: "transport",
            name: "上海浦东飞东京羽田 NH972",
            address: "Shanghai Pudong International Airport (PVG) T2",
            lat: 31.1443,
            lng: 121.8083,
            reservation: "none",
            reservationNote: "机票已出。",
            bookingUrl: "",
            cost: { amount: 0, note: "已含在已订机票里。" },
            note: "建议提前 2.5–3 小时到浦东。到达羽田国际航站楼（多为 T3）后按指示转机国内线 NH69（通常 T2），预留安检与登机时间。"
          },
          {
            id: "hk-d1-flight2",
            time: "15:00–16:35",
            kind: "transport",
            name: "羽田飞新千岁 NH69",
            address: "New Chitose Airport (CTS)",
            lat: 42.7752,
            lng: 141.6925,
            reservation: "none",
            reservationNote: "机票已出；班期请再核行程单。",
            bookingUrl: "",
            cost: { amount: 0, note: "已含在已订机票里。" },
            note: "到新千岁后出站跟随「札幌」方向标去机场快线 JR 站。3 月仍可能下雪，下机后保暖外套备好。"
          },
          {
            id: "hk-d1-airport-train",
            time: "17:00–17:40",
            kind: "transport",
            name: "机场快线 JR 到札幌站",
            address: "New Chitose Airport Station",
            lat: 42.7747,
            lng: 141.6914,
            reservation: "none",
            reservationNote: "刷 Kitaca / 西瓜卡 / 信用卡交通功能即可。",
            bookingUrl: "https://www.jreast.co.jp/",
            cost: { amount: 1200, note: "单程约 ¥1,070–1,200，以车站公示为准。" },
            note: "选「快速 Airport」约 37 分钟到札幌站。不租车；全程地铁/JR/巴士即可。"
          },
          {
            id: "hk-d1-hotel",
            time: "18:00",
            kind: "stay",
            name: "住薄野/札幌站南口商务酒店（连住 4 晚）",
            address: "Susukino, Chuo-ku, Sapporo",
            lat: 43.0556,
            lng: 141.3534,
            reservation: "recommended",
            reservationNote: "一个人订单人房或经济双人房；优先可免费取消、含浴缸或大浴场的商务酒店。",
            bookingUrl: "https://www.booking.com/",
            cost: { amount: 30000, note: "4 晚合计按每晚约 ¥7,500 估；压在总预算内的关键项。" },
            note: "薄野地铁站步行圈吃饭方便。行李先放前台再去吃饭也行。目标每晚含税 ¥6,500–8,500。"
          },
          {
            id: "hk-d1-ramen",
            time: "19:00",
            kind: "food",
            name: "札幌拉面横丁或附近味噌拉面",
            address: "Ramen Yokocho, Susukino, Sapporo",
            lat: 43.0567,
            lng: 141.354,
            reservation: "none",
            reservationNote: "不用预约，排队短就进。",
            bookingUrl: "",
            cost: { amount: 1200, note: "一碗拉面约 ¥900–1,400。" },
            photo: photo("hk-d1-susukino"),
            note: "落地日只安排一件事：吃热的、早点睡。顺便看一眼街上积雪厚不厚，并查明天小樽 vs 旭川天气预报，决定第 2 天走哪条。"
          }
        ]
      },
      {
        id: "hk-d2",
        date: "2027-03-06",
        city: "小樽 / 旭川",
        title: "看雪日：默认小樽；市区几乎无雪则改旭川",
        items: [
          {
            id: "hk-d2-decide",
            time: "出发前",
            kind: "sight",
            name: "今早怎么选：小樽还是旭川",
            address: "Sapporo Station",
            lat: 43.0686,
            lng: 141.3508,
            reservation: "none",
            reservationNote: "",
            bookingUrl: "https://www.jma.go.jp/bosai/forecast/",
            cost: { amount: 0, note: "免费。" },
            why: "3 月初札幌平原积雪一年差一年，当天看地面和预报再定，比死守小樽更稳。",
            note: "默认 A：小樽（近、轻松，有残雪就很出片）。改走 B：旭川（内陆更冷、积雪通常更厚，JR 约 1.5 小时，不租车）。两者只选一天，别两头跑。"
          },
          {
            id: "hk-d2-jr",
            time: "09:30–10:20",
            kind: "transport",
            name: "方案 A · JR 札幌 → 小樽",
            address: "Sapporo Station",
            lat: 43.0686,
            lng: 141.3508,
            reservation: "none",
            reservationNote: "普通车刷 IC 即可，不必指定席。",
            bookingUrl: "",
            cost: { amount: 0, note: "往返约 ¥1,500–1,800，已计入当地交通。" },
            note: "函馆本线约 30–45 分钟。雪天人行道滑，鞋子要有纹路。若已决定去旭川，跳过本条，改坐特急到旭川。"
          },
          {
            id: "hk-d2-canal",
            time: "10:30–12:00",
            kind: "sight",
            name: "方案 A · 小樽运河与仓库群（看残雪街景）",
            address: "Otaru Canal, Otaru",
            lat: 43.1991,
            lng: 141.0064,
            reservation: "none",
            reservationNote: "户外散步，不用票。",
            bookingUrl: "",
            cost: { amount: 0, note: "免费。" },
            photo: photo("hk-d2-otaru"),
            why: "近郊最轻松的雪街/运河组合；有积雪时一个人慢慢拍刚好。",
            note: "沿运河走到堺町通。若到站发现雪已化光、只剩泥水，也不必硬撑整天——可提早回札幌，把体力留给明天定山溪。"
          },
          {
            id: "hk-d2-otaru-lunch",
            time: "12:30",
            kind: "food",
            name: "方案 A · 小樽海鲜丼午饭",
            address: "Otaru Sankaku Market / Sakaimachi area",
            lat: 43.1975,
            lng: 141.0089,
            reservation: "none",
            reservationNote: "",
            bookingUrl: "",
            cost: { amount: 2200, note: "海鲜丼约 ¥1,800–2,800；省钱可便利店。" },
            note: "只在走小樽方案时吃这里。吃完堺町通咖啡歇脚，16:30 前赶回 JR。"
          },
          {
            id: "hk-d2-asahikawa-jr",
            time: "08:40–10:20",
            kind: "transport",
            name: "方案 B · JR 特急 札幌 → 旭川（备选看雪）",
            address: "Sapporo Station → Asahikawa Station",
            lat: 43.7634,
            lng: 142.3602,
            reservation: "recommended",
            reservationNote: "特急 Lilac/Kamui 可买指定席更稳；自由席也行。",
            bookingUrl: "https://www.jreast.co.jp/",
            cost: { amount: 0, note: "往返约 ¥4,500–5,500，比小樽贵，从交通机动预算出。" },
            note: "仅当札幌/小樽积雪很少时启用。单程约 1 小时 20–30 分。不租车；当天必须赶回札幌住。"
          },
          {
            id: "hk-d2-asahiyama",
            time: "11:00–14:30",
            kind: "sight",
            name: "方案 B · 旭山动物园冬景（备选）",
            address: "Asahiyama Zoo, Asahikawa",
            lat: 43.7682,
            lng: 142.4786,
            reservation: "none",
            reservationNote: "冬季常缩短开园；出发前查官网时间。",
            bookingUrl: "https://www.city.asahikawa.hokkaido.jp/asahiyamazoo/",
            cost: { amount: 1000, note: "门票约 ¥1,000；巴士往返另计约 ¥800。" },
            photo: photo("hk-d2-asahiyama"),
            why: "内陆雪通常比札幌厚，企鹅散步/雪地动物展是「真的在看雪」的一天。",
            note: "旭川站前坐巴士去动物园。穿防滑靴。若不想看动物，可改在旭川站周边河畔/公园拍雪景（见下一条）。"
          },
          {
            id: "hk-d2-asahikawa-town",
            time: "15:00–16:30",
            kind: "sight",
            name: "方案 B · 旭川站前雪街与咖啡收尾",
            address: "Asahikawa Station area",
            lat: 43.7634,
            lng: 142.3602,
            reservation: "none",
            reservationNote: "",
            bookingUrl: "",
            cost: { amount: 600, note: "咖啡约 ¥500–800。" },
            photo: photo("hk-d2-asahikawa"),
            note: "赶 17 点前后特急回札幌即可。晚上薄野吃饭，控制 ¥1,500–2,500。"
          }
        ]
      },
      {
        id: "hk-d3",
        date: "2027-03-07",
        city: "定山溪",
        title: "定山溪：泡汤 + 本趟最稳的雪景保底",
        items: [
          {
            id: "hk-d3-bus",
            time: "09:30–10:50",
            kind: "transport",
            name: "定山溪观光巴士（札幌站/大通一带上车）",
            address: "Sapporo Station Bus Terminal area",
            lat: 43.0687,
            lng: 141.3494,
            reservation: "recommended",
            reservationNote: "可现场买票；旺季或周末建议提前在官网/便利店看班次。",
            bookingUrl: "https://www.chuo-bus.co.jp/",
            cost: { amount: 0, note: "往返约 ¥1,500–2,000，已计入当地交通。" },
            note: "不租车。山谷海拔更高，3 月初比市区更容易还有积雪——这是「札幌不下雪」时的主保底。确认末班回札幌时间。"
          },
          {
            id: "hk-d3-onsen",
            time: "11:30–15:30",
            kind: "sight",
            name: "定山溪温泉·日归入浴（雪中汤）",
            address: "Jozankei Onsen, Minami-ku, Sapporo",
            lat: 42.965,
            lng: 141.1636,
            reservation: "recommended",
            reservationNote: "选一家开放日归的温泉旅馆；部分需电话或官网预约入浴时段。",
            bookingUrl: "https://jozankei.jp/",
            cost: { amount: 2000, note: "日归入浴约 ¥1,500–3,000，含毛巾另计。" },
            photo: photo("hk-d3-jozankei"),
            why: "泡汤是目标，山谷残雪是加分；哪怕市区化光，这里仍常能看见雪景。",
            note: "带换洗衣物与小毛巾。有文身需提前确认馆方规定。泡前先在河岸/桥边走一圈拍雪，再进浴场。不必再赶别的景点。"
          },
          {
            id: "hk-d3-lunch",
            time: "12:30",
            kind: "food",
            name: "定山溪旅馆食堂或街上定食",
            address: "Jozankei Onsen town",
            lat: 42.9645,
            lng: 141.1645,
            reservation: "none",
            reservationNote: "",
            bookingUrl: "",
            cost: { amount: 1500, note: "定食约 ¥1,200–2,000。" },
            note: "温泉乡选择不多，吃饱就好。预留体温回升时间再出门等巴士。"
          },
          {
            id: "hk-d3-return",
            time: "16:00–17:30",
            kind: "transport",
            name: "巴士返回札幌",
            address: "Jozankei Bus Terminal",
            lat: 42.9658,
            lng: 141.1628,
            reservation: "none",
            reservationNote: "核对末班车，雪天可能误点。",
            bookingUrl: "",
            cost: { amount: 0, note: "已计入当地交通。" },
            note: "晚上薄野随便吃，早睡。若身体舒服，可改成定山溪住一晚——但会多一笔住宿，¥3,000 总预算会更紧。"
          }
        ]
      },
      {
        id: "hk-d4",
        date: "2027-03-08",
        city: "札幌",
        title: "大通公园慢逛与藻岩山夜景",
        items: [
          {
            id: "hk-d4-odori",
            time: "10:30–12:30",
            kind: "sight",
            name: "大通公园 + 电视塔外观",
            address: "Odori Park, Sapporo",
            lat: 43.0604,
            lng: 141.3545,
            reservation: "none",
            reservationNote: "公园免费；电视塔观景台可选，省钱可只在外观拍照。",
            bookingUrl: "",
            cost: { amount: 0, note: "公园免费；若上塔另计约 ¥1,000，可选。" },
            photo: photo("hk-d4-odori"),
            why: "札幌市中心最轻松的散步轴，一个人不用赶行程。",
            note: "有残雪就当「城市雪景」拍；若已经化光，把看雪期待放在昨天定山溪/前天旭川即可，今天专注吃与夜景。"
          },
          {
            id: "hk-d4-lunch",
            time: "12:30",
            kind: "food",
            name: "汤咖喱或成吉思汗午饭",
            address: "Near Odori / Susukino, Sapporo",
            lat: 43.0578,
            lng: 141.3538,
            reservation: "none",
            reservationNote: "热门汤咖喱店可能排队，错峰或换下一家。",
            bookingUrl: "",
            cost: { amount: 1800, note: "约 ¥1,500–2,500。" },
            note: "一个人点单人套餐。想更省就便利店热食 + 一杯热饮。"
          },
          {
            id: "hk-d4-free",
            time: "14:00–16:30",
            kind: "sight",
            name: "自由时间：狸小路或回酒店休息",
            address: "Tanukikoji Shopping Arcade, Sapporo",
            lat: 43.0572,
            lng: 141.353,
            reservation: "none",
            reservationNote: "",
            bookingUrl: "",
            cost: { amount: 0, note: "逛街按需；预算紧就只逛不买。" },
            note: "休闲游故意留白。晚上要上藻岩山的话，下午别排太满。"
          },
          {
            id: "hk-d4-moiwa",
            time: "17:30–19:30",
            kind: "sight",
            name: "藻岩山缆车夜景",
            address: "Mt. Moiwa Ropeway, Sapporo",
            lat: 43.0364,
            lng: 141.3211,
            reservation: "none",
            reservationNote: "末班缆车季节不同，当天查官网；雪天可能停运。",
            bookingUrl: "https://moiwa.keio-cable.co.jp/",
            cost: { amount: 2300, note: "往返缆车约 ¥2,200–2,400。" },
            photo: photo("hk-d4-moiwa"),
            why: "札幌最值得的一晚夜景，公共交通可到，不必租车。",
            note: "地铁东西线到绳生站再转巴士/接驳（以当日官网为准）。山顶风大，羽绒服必穿。若不开放，改去JR塔展望或早点休息。"
          }
        ]
      },
      {
        id: "hk-d5",
        date: "2027-03-09",
        city: "札幌",
        title: "收尾半天，傍晚飞回上海",
        items: [
          {
            id: "hk-d5-morning",
            time: "09:30–12:00",
            kind: "sight",
            name: "札幌站周边轻松逛 / 买伴手礼",
            address: "Sapporo Station",
            lat: 43.0686,
            lng: 141.3508,
            reservation: "none",
            reservationNote: "",
            bookingUrl: "",
            cost: { amount: 1500, note: "伴手礼按需；白巧克力饼干等，控制冲动消费。" },
            note: "中午前退房。行李可寄放酒店或站内储物柜。不安排远郊，保证下午去机场从容。"
          },
          {
            id: "hk-d5-lunch",
            time: "12:00",
            kind: "food",
            name: "札幌站午饭",
            address: "Sapporo Station food court / ramen",
            lat: 43.0683,
            lng: 141.3505,
            reservation: "none",
            reservationNote: "",
            bookingUrl: "",
            cost: { amount: 1200, note: "约 ¥1,000–1,500。" },
            note: "吃完再去机场。机场也有拉面，但价格通常更高。"
          },
          {
            id: "hk-d5-to-airport",
            time: "15:00–16:00",
            kind: "transport",
            name: "JR 机场快线去新千岁",
            address: "Sapporo Station → New Chitose Airport",
            lat: 43.0686,
            lng: 141.3508,
            reservation: "none",
            reservationNote: "NH78 约 19:30 起飞，建议 16:00 前后到机场即可从容。",
            bookingUrl: "",
            cost: { amount: 1200, note: "单程约 ¥1,070–1,200。" },
            note: "不租车。预留误点缓冲；雪天列车可能慢一点。"
          },
          {
            id: "hk-d5-flight1",
            time: "19:30–21:10",
            kind: "transport",
            name: "新千岁飞羽田 NH78",
            address: "New Chitose Airport (CTS)",
            lat: 42.7752,
            lng: 141.6925,
            reservation: "none",
            reservationNote: "机票已出。",
            bookingUrl: "",
            cost: { amount: 0, note: "已含在已订机票里。" },
            note: "到羽田后转国际出发的 NH967（多为 T2 国际手续），按机场指示走，别在国内到达区耽搁太久。"
          },
          {
            id: "hk-d5-flight2",
            time: "22:40–01:15+1",
            kind: "transport",
            name: "羽田飞上海浦东 NH967",
            address: "Tokyo Haneda (HND) → Shanghai Pudong (PVG)",
            lat: 35.5494,
            lng: 139.7798,
            reservation: "none",
            reservationNote: "机票已出；到达为次日凌晨。",
            bookingUrl: "",
            cost: { amount: 0, note: "已含在已订机票里。" },
            note: "浦东约 01:15 落地，提前想好回市区的地铁末班或打车方案。"
          }
        ]
      }
    ]
  }
];
