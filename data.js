const PHOTOS = {
  "hk-d1-susukino": [
    "Chuoterminal · CC BY 3.0",
    "Sapporo_tram_Susukino_station_platform_20160207_205636.jpg"
  ],
  "hk-d2-otaru": [
    "t-konno · CC BY-SA 3.0",
    "小樽雪あかりの路2013（Otaru_Snow_Light_Path_2013）_-_panoramio_(3).jpg"
  ],
  "hk-d2-asahikawa": [
    "ほくなん · Public domain",
    "SciPal_Asahikawa_Hokkaido_Japan.jpg"
  ],
  "hk-d2-asahiyama": [
    "Lionel Leong · CC BY-SA 2.0",
    "Winter_in_Hokkaido(Asahiyama_Zoo_旭山動物園)_-_03_(26152902302).jpg"
  ],
  "hk-d3-jozankei": [
    "MIKI Yoshihito · CC BY 2.0",
    "Jozankei_Onsen,_Sapporo,_Hokkaido_Prefecture;_January_2018_(22).jpg"
  ],
  "hk-d4-odori": [
    "ノボホショコロトソ · CC BY 4.0",
    "Sapporo_TV_Tower_and_Odori_Park_01.jpg"
  ],
  "hk-d4-moiwa": [
    "掬茶 · CC BY-SA 4.0",
    "City_nightscape_of_Sapporo_from_Mt._Moiwa_20260703b.jpg"
  ],
  "au-d1-opera": [
    "Bernard Spragg · CC0",
    "Sydney_Australia._(21339175489).jpg"
  ],
  "au-d1-tour": [
    "Nick-D · CC BY-SA 3.0",
    "Sydney_Opera_House_concert_hall_October_2018.jpg"
  ],
  "au-d2-gap": [
    "Dietmar Rabich · CC BY-SA 4.0",
    "Sydney_(AU),_Watsons_Bay_--_2019_--_2295.jpg"
  ],
  "au-d3-manly": [
    "J Bar · CC BY-SA 3.0",
    "Shelly_Beach_Manly.JPG"
  ],
  "au-d3-northhead": [
    "ColonelLight · CC0",
    "Burragula_Lookout_North_Head_02.jpg"
  ],
  "au-d4-lagoon": [
    "Niki Gango · CC BY-SA 3.0",
    "Airlie_Beach_Lagoon.JPG"
  ],
  "au-d5-sand": [
    "Slug69 · CC BY-SA 2.0",
    "Whitehaven_Beach,_Whitsunday_Island,_Queensland.jpg"
  ],
  "au-d5-hill": [
    "Isderion · CC BY-SA 3.0 DE",
    "Hill_Inlet_at_the_end_of_Whitehaven_Beach_in_the_Whitsundays.JPG"
  ],
  "au-d7-lanes": [
    "Ashton 29 · CC BY-SA 4.0",
    "Melbourne_laneway.jpg"
  ],
  "au-d8-reb": [
    "Diliff, Ian Fieggen · CC BY 2.5",
    "Royal_exhibition_building_tulips_straight.jpg"
  ],
  "au-d8-fitzroy": [
    "Nick-D · CC BY-SA 4.0",
    "Buildings_on_Gertrude_Street_December_2020.jpg"
  ],
  "au-d8-convent": [
    "Redtree21 · CC BY-SA 4.0",
    "Abbotsford_Convent_Looking_North.jpg"
  ],
  "au-d8-ngv": [
    "Shkuru Afshar · CC BY-SA 4.0",
    "National_Gallery_of_Victoria_2024.jpg"
  ]
};

function photo(id) {
  const [credit, file] = PHOTOS[id];
  return { src: `photos/${id}.jpg`, credit, link: `https://commons.wikimedia.org/wiki/File:${file}` };
}

window.SEED_TRIPS = [
  {
    "id": "hokkaido-2027",
    "title": "北海道",
    "start": "2027-03-05",
    "end": "2027-03-09",
    "summary": "",
    "visa": {
      "status": "required",
      "passport": "中国大陆护照",
      "type": "日本单次/多次旅游签证（个人旅游 · 上海领区）",
      "applyUrl": "https://www.shanghai.cn.emb-japan.go.jp/itpr_zh/00_000897.html",
      "guideUrl": "https://www.shanghai.cn.emb-japan.go.jp/itpr_ja/11_000001_00633.html",
      "feeNote": "单次合计约 ¥950–1,150 人民币/人（2026年7月1日起使领馆规费涨至单次 ¥715、多次 ¥1,430，另加指定旅行社代办服务费约 ¥230–400；多次签合计约 ¥1,650–1,900）",
      "timeline": "建议最晚 2027 年 1 月底前递交；春节档前后旅行社排期更紧",
      "docs": [
        {
          "id": "passport",
          "label": "护照有效期覆盖行程",
          "note": "至少 2 页空白签证页；如有旧护照需一并提交"
        },
        {
          "id": "photo",
          "label": "签证用近照（4.5×4.5cm）",
          "note": "6 个月内白底无修图清晰照"
        },
        {
          "id": "form",
          "label": "签证申请表与停留日程表",
          "note": "可用本页打印的路书作行程参考"
        },
        {
          "id": "hotel",
          "label": "酒店预订单",
          "note": "札幌 4 晚；可先订可免费取消的商务酒店，出签前勿随意退改"
        },
        {
          "id": "flight",
          "label": "往返机票行程单",
          "note": "NH972+NH69 / NH78+NH967 已订，导出电子行程单即可"
        },
        {
          "id": "funds",
          "label": "资产与在职/学生证明",
          "note": "上海领区常见税单/银行流水/存款任一 + 在职证明，按所选代办社要求准备"
        }
      ],
      "tips": [
        "中国大陆护照赴日旅游签须通过日本驻上海总领事馆指定旅行社代办（或符合条件走 JAPAN eVISA 单次电子签），使领馆不接受个人直接送签",
        "2026 年 7 月 1 日起日本自 1978 年以来首次大幅上调签证规费（单次 ¥145 → ¥715、多次 ¥285 → ¥1,430），注意甄别网上未更新的老旧低价攻略",
        "不要把护照号、签证申请号写进本页",
        "3 月初札幌市区积雪不稳定：有残雪就逛市景；想看厚雪优先定山溪，市区几乎化光则把第 2 天改成旭川一日"
      ],
      "disclaimer": "政策、费用与材料清单以日本驻上海总领事馆（2026年7月1日调价标准）及指定代办旅行社为准；本页只作出行准备清单，不构成签证代理或获批承诺。"
    },
    "budget": {
      "currency": "JPY",
      "party": "1 人独自出行",
      "basis": "当地吃住行门票约 6.37 万日元（约 ¥2,660 人民币），压在 3,000 元以内；但加上 2026 年 7 月涨价后的日本单次签证（规费 ¥715 + 代办费，合计约 ¥980），除机票外总成本约 ¥3,640 人民币。若想连签证一起严控在 ¥3,000 左右，需把 4 晚住宿压到高级胶囊/青旅（每晚 ¥4,000–5,000 日元）。",
      "cnyRate": 0.0418,
      "rateDate": "2026-11-16",
      "extras": [
        {
          "label": "日本单次旅游签证（上海送签：领馆规费 + 旅行社代办）",
          "cat": "other",
          "cny": 980,
          "note": "2026年7月1日起领馆单次规费涨至 ¥715 人民币，加上海领区指定旅行社常规代办费（自备机酒约 ¥238–300）合计约 ¥950–1,020，按 ¥980 计；若办三年多次（规费 ¥1,430 + 代办）则约 ¥1,800+。"
        },
        {
          "label": "当地交通（机场快线 + 市内 + 小樽或旭川 JR + 定山溪巴士）",
          "cat": "transport",
          "amount": 10000,
          "note": "默认含小樽往返；若改旭川看雪，JR 往返约 ¥4,500–5,500，比小樽贵，总额按此条机动。"
        },
        {
          "label": "便利店/简餐机动",
          "cat": "food",
          "amount": 6000,
          "note": "未单列的早饭与咖啡零食；正餐已尽量写在各站。"
        },
        {
          "label": "已订机票（上海—羽田—新千岁开口程）",
          "cat": "flight",
          "note": "去：NH972+NH69；回：NH78+NH967。票价已付，不重复计入待花总额。"
        }
      ],
      "origins": [
        {
          "id": "shanghai",
          "label": "上海",
          "brief": "去：3月5日 NH972 浦东 08:35–羽田 12:20，转 NH69 羽田 15:00–新千岁约 16:35。回：3月9日 NH78 新千岁约 19:30–羽田 21:10，转 NH967 羽田 22:40–浦东次日 01:15。",
          "note": "机票已出，班期以机票行程单为准；羽田国内/国际航站楼换乘预留充足时间。"
        }
      ]
    },
    "days": [
      {
        "id": "hk-d1",
        "date": "2027-03-05",
        "city": "札幌",
        "title": "转机落地，薄野安顿与第一碗拉面",
        "items": [
          {
            "id": "hk-d1-flight1",
            "time": "08:35–12:20",
            "kind": "transport",
            "name": "上海浦东飞东京羽田 NH972",
            "address": "Shanghai Pudong International Airport (PVG) T2",
            "lat": 31.1443,
            "lng": 121.8083,
            "reservation": "none",
            "reservationNote": "机票已出。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "已含在已订机票里。"
            },
            "note": "建议提前 2.5–3 小时到浦东 T2。落地羽田 T3 后先入境、取行李、过海关，出海关找全日空国内线转机柜台重挂行李到新千岁，再坐免费接驳巴士去 T2 搭 NH69。"
          },
          {
            "id": "hk-d1-flight2",
            "time": "15:00–16:35",
            "kind": "transport",
            "name": "羽田飞新千岁 NH69",
            "address": "New Chitose Airport (CTS)",
            "lat": 42.7752,
            "lng": 141.6925,
            "reservation": "none",
            "reservationNote": "机票已出；班期请再核行程单。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "已含在已订机票里。"
            },
            "note": "到新千岁后出站跟随「札幌」方向标去机场快线 JR 站。3 月仍可能下雪，下机后保暖外套备好。"
          },
          {
            "id": "hk-d1-airport-train",
            "time": "17:00–17:40",
            "kind": "transport",
            "name": "机场快线 JR 到札幌站",
            "address": "New Chitose Airport Station",
            "lat": 42.7747,
            "lng": 141.6914,
            "reservation": "none",
            "reservationNote": "刷 Kitaca / 西瓜卡 / 信用卡交通功能即可。",
            "bookingUrl": "https://www.jreast.co.jp/",
            "cost": {
              "amount": 1200,
              "note": "单程约 ¥1,070–1,200，以车站公示为准。"
            },
            "note": "选「快速 Airport」约 37 分钟到札幌站。不租车；全程地铁/JR/巴士即可。"
          },
          {
            "id": "hk-d1-hotel",
            "time": "18:00",
            "kind": "stay",
            "name": "住薄野/札幌站南口商务酒店（连住 4 晚）",
            "address": "Susukino, Chuo-ku, Sapporo",
            "lat": 43.0556,
            "lng": 141.3534,
            "reservation": "recommended",
            "reservationNote": "一个人订单人房或经济双人房；优先可免费取消、含浴缸或大浴场的商务酒店。",
            "bookingUrl": "https://www.booking.com/",
            "cost": {
              "amount": 30000,
              "note": "4 晚合计按每晚约 ¥7,500 估；压在总预算内的关键项。"
            },
            "note": "札幌站到大通、薄野有地下步行空间，风雪天不用走地面；出站可在便利店备一副防滑鞋套（3 月早晚人行道易结冰）。目标每晚含税 ¥6,500–8,500。"
          },
          {
            "id": "hk-d1-ramen",
            "time": "19:00",
            "kind": "food",
            "name": "札幌拉面横丁或附近味噌拉面",
            "address": "Ramen Yokocho, Susukino, Sapporo",
            "lat": 43.0567,
            "lng": 141.354,
            "reservation": "none",
            "reservationNote": "不用预约，排队短就进。",
            "bookingUrl": "",
            "cost": {
              "amount": 1200,
              "note": "一碗拉面约 ¥900–1,400。"
            },
            "photo": photo("hk-d1-susukino"),
            "note": "落地日只安排一件事：吃热的、早点睡。顺便看一眼街上积雪厚不厚，并查明天小樽 vs 旭川天气预报，决定第 2 天走哪条。"
          }
        ]
      },
      {
        "id": "hk-d2",
        "date": "2027-03-06",
        "city": "小樽 / 旭川",
        "title": "看雪日：默认小樽；市区几乎无雪则改旭川",
        "items": [
          {
            "id": "hk-d2-decide",
            "time": "出发前",
            "kind": "sight",
            "name": "今早怎么选：小樽还是旭川",
            "address": "Sapporo Station",
            "lat": 43.0686,
            "lng": 141.3508,
            "reservation": "none",
            "reservationNote": "",
            "bookingUrl": "https://www.jma.go.jp/bosai/forecast/",
            "cost": {
              "amount": 0,
              "note": "免费。"
            },
            "why": "3 月初札幌平原积雪一年差一年，当天看地面和预报再定，比死守小樽更稳。",
            "note": "默认 A：小樽（近、轻松，有残雪就很出片）。改走 B：旭川（内陆更冷、积雪通常更厚，JR 约 1.5 小时，不租车）。两者只选一天，别两头跑。"
          },
          {
            "id": "hk-d2-jr",
            "time": "09:30–10:20",
            "kind": "transport",
            "name": "方案 A · JR 札幌 → 小樽",
            "address": "Sapporo Station",
            "lat": 43.0686,
            "lng": 141.3508,
            "reservation": "none",
            "reservationNote": "普通车刷 IC 即可，不必指定席。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "往返约 ¥1,500–1,800，已计入当地交通。"
            },
            "note": "函馆本线约 30–45 分钟。雪天人行道滑，鞋子要有纹路。若已决定去旭川，跳过本条，改坐特急到旭川。"
          },
          {
            "id": "hk-d2-canal",
            "time": "10:30–12:00",
            "kind": "sight",
            "name": "方案 A · 小樽运河与仓库群（看残雪街景）",
            "address": "Otaru Canal, Otaru",
            "lat": 43.1991,
            "lng": 141.0064,
            "reservation": "none",
            "reservationNote": "户外散步，不用票。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "免费。"
            },
            "photo": photo("hk-d2-otaru"),
            "why": "近郊最轻松的雪街/运河组合；有积雪时一个人慢慢拍刚好。",
            "note": "沿运河走到堺町通。若到站发现雪已化光、只剩泥水，也不必硬撑整天——可提早回札幌，把体力留给明天定山溪。"
          },
          {
            "id": "hk-d2-otaru-lunch",
            "time": "12:30",
            "kind": "food",
            "name": "方案 A · 小樽海鲜丼午饭",
            "address": "Otaru Sankaku Market / Sakaimachi area",
            "lat": 43.1975,
            "lng": 141.0089,
            "reservation": "none",
            "reservationNote": "",
            "bookingUrl": "",
            "cost": {
              "amount": 2200,
              "note": "海鲜丼约 ¥1,800–2,800；省钱可便利店。"
            },
            "note": "只在走小樽方案时吃这里。吃完堺町通咖啡歇脚，16:30 前赶回 JR。"
          },
          {
            "id": "hk-d2-asahikawa-jr",
            "time": "08:40–10:20",
            "kind": "transport",
            "name": "方案 B · JR 特急 札幌 → 旭川（备选看雪）",
            "address": "Sapporo Station → Asahikawa Station",
            "lat": 43.7634,
            "lng": 142.3602,
            "reservation": "recommended",
            "reservationNote": "特急 Lilac/Kamui 可买指定席更稳；自由席也行。",
            "bookingUrl": "https://www.jreast.co.jp/",
            "cost": {
              "amount": 0,
              "note": "往返约 ¥4,500–5,500，比小樽贵，从交通机动预算出。"
            },
            "note": "仅当札幌/小樽积雪很少时启用。单程约 1 小时 20–30 分。不租车；当天必须赶回札幌住。"
          },
          {
            "id": "hk-d2-asahiyama",
            "time": "11:00–14:30",
            "kind": "sight",
            "name": "方案 B · 旭山动物园冬景（备选）",
            "address": "Asahiyama Zoo, Asahikawa",
            "lat": 43.7682,
            "lng": 142.4786,
            "reservation": "none",
            "reservationNote": "冬季常缩短开园；出发前查官网时间。",
            "bookingUrl": "https://www.city.asahikawa.hokkaido.jp/asahiyamazoo/",
            "cost": {
              "amount": 1000,
              "note": "门票约 ¥1,000；巴士往返另计约 ¥800。"
            },
            "photo": photo("hk-d2-asahiyama"),
            "why": "内陆雪通常比札幌厚，企鹅散步/雪地动物展是「真的在看雪」的一天。",
            "note": "旭川站前坐巴士去动物园。穿防滑靴。若不想看动物，可改在旭川站周边河畔/公园拍雪景（见下一条）。"
          },
          {
            "id": "hk-d2-asahikawa-town",
            "time": "15:00–16:30",
            "kind": "sight",
            "name": "方案 B · 旭川站前雪街与咖啡收尾",
            "address": "Asahikawa Station area",
            "lat": 43.7634,
            "lng": 142.3602,
            "reservation": "none",
            "reservationNote": "",
            "bookingUrl": "",
            "cost": {
              "amount": 600,
              "note": "咖啡约 ¥500–800。"
            },
            "photo": photo("hk-d2-asahikawa"),
            "note": "赶 17 点前后特急回札幌即可。晚上薄野吃饭，控制 ¥1,500–2,500。"
          }
        ]
      },
      {
        "id": "hk-d3",
        "date": "2027-03-07",
        "city": "定山溪",
        "title": "定山溪：泡汤 + 本趟最稳的雪景保底",
        "items": [
          {
            "id": "hk-d3-bus",
            "time": "09:30–10:50",
            "kind": "transport",
            "name": "定山溪观光巴士（札幌站/大通一带上车）",
            "address": "Sapporo Station Bus Terminal area",
            "lat": 43.0687,
            "lng": 141.3494,
            "reservation": "recommended",
            "reservationNote": "可现场买票；旺季或周末建议提前在官网/便利店看班次。",
            "bookingUrl": "https://www.chuo-bus.co.jp/",
            "cost": {
              "amount": 0,
              "note": "往返约 ¥1,500–2,000，已计入当地交通。"
            },
            "note": "不租车。山谷海拔更高，3 月初比市区更容易还有积雪——这是「札幌不下雪」时的主保底。确认末班回札幌时间。"
          },
          {
            "id": "hk-d3-onsen",
            "time": "11:30–15:30",
            "kind": "sight",
            "name": "定山溪温泉·日归入浴（雪中汤）",
            "address": "Jozankei Onsen, Minami-ku, Sapporo",
            "lat": 42.965,
            "lng": 141.1636,
            "reservation": "recommended",
            "reservationNote": "选一家开放日归的温泉旅馆；部分需电话或官网预约入浴时段。",
            "bookingUrl": "https://jozankei.jp/",
            "cost": {
              "amount": 2000,
              "note": "日归入浴约 ¥1,500–3,000，含毛巾另计。"
            },
            "photo": photo("hk-d3-jozankei"),
            "why": "泡汤是目标，山谷残雪是加分；哪怕市区化光，这里仍常能看见雪景。",
            "note": "带换洗衣物与小毛巾。有文身需提前确认馆方规定。泡前先在河岸/桥边走一圈拍雪，再进浴场。不必再赶别的景点。"
          },
          {
            "id": "hk-d3-lunch",
            "time": "12:30",
            "kind": "food",
            "name": "定山溪旅馆食堂或街上定食",
            "address": "Jozankei Onsen town",
            "lat": 42.9645,
            "lng": 141.1645,
            "reservation": "none",
            "reservationNote": "",
            "bookingUrl": "",
            "cost": {
              "amount": 1500,
              "note": "定食约 ¥1,200–2,000。"
            },
            "note": "温泉乡选择不多，吃饱就好。预留体温回升时间再出门等巴士。"
          },
          {
            "id": "hk-d3-return",
            "time": "16:00–17:30",
            "kind": "transport",
            "name": "巴士返回札幌",
            "address": "Jozankei Bus Terminal",
            "lat": 42.9658,
            "lng": 141.1628,
            "reservation": "none",
            "reservationNote": "核对末班车，雪天可能误点。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "已计入当地交通。"
            },
            "note": "晚上薄野随便吃，早睡。若身体舒服，可改成定山溪住一晚——但会多一笔住宿，¥3,000 总预算会更紧。"
          }
        ]
      },
      {
        "id": "hk-d4",
        "date": "2027-03-08",
        "city": "札幌",
        "title": "大通公园慢逛与藻岩山夜景",
        "items": [
          {
            "id": "hk-d4-odori",
            "time": "10:30–12:30",
            "kind": "sight",
            "name": "大通公园 + 电视塔外观",
            "address": "Odori Park, Sapporo",
            "lat": 43.0604,
            "lng": 141.3545,
            "reservation": "none",
            "reservationNote": "公园免费；电视塔观景台可选，省钱可只在外观拍照。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "公园免费；若上塔另计约 ¥1,000，可选。"
            },
            "photo": photo("hk-d4-odori"),
            "why": "札幌市中心最轻松的散步轴，一个人不用赶行程。",
            "note": "有残雪就当「城市雪景」拍；若已经化光，把看雪期待放在昨天定山溪/前天旭川即可，今天专注吃与夜景。"
          },
          {
            "id": "hk-d4-lunch",
            "time": "12:30",
            "kind": "food",
            "name": "汤咖喱或成吉思汗午饭",
            "address": "Near Odori / Susukino, Sapporo",
            "lat": 43.0578,
            "lng": 141.3538,
            "reservation": "none",
            "reservationNote": "热门汤咖喱店可能排队，错峰或换下一家。",
            "bookingUrl": "",
            "cost": {
              "amount": 1800,
              "note": "约 ¥1,500–2,500。"
            },
            "note": "一个人点单人套餐。想更省就便利店热食 + 一杯热饮。"
          },
          {
            "id": "hk-d4-free",
            "time": "14:00–16:30",
            "kind": "sight",
            "name": "自由时间：狸小路或回酒店休息",
            "address": "Tanukikoji Shopping Arcade, Sapporo",
            "lat": 43.0572,
            "lng": 141.353,
            "reservation": "none",
            "reservationNote": "",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "逛街按需；预算紧就只逛不买。"
            },
            "note": "休闲游故意留白。晚上要上藻岩山的话，下午别排太满。"
          },
          {
            "id": "hk-d4-moiwa",
            "time": "17:30–19:30",
            "kind": "sight",
            "name": "藻岩山缆车夜景",
            "address": "Mt. Moiwa Ropeway, Sapporo",
            "lat": 43.0364,
            "lng": 141.3211,
            "reservation": "none",
            "reservationNote": "末班缆车季节不同，当天查官网；雪天可能停运。",
            "bookingUrl": "https://moiwa.keio-cable.co.jp/",
            "cost": {
              "amount": 2300,
              "note": "往返缆车约 ¥2,200–2,400。"
            },
            "photo": photo("hk-d4-moiwa"),
            "why": "札幌最值得的一晚夜景，公共交通可到，不必租车。",
            "note": "地铁东西线到绳生站再转巴士/接驳（以当日官网为准）。山顶风大，羽绒服必穿。若不开放，改去JR塔展望或早点休息。"
          }
        ]
      },
      {
        "id": "hk-d5",
        "date": "2027-03-09",
        "city": "札幌",
        "title": "收尾半天，傍晚飞回上海",
        "items": [
          {
            "id": "hk-d5-morning",
            "time": "09:30–12:00",
            "kind": "sight",
            "name": "札幌站周边轻松逛 / 买伴手礼",
            "address": "Sapporo Station",
            "lat": 43.0686,
            "lng": 141.3508,
            "reservation": "none",
            "reservationNote": "",
            "bookingUrl": "",
            "cost": {
              "amount": 1500,
              "note": "伴手礼按需；白巧克力饼干等，控制冲动消费。"
            },
            "note": "中午前退房。行李可寄放酒店或站内储物柜。不安排远郊，保证下午去机场从容。"
          },
          {
            "id": "hk-d5-lunch",
            "time": "12:00",
            "kind": "food",
            "name": "札幌站午饭",
            "address": "Sapporo Station food court / ramen",
            "lat": 43.0683,
            "lng": 141.3505,
            "reservation": "none",
            "reservationNote": "",
            "bookingUrl": "",
            "cost": {
              "amount": 1200,
              "note": "约 ¥1,000–1,500。"
            },
            "note": "吃完再去机场。机场也有拉面，但价格通常更高。"
          },
          {
            "id": "hk-d5-to-airport",
            "time": "15:00–16:00",
            "kind": "transport",
            "name": "JR 机场快线去新千岁",
            "address": "Sapporo Station → New Chitose Airport",
            "lat": 43.0686,
            "lng": 141.3508,
            "reservation": "none",
            "reservationNote": "NH78 约 19:30 起飞，建议 16:00 前后到机场即可从容。",
            "bookingUrl": "",
            "cost": {
              "amount": 1200,
              "note": "单程约 ¥1,070–1,200。"
            },
            "note": "不租车。预留误点缓冲；雪天列车可能慢一点。"
          },
          {
            "id": "hk-d5-flight1",
            "time": "19:30–21:10",
            "kind": "transport",
            "name": "新千岁飞羽田 NH78",
            "address": "New Chitose Airport (CTS)",
            "lat": 42.7752,
            "lng": 141.6925,
            "reservation": "none",
            "reservationNote": "机票已出。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "已含在已订机票里。"
            },
            "note": "到羽田后转国际出发的 NH967（多为 T2 国际手续），按机场指示走，别在国内到达区耽搁太久。"
          },
          {
            "id": "hk-d5-flight2",
            "time": "22:40–01:15+1",
            "kind": "transport",
            "name": "羽田飞上海浦东 NH967",
            "address": "Tokyo Haneda (HND) → Shanghai Pudong (PVG)",
            "lat": 35.5494,
            "lng": 139.7798,
            "reservation": "none",
            "reservationNote": "机票已出；到达为次日凌晨。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "已含在已订机票里。"
            },
            "note": "浦东约 01:15 落地，提前想好回市区的地铁末班或打车方案。"
          }
        ]
      }
    ]
  },
  {
    "id": "australia-2027",
    "title": "澳洲",
    "start": "2027-04-29",
    "end": "2027-05-05",
    "summary": "",
    "visa": {
      "status": "required",
      "passport": "中国大陆护照",
      "type": "Visitor visa (subclass 600) · Tourist stream",
      "applyUrl": "https://online.immi.gov.au/lusc/login",
      "guideUrl": "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600",
      "feeNote": "约 A$250/人（以官网实时费用为准）",
      "timeline": "建议出发前 6–8 周递交；旺季更早",
      "docs": [
        {
          "id": "passport",
          "label": "护照有效期覆盖行程",
          "note": "建议剩余有效期 6 个月以上"
        },
        {
          "id": "photo",
          "label": "签证用近照"
        },
        {
          "id": "itinerary",
          "label": "行程与酒店预订单",
          "note": "可用本页「打印 / 导出 PDF 路书」"
        },
        {
          "id": "funds",
          "label": "资金证明",
          "note": "近几个月银行流水等"
        },
        {
          "id": "employment",
          "label": "在职或学生证明"
        }
      ],
      "tips": [
        "填表信息与护照、材料保持一致",
        "不要把护照号、签证申请号写进本页或云端共享"
      ],
      "disclaimer": "政策、费用与审理时间以移民局官网为准；本页只作出行准备清单，不构成签证代理或获批承诺。"
    },
    "budget": {
      "currency": "AUD",
      "party": "两人同住一间",
      "basis": "每人，两人同住一间。价格是 2026年10月查的，机票和酒店按淡季中间价估。",
      "cnyRate": 4.68,
      "rateDate": "2026-10-08",
      "extras": [
        {
          "label": "澳洲旅游签证（600 类）",
          "cat": "other",
          "amount": 250,
          "note": "中国护照在国外递交，2026年7月起每人 A$250。"
        },
        {
          "label": "其余三餐和咖啡",
          "cat": "food",
          "amount": 455,
          "note": "上面没单列的早饭和午饭，每天大约 A$65，7 天。"
        },
        {
          "label": "手机流量卡",
          "cat": "other",
          "amount": 30,
          "note": "落地在机场或超市买预付卡。"
        }
      ],
      "origins": [
        {
          "id": "beijing",
          "label": "北京",
          "cny": 7000,
          "brief": "去：4月28日深夜到首都机场，29日 01:40 国航 CA173 直飞悉尼，14:50 到。回：5月5日 19:40 国航 CA166 墨尔本直飞北京首都，6日 05:45 到。",
          "note": "经济舱含税开口程，估 ¥6,000–8,000，按 ¥7,000 算。CA173 按 2026 年班期是周二、四、六、日，4月29日周四有班。想上午就到悉尼，可以 28日先飞上海转 20:20 的东航 MU561，29日 09:00 到。5月5日上午逛植物园，下午三点前回酒店拿行李，四点前上 SkyBus。",
          "adjust": []
        },
        {
          "id": "shanghai",
          "label": "上海",
          "cny": 6000,
          "brief": "去：4月28日（周三）18:25 吉祥 HO1669 浦东直飞悉尼，29日 06:15 左右到。回：5月5日（周三）08:00 吉祥 HO1656 墨尔本直飞浦东，16:20 到，票买到温州，在浦东下飞机不坐后段。",
          "note": "经济舱含税，估 ¥5,000–7,000，按 ¥6,000 算，出票后改成实际价格。时间按 2026 年冬季班期，2027 年出了再核对。回程甩尾要注意：只带手提行李，托运的箱子会直挂到温州；回程必须是这张票的最后一段，不坐的只能是浦东到温州那段；吉祥条款不允许不按顺序乘坐，可能被要求补差价，会员里程别累积到这张票。HO1656 早上 8 点飞，5月5日凌晨 4:30 前就要上 SkyBus。",
          "adjust": []
        }
      ]
    },
    "days": [
      {
        "id": "au-d1",
        "date": "2027-04-29",
        "city": "悉尼",
        "title": "落地，沃森斯湾和歌剧院",
        "items": [
          {
            "id": "au-d1-opal",
            "time": "落地后",
            "kind": "transport",
            "name": "机场站坐火车到环形码头",
            "address": "Sydney Airport International Station",
            "lat": -33.9344,
            "lng": 151.1652,
            "reservation": "none",
            "reservationNote": "不用订票。刷银行卡或 Opal 卡即可。",
            "bookingUrl": "",
            "cost": {
              "amount": 22.94,
              "note": "机场站通行费 A$18.61 加火车票。吉祥航班早上六点多到，北京航班下午三点到，出站都赶上高峰，A$22.94。"
            },
            "note": "国际航站楼和国内航站楼是两个火车站。坐 T8，方向进城，经过中央车站、市政厅、温亚德，到环形码头下。机场站另收一笔通行费，比普通地铁贵。行李多、很累就打车，大约三四十分钟到环形码头。"
          },
          {
            "id": "au-d1-stay",
            "time": "入住",
            "kind": "stay",
            "name": "住环形码头或岩石区",
            "address": "Circular Quay, Sydney",
            "lat": -33.8612,
            "lng": 151.2108,
            "reservation": "required",
            "reservationNote": "港边酒店位置好的先满，两晚一起订。上午到的话问酒店能不能先寄存行李。",
            "bookingUrl": "https://www.booking.com/searchresults.html?ss=Circular+Quay%2C+Sydney&checkin=2027-04-29&checkout=2027-05-01",
            "cost": {
              "amount": 330,
              "note": "港边四星大约每晚 A$300–350 一间。两晚按 A$660，两人分。"
            },
            "note": "住这儿，歌剧院、岩石区和渡轮码头都能走路到。下午和第二天都从环形码头坐渡轮出发。5月1日早上去机场。"
          },
          {
            "id": "au-d1-watsons",
            "time": "早到再去",
            "kind": "sight",
            "name": "渡轮去沃森斯湾和 The Gap 悬崖",
            "address": "Gap Park, Watsons Bay",
            "lat": -33.8452,
            "lng": 151.287,
            "reservation": "none",
            "reservationNote": "渡轮刷卡，悬崖公园免费。",
            "bookingUrl": "",
            "cost": {
              "amount": 14.7,
              "note": "来回渡轮各 A$7.35。"
            },
            "why": "港湾这边是小渔村，翻过小坡就是外海悬崖。来回都是渡轮，不用走长路，适合落地第一天。",
            "photo": photo("au-d2-gap"),
            "note": "放下行李后到环形码头 2 号码头，坐 F9 到 Watsons Bay，大约 25 分钟。下船穿过码头对面的草地，走上 Gap Park，看外海那一侧的悬崖，来回二十分钟。F9 有时一小时才一班，到码头先看回程时间，16:30 前往回坐。上海航班早上到，先在酒店寄存行李、吃早饭，再来这一站；北京航班下午三点到，直接去下面的歌剧院。"
          },
          {
            "id": "au-d1-opera",
            "time": "傍晚",
            "kind": "sight",
            "name": "悉尼歌剧院外面",
            "address": "Bennelong Point, Sydney NSW",
            "lat": -33.8568,
            "lng": 151.2153,
            "reservation": "none",
            "reservationNote": "只在室外走，不用票。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "室外免费。"
            },
            "why": "坐了一夜飞机，这里走路就到，不用转车。外面看不要票。",
            "photo": photo("au-d1-opera"),
            "note": "从环形码头沿着海走过去。先看壳，再绕到海岬一侧。还有力气就继续往东走进皇家植物园，大约 20 分钟到麦考利夫人椅子，那里能把歌剧院和大桥拍在一起。"
          },
          {
            "id": "au-d1-tour",
            "time": "想进去再订",
            "kind": "sight",
            "name": "歌剧院室内导览",
            "address": "Sydney Opera House Welcome Centre",
            "lat": -33.8568,
            "lng": 151.2153,
            "reservation": "recommended",
            "reservationNote": "官网写明建议提前买。每场大约35人，迟到超过5分钟票作废。",
            "bookingUrl": "https://www.sydneyoperahouse.com/tours/sydney-opera-house-tour",
            "cost": {
              "amount": 52,
              "note": "提前订每人 A$50，2027年4月起预计 A$52；当天买再贵 A$5。"
            },
            "why": "只有想看音乐厅内部才去。每场限人数，里面不挤。",
            "photo": photo("au-d1-tour"),
            "note": "到了再决定。订的话选傍晚前的最后一场，提前15分钟到下层的 Welcome Centre。不订也不影响这天。"
          },
          {
            "id": "au-d1-bar",
            "time": "晚饭",
            "kind": "food",
            "name": "Opera Bar",
            "address": "Lower Concourse, Sydney Opera House",
            "lat": -33.8583,
            "lng": 151.2142,
            "reservation": "none",
            "reservationNote": "歌剧院下层的酒吧餐厅，现场坐，不接受预订。",
            "bookingUrl": "",
            "cost": {
              "amount": 60,
              "note": "一份主菜加一杯饮料，每人大约 A$50–70。"
            },
            "note": "就在歌剧院脚下。要靠窗的位置就早点去。这天别再跑别的区。"
          }
        ]
      },
      {
        "id": "au-d3",
        "date": "2027-04-30",
        "city": "悉尼",
        "title": "渡轮去曼利，往北角走",
        "items": [
          {
            "id": "au-d3-ferry",
            "time": "10:00",
            "kind": "transport",
            "name": "F1 渡轮到曼利",
            "address": "Circular Quay Wharf 3",
            "lat": -33.8612,
            "lng": 151.2108,
            "reservation": "none",
            "reservationNote": "刷 Opal 或银行卡，不用提前买。",
            "bookingUrl": "",
            "cost": {
              "amount": 9.65,
              "note": "周五全天交通封顶 A$9.65，渡轮来回加 161 路都在里面。"
            },
            "note": "环形码头看牌子 F1 Manly，一般在 3 号码头。船大约 30 分钟。坐船头或上层的外侧，这段是最好看的海港风景。风大，外套带着。"
          },
          {
            "id": "au-d3-manly",
            "time": "10:40",
            "kind": "sight",
            "name": "曼利海滩到 Shelly Beach",
            "address": "Shelly Beach, Manly",
            "lat": -33.8003,
            "lng": 151.2975,
            "reservation": "none",
            "reservationNote": "不用票。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "免费。午饭算在每天的餐费里。"
            },
            "why": "曼利主滩人多，不停留。Shelly Beach 是朝北的小湾，水平静。",
            "photo": photo("au-d3-manly"),
            "note": "下船穿过 The Corso 商业街，在这条街上买好午饭和水带走，北角上面没有店。到海滩右转，沿海边步道走大约 1 公里到 Shelly Beach。"
          },
          {
            "id": "au-d3-northhead",
            "time": "11:30",
            "kind": "sight",
            "name": "北角 Fairfax 观景台",
            "address": "Fairfax Lookout, North Head Scenic Drive, Manly",
            "lat": -33.8167,
            "lng": 151.2963,
            "reservation": "none",
            "reservationNote": "国家公园，不用票。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "免费。"
            },
            "why": "站在悬崖上看整个悉尼港口和外海，5月开始有机会看到鲸鱼。来的人比曼利海滩少得多。",
            "photo": photo("au-d3-northhead"),
            "note": "从 Shelly Beach 停车场后面的步道往上爬，大约 80 米高，这是唯一累的一段。上去以后看牌子 Fairfax Lookout，在观景台附近吃带上来的午饭。从曼利码头算起单程大约 5 公里，两到三小时。出发前看一眼国家公园网站有没有封路通知。南边没有厕所，在曼利海滩上厕所、装水。"
          },
          {
            "id": "au-d3-bus",
            "time": "14:30",
            "kind": "transport",
            "name": "161 路回曼利码头",
            "address": "North Fort, North Head Scenic Drive",
            "lat": -33.8133,
            "lng": 151.2925,
            "reservation": "none",
            "reservationNote": "公交车，刷卡上车。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "已含在当天封顶里。"
            },
            "note": "North Fort 停车场坐 161 回曼利码头，工作日大约半小时一班，以 Transport NSW 的时刻为准。不想等车就原路走回去，下坡为主，大约 3 公里。"
          },
          {
            "id": "au-d3-back",
            "time": "15:30",
            "kind": "transport",
            "name": "渡轮回环形码头",
            "address": "Manly Wharf",
            "lat": -33.8001,
            "lng": 151.284,
            "reservation": "none",
            "reservationNote": "不用订。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "已含在当天封顶里。"
            },
            "note": "原船回去。今天不再加景点，晚上收拾行李，明天早上飞。"
          }
        ]
      },
      {
        "id": "au-d4",
        "date": "2027-05-01",
        "city": "圣灵群岛",
        "title": "飞艾尔利海滩",
        "items": [
          {
            "id": "au-d4-flight",
            "time": "早上",
            "kind": "transport",
            "name": "悉尼飞普罗瑟派恩",
            "address": "Whitsunday Coast Airport PPP",
            "lat": -20.495,
            "lng": 148.552,
            "reservation": "required",
            "reservationNote": "这天是昆士兰长周末的第一天，飞机会比平时满。目标是中午前后落地，不要订下午太晚的。",
            "bookingUrl": "https://www.google.com/travel/flights?hl=zh-CN&q=One%20way%20flights%20from%20Sydney%20to%20Proserpine%20on%20May%201%202027",
            "cost": {
              "amount": 260,
              "note": "捷星直飞，长周末大约 A$190–280，再加一件托运行李约 A$30。"
            },
            "note": "机场代码 PPP，也叫 Whitsunday Coast。飞行大约两个半小时。汉密尔顿岛机场（HTI）更靠近海岛，但怀特黑文的船大多从艾尔利海滩开，所以飞 PPP。悉尼国内航站楼出发。"
          },
          {
            "id": "au-d4-shuttle",
            "time": "落地后",
            "kind": "transport",
            "name": "机场班车到艾尔利海滩",
            "address": "Airlie Beach",
            "lat": -20.2676,
            "lng": 148.7166,
            "reservation": "recommended",
            "reservationNote": "班车按航班接，提前订座位更稳。不订就在到达厅找柜台，可能要等下一班。",
            "bookingUrl": "https://www.whitsundaytransit.com.au/",
            "cost": {
              "amount": 22,
              "note": "单程 A$22。按售出顺序浮动，A$14–25，早订便宜。"
            },
            "note": "路程大约 35 到 40 分钟。告诉司机酒店名字。打车也可以，几个人一起分摊更合适。"
          },
          {
            "id": "au-d4-stay",
            "time": "入住",
            "kind": "stay",
            "name": "住艾尔利海滩主街或码头",
            "address": "Airlie Beach QLD",
            "lat": -20.2682,
            "lng": 148.7172,
            "reservation": "required",
            "reservationNote": "5月3日是昆士兰劳动节，这两晚正好是长周末，码头附近会先订满。",
            "bookingUrl": "https://www.booking.com/searchresults.html?ss=Airlie+Beach&checkin=2027-05-01&checkout=2027-05-03",
            "cost": {
              "amount": 280,
              "note": "长周末每晚大约 A$250–300 一间。两晚按 A$560，两人分。"
            },
            "note": "优先住 Coral Sea Marina 或主街，第二天早上走去码头。不要住到普罗瑟派恩镇上。"
          },
          {
            "id": "au-d4-lagoon",
            "time": "下午",
            "kind": "sight",
            "name": "艾尔利泻湖",
            "address": "Airlie Beach Lagoon",
            "lat": -20.2692,
            "lng": 148.7188,
            "reservation": "none",
            "reservationNote": "免费公共泻湖。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "免费。"
            },
            "why": "5月还是水母季，这是镇上不用穿防刺服就能下水的地方。",
            "photo": photo("au-d4-lagoon"),
            "note": "主街走到海边就看见。泻湖有防护，可以直接游。外海游泳要穿防刺服。晚饭在主街吃，长周末热门的馆子早点去。"
          }
        ]
      },
      {
        "id": "au-d5",
        "date": "2027-05-02",
        "city": "圣灵群岛",
        "title": "怀特黑文和希尔因莱特",
        "items": [
          {
            "id": "au-d5-raft",
            "time": "早上集合",
            "kind": "sight",
            "name": "Ocean Rafting Northern Exposure",
            "address": "Coral Sea Marina, Airlie Beach",
            "lat": -20.267,
            "lng": 148.7135,
            "reservation": "required",
            "reservationNote": "这是这趟最该先订的一项，而且这天是长周末的周日。只订「南端白沙滩半天」会看不到希尔因莱特观景台。",
            "bookingUrl": "https://www.oceanrafting.com.au/",
            "cost": {
              "amount": 249,
              "note": "官网 15 岁以上 A$249，含午饭、防刺服和酒店接送。5月2日是周日，不是公共假日，不加钱。"
            },
            "why": "小快艇，人少，跑得快。怀特黑文上午十点到下午两点是大船集中靠岸的时候，越早出发越清静。",
            "note": "订 Northern Exposure：怀特黑文沙滩、希尔因莱特观景台，加浮潜。这条 8:45 出发、15:30 左右回来，比 10 点出发的 Southern Lights 早到怀特黑文。集合点以确认邮件为准，常见是 Coral Sea Marina，不要走到另一头的 Port of Airlie。提前半小时到。防刺服船上有。带泳衣、毛巾、一双能上岸的鞋。晕船药在开船前吃。大风他们会改期或换沙滩，看短信。这趟只留了这一天出海，取消了没有备用日，订之前看清退款规则。"
          },
          {
            "id": "au-d5-enid",
            "time": "二选一",
            "kind": "sight",
            "name": "Lady Enid 小帆船（备选）",
            "address": "Airlie Beach",
            "lat": -20.2682,
            "lng": 148.7172,
            "reservation": "recommended",
            "reservationNote": "不坐快艇就订这条。最多24人，只收成人。",
            "bookingUrl": "https://www.australiancruisegroup.com.au/whitsundays/whitehaven-beach-cruises/10hr-lady-enid-whitehaven-beach-sail-snorkel-cruise",
            "cost": {
              "amount": 295,
              "note": "每人 A$295，只收 18 岁以上。换成这条比快艇多 A$46。"
            },
            "why": "1962 年的老木帆船，最多 24 人，比快艇慢但安静，也去希尔因莱特和怀特黑文。",
            "note": "早上 8 点从艾尔利出发，全天大约九个半小时，含吃的和浮潜。怕颠、想慢慢玩选这条；想早回来休息选上面的快艇。两个只订一个。"
          },
          {
            "id": "au-d5-hill",
            "time": "船上",
            "kind": "sight",
            "name": "希尔因莱特观景台",
            "address": "Hill Inlet Lookout, Whitsunday Island",
            "lat": -20.2597,
            "lng": 149.0378,
            "reservation": "none",
            "reservationNote": "含在船票里。确认你订的那条船会上这个观景台。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "含在船票里。"
            },
            "why": "白沙和蓝水搅在一起的那张照片就是从这里拍的，只能从高处看。",
            "photo": photo("au-d5-hill"),
            "note": "大多数船停在 Tongue Bay，上岸走一段林间路和台阶到观景台。花纹好不好看取决于潮水，订船时问一句他们当天几点上观景台。穿船方要求的鞋。"
          },
          {
            "id": "au-d5-sand",
            "time": "船上",
            "kind": "sight",
            "name": "怀特黑文海滩",
            "address": "Whitehaven Beach, Whitsunday Island",
            "lat": -20.282,
            "lng": 149.0375,
            "reservation": "none",
            "reservationNote": "不能自己去，已经含在船票里。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "含在船票里。"
            },
            "why": "7 公里长的白沙滩，大船都停在南端，往北走一段人就少了。",
            "photo": photo("au-d5-sand"),
            "note": "岛上没有路，也没有店。沙子细，会粘鞋。不要把沙子带走，公园在管。回程晚饭回艾尔利主街，晚上把行李收好，明天上午飞墨尔本。"
          }
        ]
      },
      {
        "id": "au-d7",
        "date": "2027-05-03",
        "city": "墨尔本",
        "title": "劳动节飞墨尔本，傍晚走小巷",
        "items": [
          {
            "id": "au-d7-flight",
            "time": "早上",
            "kind": "transport",
            "name": "普罗瑟派恩飞墨尔本",
            "address": "Melbourne Airport",
            "lat": -37.669,
            "lng": 144.841,
            "reservation": "required",
            "reservationNote": "只有捷星直飞，每天一班 JQ833，大约三小时，上午十一点左右起飞。这天是昆士兰长周末最后一天，往南飞的人多，卖完就只能转机，先订这班。",
            "bookingUrl": "https://www.google.com/travel/flights?hl=zh-CN&q=One%20way%20flights%20from%20Proserpine%20to%20Melbourne%20on%20May%203%202027",
            "cost": {
              "amount": 322,
              "note": "捷星直飞大约 A$250–350，含一件托运行李按 A$300 算；去机场的班车 A$22 也算在这里。"
            },
            "note": "早上从艾尔利返回 PPP，班车大约 40 分钟，再加安检，按飞机起飞前两小时到机场倒推。劳动节班车照开，前一天订好座位。落地是墨尔本国内航站楼，维州这天不放假。"
          },
          {
            "id": "au-d7-sky",
            "time": "落地后",
            "kind": "transport",
            "name": "SkyBus 到南十字车站",
            "address": "Southern Cross Station, Melbourne",
            "lat": -37.8184,
            "lng": 144.9525,
            "reservation": "none",
            "reservationNote": "车上或官网都能买，不用提前锁位。",
            "bookingUrl": "https://www.skybus.com.au/",
            "cost": {
              "amount": 43.4,
              "note": "直接买往返 A$43.40，比两张单程便宜 A$8.40。回程那张也在里面。"
            },
            "note": "墨尔本机场没有火车站。跟随 SkyBus 牌子，在航站楼外上车，终点南十字车站，大约 30 到 40 分钟，堵车会更久。市区交通刷 Myki 卡，机场大巴本身不是 Myki。"
          },
          {
            "id": "au-d7-stay",
            "time": "入住",
            "kind": "stay",
            "name": "住弗林德斯街或南十字附近",
            "address": "Flinders Street, Melbourne",
            "lat": -37.8183,
            "lng": 144.9671,
            "reservation": "required",
            "reservationNote": "住 5月3日、4日两晚，城中心方便坐电车。",
            "bookingUrl": "https://www.booking.com/searchresults.html?ss=Flinders+Street+Melbourne&checkin=2027-05-03&checkout=2027-05-05",
            "cost": {
              "amount": 240,
              "note": "城中心四星大约每晚 A$200–260 一间。两晚按 A$480，两人分。"
            },
            "note": "住这儿，坐电车和火车都方便。5日早上退房，北京出发的把行李寄存在前台，下午回来拿；上海出发的凌晨就走，4日晚上把行李收好。"
          },
          {
            "id": "au-d7-lanes",
            "time": "傍晚",
            "kind": "sight",
            "name": "Flinders Lane 一带的小巷",
            "address": "Centre Place, Melbourne",
            "lat": -37.816,
            "lng": 144.9653,
            "reservation": "none",
            "reservationNote": "巷子免费。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "免费。"
            },
            "why": "本地人说 Hosier Lane 这几年又挤又乱。旁边这几条巷子一样有涂鸦和小店，傍晚人少一些。",
            "photo": photo("au-d7-lanes"),
            "note": "从弗林德斯街车站对面开始，先走 Degraves Street 和 Centre Place，再沿 Flinders Lane 往东走到 AC/DC Lane。整段走路二十分钟，最后正好到下面的晚饭。"
          },
          {
            "id": "au-d7-coda",
            "time": "晚饭",
            "kind": "food",
            "name": "Coda",
            "address": "141 Flinders Lane, Melbourne VIC 3000",
            "lat": -37.8162,
            "lng": 144.9704,
            "reservation": "recommended",
            "reservationNote": "弗林德斯巷的小馆子，晚餐建议订。",
            "bookingUrl": "https://www.opentable.com/r/coda-melbourne",
            "cost": {
              "amount": 100,
              "note": "分着点几道菜加一杯酒，每人大约 A$90–110。"
            },
            "note": "亚洲口味、分着吃。订 19:00 左右，订之前在官网看一下周一是否营业。如果飞机晚点，取消预订，在巷子口随便吃。"
          }
        ]
      },
      {
        "id": "au-d8",
        "date": "2027-05-04",
        "city": "墨尔本",
        "title": "Carlton、Fitzroy 和老修道院",
        "items": [
          {
            "id": "au-d8-reb",
            "time": "10:30",
            "kind": "sight",
            "name": "皇家展览馆和卡尔顿花园",
            "address": "9 Nicholson Street, Carlton VIC",
            "lat": -37.8047,
            "lng": 144.9717,
            "reservation": "none",
            "reservationNote": "花园和建筑外面免费。旁边的墨尔本博物馆要票，想进再买。",
            "bookingUrl": "",
            "cost": {
              "amount": 17.4,
              "note": "电车、公交、火车全天封顶 A$11.40（维州半价优惠到 2027年1月1日结束）。第一次买 myki 卡另付 A$6。",
              "cat": "transport"
            },
            "why": "世界遗产建筑，周二上午人很少。从这里走路就进 Fitzroy。",
            "photo": photo("au-d8-reb"),
            "note": "走到 Bourke Street 坐 86 或 96 路电车往东，到 11 号站 Melbourne Museum 下，走五分钟。绕建筑和喷泉走一圈就够。"
          },
          {
            "id": "au-d8-fitzroy",
            "time": "11:30",
            "kind": "sight",
            "name": "Fitzroy 的 Gertrude Street 和后街",
            "address": "Gertrude Street, Fitzroy VIC",
            "lat": -37.806,
            "lng": 144.981,
            "reservation": "none",
            "reservationNote": "街区，不用票。午饭在这条街上现场找。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "免费。午饭算在每天的餐费里。"
            },
            "why": "本地人推荐的老街区。主街后面的 Rose Street、Kerr Street 一带是老排屋、小画廊和涂鸦，游客少。",
            "photo": photo("au-d8-fitzroy"),
            "note": "从花园东边过 Nicholson Street 就是 Gertrude Street。顺着往东走，看到喜欢的就拐进北边的小街。午饭在 Gertrude Street 或 Smith Street 吃，不用订。"
          },
          {
            "id": "au-d8-convent",
            "time": "14:00",
            "kind": "sight",
            "name": "Abbotsford Convent 老修道院",
            "address": "1 St Heliers Street, Abbotsford VIC",
            "lat": -37.8025,
            "lng": 145.0036,
            "reservation": "none",
            "reservationNote": "园区免费进。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "免费。来回的公交和火车已含在当天封顶里。"
            },
            "why": "旧修道院改成的艺术园区，有草地、咖啡馆和亚拉河边步道，几乎没有旅行团。",
            "photo": photo("au-d8-convent"),
            "note": "从 Fitzroy 往北走到 Johnston Street，坐 200 或 207 路公交往东，Clarke Street 站下，走三到五分钟。不想等车就打车，十分钟左右。回城走 10 到 15 分钟到 Victoria Park 火车站，坐 Mernda 或 Hurstbridge 线进城。晚饭在城里随便吃。"
          },
          {
            "id": "au-d8-ngv",
            "time": "下雨再去",
            "kind": "sight",
            "name": "维多利亚国家美术馆",
            "address": "180 St Kilda Road, Melbourne",
            "lat": -37.8226,
            "lng": 144.9689,
            "reservation": "none",
            "reservationNote": "常设展免费，直接进。特展才要票。",
            "bookingUrl": "https://www.ngv.vic.gov.au/whats-on/",
            "cost": {
              "amount": 0,
              "note": "常设展免费。"
            },
            "why": "下雨的备选。周二白天人不多，常设展免费。",
            "photo": photo("au-d8-ngv"),
            "note": "下雨就把 Fitzroy 和修道院换成这里。从弗林德斯街沿圣基尔达路往南坐电车，有 Arts Precinct 或 NGV 字样的站下。"
          }
        ]
      },
      {
        "id": "au-d9",
        "date": "2027-05-05",
        "city": "墨尔本",
        "title": "回国",
        "items": [
          {
            "id": "au-d9-garden",
            "time": "北京出发才去",
            "kind": "sight",
            "name": "皇家植物园和战争纪念馆",
            "address": "Shrine of Remembrance, Birdwood Avenue, Melbourne",
            "lat": -37.8305,
            "lng": 144.9734,
            "reservation": "none",
            "reservationNote": "都免费。植物园 7:30 开门，纪念馆 10:00 开门。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "免费，走路去。"
            },
            "why": "离酒店走路就到，不用坐车，中午前后回来拿行李不赶。纪念馆楼顶的阳台能看到城市天际线。",
            "note": "从弗林德斯街车站过河，沿 St Kilda Road 往南走 15 分钟到纪念馆，先上楼顶阳台，再往东进植物园，绕湖走一圈。午饭在植物园里的咖啡馆或回城吃，下午三点前回酒店拿行李。"
          },
          {
            "id": "au-d8-air",
            "time": "回程",
            "kind": "transport",
            "name": "南十字坐 SkyBus 去机场",
            "address": "Southern Cross Station",
            "lat": -37.8184,
            "lng": 144.9525,
            "reservation": "none",
            "reservationNote": "当天买票即可。",
            "bookingUrl": "https://www.skybus.com.au/",
            "cost": {
              "amount": 0,
              "note": "已含在往返票里。"
            },
            "note": "车站里跟着 SkyBus 牌子走。国际航班留三小时。大巴大约 30 到 40 分钟，傍晚可能堵。北京出发是 19:40 的国航，下午四点前上车，上午能逛上面的植物园。上海出发是 08:00 的吉祥，凌晨 4:30 前上车（SkyBus 24 小时都有车），植物园去不了，前一晚把行李收好。"
          }
        ]
      }
    ]
  }
];
