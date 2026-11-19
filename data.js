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
      "basis": "当地吃住行门票约 6.2 万日元（约 ¥2,600 人民币），加上 2026 年 7 月调价后的日本单次签证（领馆规费 ¥715 + 旅行社服务费，合计约 ¥980），除已买机票外总预算约 ¥3,580。",
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
          "label": "便利店早餐与热饮零食",
          "cat": "food",
          "amount": 3500,
          "note": "每天早上的饭团、热咖啡和温泉牛奶；正餐与下午茶均已单列在每天行程里。"
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
        "title": "飞抵札幌，入住安顿与第一碗热拉面",
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
              "note": "已含在往返机票里。"
            },
            "note": "提前两个半小时到浦东 T2。落地羽田 T3 后先办入境、取行李过海关，出来找全日空国内线转机柜台把行李重新托运到新千岁，再坐免费接驳巴士去 T2 候机。"
          },
          {
            "id": "hk-d1-flight2",
            "time": "15:00–16:35",
            "kind": "transport",
            "name": "东京羽田飞札幌新千岁 NH69",
            "address": "New Chitose Airport (CTS)",
            "lat": 42.7752,
            "lng": 141.6925,
            "reservation": "none",
            "reservationNote": "机票已出，出发前核对航站楼与登机口。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "已含在往返机票里。"
            },
            "note": "落地新千岁后跟着「JR 線」指示牌下到地下车站。北海道 3 月室外依然很冷，下飞机前先把厚外套拿出来。"
          },
          {
            "id": "hk-d1-airport-train",
            "time": "17:00–17:40",
            "kind": "transport",
            "name": "JR 快速 Airport 到札幌站",
            "address": "New Chitose Airport Station",
            "lat": 42.7747,
            "lng": 141.6914,
            "reservation": "none",
            "reservationNote": "直接刷西瓜卡 / Kitaca 进站坐自由席即可。",
            "bookingUrl": "https://www.jrhokkaido.co.jp/",
            "cost": {
              "amount": 1200,
              "note": "自由席单程约 ¥1,150。"
            },
            "note": "认准「快速エアポート（Rapid Airport）」，约 37 分钟直达札幌站，班次很密不用提前买指定席。"
          },
          {
            "id": "hk-d1-hotel",
            "time": "18:00",
            "kind": "stay",
            "name": "入住札幌站—大通—薄野一带酒店（连住 4 晚）",
            "address": "Susukino, Chuo-ku, Sapporo",
            "lat": 43.0556,
            "lng": 141.3534,
            "reservation": "recommended",
            "reservationNote": "优先挑带大浴场、可免费取消的商务酒店，连住 4 晚不用搬箱子。",
            "bookingUrl": "https://www.booking.com/",
            "cost": {
              "amount": 30000,
              "note": "按每晚约 ¥7,500 日元估算，4 晚合计约 ¥30,000。"
            },
            "why": "从札幌站一直到薄野都有地下步行街连通，刮风下雪也不用拖着箱子走冰面。",
            "note": "从札幌站走地下通道（チ・カ・ホ）就能一路通到大通和薄野。3 月早晚路面容易结黑冰，路过便利店可以顺手买一副简易防滑鞋套备着。"
          },
          {
            "id": "hk-d1-ramen",
            "time": "19:00",
            "kind": "food",
            "name": "薄野元祖拉面横丁",
            "address": "Ramen Yokocho, Susukino, Sapporo",
            "lat": 43.0567,
            "lng": 141.354,
            "reservation": "none",
            "reservationNote": "不用预约，哪家队伍短进哪家。",
            "bookingUrl": "",
            "cost": {
              "amount": 1200,
              "note": "一碗味噌拉面约 ¥1,000–1,400。"
            },
            "photo": photo("hk-d1-susukino"),
            "why": "窄巷里一字排开十几家老牌拉面铺，转了一整天飞机，先喝碗滚烫的黄油玉米味噌拉面最解乏。",
            "note": "就在薄野站旁的小巷里，进店在自动售票机买食券即可。吃完早点回酒店休息，顺便看一眼明早天气预报——要是小樽雪化得差不多了，明天就改坐 JR 去旭川看厚雪。"
          }
        ]
      },
      {
        "id": "hk-d2",
        "date": "2027-03-06",
        "city": "小樽",
        "title": "小樽海边铁道、堺町通漫步与运河蓝调亮灯",
        "altTitle": "备选路线：若小樽积雪太少，改去旭川看厚雪（共 4 站）",
        "items": [
          {
            "id": "hk-d2-jr",
            "time": "09:30–10:15",
            "kind": "transport",
            "name": "JR 函馆本线 札幌 → 小樽",
            "address": "Sapporo Station",
            "lat": 43.0686,
            "lng": 141.3508,
            "reservation": "none",
            "reservationNote": "刷交通卡进站即可，不用买指定席。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "往返约 ¥1,500–1,600，已计入当地交通预算。"
            },
            "note": "坐「快速 Airport」或普通列车约 35–45 分钟就到。去程记得挑靠右边的窗户坐，过了钱函站之后列车几乎贴着海岸线跑，窗外就是大海和雪岸。"
          },
          {
            "id": "hk-d2-otaru-lunch",
            "time": "11:00–12:15",
            "kind": "food",
            "name": "三角市场现切海鲜丼",
            "address": "Otaru Sankaku Market",
            "lat": 43.1975,
            "lng": 141.0003,
            "reservation": "none",
            "reservationNote": "11 点出头到比正午少排一半队。",
            "bookingUrl": "",
            "cost": {
              "amount": 2200,
              "note": "三色海鲜丼人均约 ¥1,800–2,800。"
            },
            "why": "从小樽站出来左手边走两步就到，现切海胆、甜虾和帆立贝铺满热醋饭，赶在正午旅行团前吃最清静。",
            "note": "窄坡道两边全是海鲜档口（泷波食堂、武田鲜鱼店、味处武田都很稳），如果某家门口排长队直接换隔壁一家，品质差别不大。"
          },
          {
            "id": "hk-d2-sakaimachi",
            "time": "12:45–16:15",
            "kind": "sight",
            "name": "堺町通玻璃工坊、八音盒堂与 LeTAO 下午茶",
            "address": "Sakaimachi Hondori Street, Otaru",
            "lat": 43.1922,
            "lng": 141.0068,
            "reservation": "none",
            "reservationNote": "北一硝子三号馆煤油灯茶屋或 LeTAO 本店二楼茶座现场拿号即可。",
            "bookingUrl": "",
            "cost": {
              "amount": 950,
              "note": "一块原味双层芝士蛋糕配红茶套组约 ¥900–1,100。"
            },
            "why": "保留着百年前石造商铺的老街，一路慢慢逛玻璃器皿、蒸汽钟和木制八音盒，走累了上楼吃块现切芝士蛋糕暖身。",
            "note": "整条街平缓好走：先逛北一硝子三号馆（里面的北一大厅点着 167 盏真实煤油灯，氛围极好），一路往南走到童话十字路口的小樽八音盒堂（门口蒸汽钟每 15 分钟喷汽报时），最后在街对面的 LeTAO 总店二楼歇脚等天色变暗，还可以免费登上总店顶楼钟楼俯瞰小樽雪顶街景。"
          },
          {
            "id": "hk-d2-canal",
            "time": "16:40–17:30",
            "kind": "sight",
            "name": "小樽运河煤气灯亮灯（蓝调时刻）",
            "address": "Otaru Canal, Otaru",
            "lat": 43.1991,
            "lng": 141.0064,
            "reservation": "none",
            "reservationNote": "全天免费开放。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "免费。"
            },
            "photo": photo("hk-d2-otaru"),
            "why": "3 月初傍晚五点前夕天空变成深蓝色，沿岸 63 盏复古煤气灯依次亮起，倒映在雪岸与石造仓库间最出片。",
            "note": "比白天正午干看运河美太多：先在浅草桥拍经典全景，再顺着运河步道往北运河方向走一段，人少安静。海风入夜后很凉，拍完刚好走 10 分钟回小樽站坐车。"
          },
          {
            "id": "hk-d2-jr-back",
            "time": "17:45–18:25",
            "kind": "transport",
            "name": "JR 函馆本线 小樽 → 札幌",
            "address": "Otaru Station → Sapporo Station",
            "lat": 43.1977,
            "lng": 140.9937,
            "reservation": "none",
            "reservationNote": "小樽是始发站，提前 10 分钟上车基本都有座。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "已计入当地交通预算。"
            },
            "note": "刷交通卡进站坐回札幌站或直接换地铁回薄野。"
          },
          {
            "id": "hk-d2-dinner",
            "time": "19:00",
            "kind": "food",
            "name": "札幌站或薄野炭火串烧居酒屋晚餐",
            "address": "Susukino / Sapporo Station",
            "lat": 43.0562,
            "lng": 141.3532,
            "reservation": "none",
            "reservationNote": "连锁串鸟（串鳥）或本地小居酒屋一个人坐吧台免预约。",
            "bookingUrl": "",
            "cost": {
              "amount": 2000,
              "note": "几串现烤鸡肉串配热汤或生啤约 ¥1,800–2,400。"
            },
            "why": "北海道本地人最常去的平价炭火烧鸟店（如「串鸟」），吧台对独行客非常友好，还送免费萝卜泥和热鸡汤。",
            "note": "札幌站南口、大通和薄野每隔两个路口就有一家「串鳥（Kushidori）」，有平板带图点单，不会日语也毫无压力。"
          },
          {
            "id": "hk-d2-asahikawa-jr",
            "alt": true,
            "time": "08:30–10:00",
            "kind": "transport",
            "name": "JR 特急 札幌 → 旭川",
            "address": "Sapporo Station → Asahikawa Station",
            "lat": 43.7634,
            "lng": 142.3602,
            "reservation": "recommended",
            "reservationNote": "特急 Lilac / Kamui 号，车站售票机现买自由席或指定席都很方便。",
            "bookingUrl": "https://www.jrhokkaido.co.jp/",
            "cost": {
              "amount": 0,
              "note": "往返套票（S 切符等）约 ¥5,500，从交通机动预算里出。"
            },
            "note": "如果 3 月初札幌和小樽刚好回暖化雪，当天一早改坐特急往内陆走，1 小时 25 分钟直达旭川，那边气温更低、雪量通常厚得多。"
          },
          {
            "id": "hk-d2-asahiyama",
            "alt": true,
            "time": "10:40–14:30",
            "kind": "sight",
            "name": "旭山动物园（企鹅雪地散步）",
            "address": "Asahiyama Zoo, Asahikawa",
            "lat": 43.7682,
            "lng": 142.4786,
            "reservation": "none",
            "reservationNote": "冬季闭园早（常为 15:30），进园先看当天企鹅散步时间牌。",
            "bookingUrl": "https://www.city.asahikawa.hokkaido.jp/asahiyamazoo/",
            "cost": {
              "amount": 1000,
              "note": "门票 ¥1,000；旭川站往返巴士另约 ¥1,000。"
            },
            "photo": photo("hk-d2-asahiyama"),
            "why": "帝企鹅排着队从厚雪道上摇摇摆摆走过眼前，还有北极熊和圆柱玻璃水柱里的海豹。",
            "note": "从旭川站北口 6 号站台坐 41 或 47 路巴士约 40 分钟直达正门。园区在山坡上，雪道很滑，一定穿防滑保暖靴。"
          },
          {
            "id": "hk-d2-asahikawa-town",
            "alt": true,
            "time": "15:30–17:15",
            "kind": "food",
            "name": "平和通买物公园散步与旭川酱油拉面晚餐",
            "address": "Asahikawa Station area",
            "lat": 43.7634,
            "lng": 142.3602,
            "reservation": "none",
            "reservationNote": "",
            "bookingUrl": "",
            "cost": {
              "amount": 1200,
              "note": "一碗老字号酱油拉面约 ¥1,000–1,300。"
            },
            "photo": photo("hk-d2-asahikawa"),
            "why": "沿着车站正对面的积雪步行街慢逛，吃碗滚烫的猪骨鱼介双汤底旭川酱油拉面暖透全身。",
            "note": "梅光轩本店、青叶或山头火总店都在旭川站步行几分钟范围内，表层浮着热猪油锁温，冬天吃特别过瘾。"
          },
          {
            "id": "hk-d2-asahikawa-back",
            "alt": true,
            "time": "17:30–18:55",
            "kind": "transport",
            "name": "JR 特急 旭川 → 札幌",
            "address": "Asahikawa Station → Sapporo Station",
            "lat": 43.7634,
            "lng": 142.3602,
            "reservation": "none",
            "reservationNote": "半小时至一小时一班特急，回到札幌刚好回酒店休息。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "已含在往返套票里。"
            },
            "note": "上车前可以在旭川站永旺超市买瓶北海道限定饮品路上喝。"
          }
        ]
      },
      {
        "id": "hk-d3",
        "date": "2027-03-07",
        "city": "定山溪",
        "title": "定山溪雪谷吊桥、日归温泉与成吉思汗烤肉",
        "items": [
          {
            "id": "hk-d3-bus",
            "time": "09:30–10:50",
            "kind": "transport",
            "name": "河童号或定铁巴士前往定山溪",
            "address": "Sapporo Station / Odori / Susukino Bus Stop",
            "lat": 43.0687,
            "lng": 141.3494,
            "reservation": "recommended",
            "reservationNote": "直达「河童 Liner 号」需提前在官网预约；普通「快速 7 / 8 号」巴士免预约直接刷卡上车。",
            "bookingUrl": "https://jotetsu-reservation.com/",
            "cost": {
              "amount": 0,
              "note": "往返巴士或日归套票已计入当地交通预算。"
            },
            "note": "从札幌站、大通或薄野都能上车，一路进山约 60–75 分钟。买「温泉日归套票（含往返车票 + 入浴券）」通常比单买更划算。"
          },
          {
            "id": "hk-d3-bridge",
            "time": "11:00–12:00",
            "kind": "sight",
            "name": "二见公园与二见吊桥雪溪散步",
            "address": "Futami Tsuribashi Suspension Bridge, Jozankei",
            "lat": 42.9639,
            "lng": 141.1597,
            "reservation": "none",
            "reservationNote": "免费开放；若积雪太深只走到桥头观景即可。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "免费。"
            },
            "why": "鲜红色的二见吊桥横跨在白雪覆盖的丰平川峡谷上，溪水冒着淡淡温泉热气，是定山溪最经典的雪景机位。",
            "note": "下巴士走几分钟就到，趁中午泡汤前光线最好先去拍照散步，顺路还能在街角的免费源泉足汤暖暖脚。"
          },
          {
            "id": "hk-d3-lunch",
            "time": "12:15",
            "kind": "food",
            "name": "温泉街荞麦面午餐与「雨之日与雪之日」义式冰淇淋",
            "address": "Jozankei Onsen town",
            "lat": 42.9645,
            "lng": 141.1645,
            "reservation": "none",
            "reservationNote": "",
            "bookingUrl": "",
            "cost": {
              "amount": 1500,
              "note": "热汤荞麦面或披萨简餐 + 甜点约 ¥1,300–1,800。"
            },
            "why": "吃完热腾腾的手打荞麦面，再去高人气小店「雨ノ日と雪ノ日」吃球北海道牛乳冰淇淋看窗外雪景。",
            "note": "温泉街不大，几家质感很好的烘焙坊、最中饼甜点铺（坂ノ上の最中）和食堂都在步行 10 分钟圈内。"
          },
          {
            "id": "hk-d3-onsen",
            "time": "13:30–16:00",
            "kind": "sight",
            "name": "定山溪雪见露天温泉（日归入浴）",
            "address": "Jozankei Onsen, Minami-ku, Sapporo",
            "lat": 42.965,
            "lng": 141.1636,
            "reservation": "recommended",
            "reservationNote": "日归开放时间多在 11:00–15:00 入场截止（如汤元小金汤、鹿之汤、丰平峡温泉等），出发前确认选定旅馆的最晚入场点。",
            "bookingUrl": "https://jozankei.jp/",
            "cost": {
              "amount": 2000,
              "note": "日归入浴费约 ¥1,200–2,500（租浴巾另加 ¥200–300）。"
            },
            "photo": photo("hk-d3-jozankei"),
            "why": "峡谷海拔比市区高，3 月初溪谷两岸常挂满白雪，整个下午泡在热汤里看对岸雪林发呆。",
            "note": "自带一条小毛巾更方便；如果有文身记得提前确认馆方是否允许或能否贴遮盖贴。泡完在榻榻米休息室喝瓶冰牛奶、躺一会儿等身体缓过来再去车站。"
          },
          {
            "id": "hk-d3-return",
            "time": "16:30–17:45",
            "kind": "transport",
            "name": "巴士返回札幌薄野",
            "address": "Jozankei Jinja-mae Bus Stop",
            "lat": 42.9658,
            "lng": 141.1628,
            "reservation": "none",
            "reservationNote": "提前 10 分钟到站台候车。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "已含在交通预算里。"
            },
            "note": "一路坐回薄野站下车，先把毛巾杂物放回酒店，轻装出门吃烤羊肉。"
          },
          {
            "id": "hk-d3-dinner",
            "time": "18:30",
            "kind": "food",
            "name": "薄野成吉思汗炭火烤羊肉（达摩或士别）",
            "address": "Susukino, Chuo-ku, Sapporo",
            "lat": 43.0548,
            "lng": 141.3536,
            "reservation": "none",
            "reservationNote": "达摩（だるま）分店多，挑 5.5 店或 4.4 二阶亭比总店少排队。",
            "bookingUrl": "",
            "cost": {
              "amount": 2600,
              "note": "一份鲜切羔羊肉配洋葱烤盘加米饭/生啤约 ¥2,300–3,000。"
            },
            "why": "泡完雪谷温泉回城，围着铸铁头盔锅现烤滋滋作响的北海道小羔羊肉，完全不膻。",
            "note": "店里都有免费衣柜或防味袋把羽绒服锁进去免得沾油烟。吃完可以在薄野霓虹街散步消食再回酒店。"
          }
        ]
      },
      {
        "id": "hk-d4",
        "date": "2027-03-08",
        "city": "札幌",
        "title": "大通公园、汤咖喱与藻岩山夜景",
        "items": [
          {
            "id": "hk-d4-odori",
            "time": "10:30–12:15",
            "kind": "sight",
            "name": "大通公园、时计台与北海道厅红砖厅舍",
            "address": "Odori Park, Sapporo",
            "lat": 43.0604,
            "lng": 141.3545,
            "reservation": "none",
            "reservationNote": "户外街区全部免费；电视塔展望台想上去现场买票即可。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "街区免费（上电视塔展望台另约 ¥1,000）。"
            },
            "photo": photo("hk-d4-odori"),
            "why": "睡到自然醒在市中心散步，一眼收进札幌电视塔和百年红砖老建筑。",
            "note": "这几处地标彼此隔着两三个街区，平地慢走 20 多分钟就能串起来，路上随时可以钻进森彦咖啡（MORIHICO）喝杯手冲。"
          },
          {
            "id": "hk-d4-lunch",
            "time": "12:30",
            "kind": "food",
            "name": "札幌香料汤咖喱午餐（GARAKU 或 Suage+）",
            "address": "Near Odori / Susukino, Sapporo",
            "lat": 43.0578,
            "lng": 141.3538,
            "reservation": "none",
            "reservationNote": "名店饭点常排队，12 点前到或拿电子号在附近逛着等最快。",
            "bookingUrl": "",
            "cost": {
              "amount": 1800,
              "note": "一份脆皮鸡腿汤咖喱约 ¥1,500–2,000。"
            },
            "why": "札幌最具代表性的辛香浓汤，焦香大鸡腿配北海道甜南瓜、舞茸和西兰花，淋上柠檬汁配黄姜饭一绝。",
            "note": "大通到狸小路一带好店非常集中（Suage+、GARAKU、Treasure 等），一个人坐吧台位通常翻台很快。"
          },
          {
            "id": "hk-d4-free",
            "time": "14:00–16:30",
            "kind": "sight",
            "name": "狸小路商店街闲逛与咖啡歇脚",
            "address": "Tanukikoji Shopping Arcade, Sapporo",
            "lat": 43.0572,
            "lng": 141.353,
            "reservation": "none",
            "reservationNote": "",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "按需消费。"
            },
            "why": "头顶有透明长拱廊遮风挡雪，药妆、古着小店和老牌吃茶店都在这一条街上。",
            "note": "从 1 丁目到 7 丁目全长近一公里，逛累了可以回酒店小睡一会儿，养足精神傍晚上山看夜景。"
          },
          {
            "id": "hk-d4-moiwa",
            "time": "17:15–19:30",
            "kind": "sight",
            "name": "藻岩山缆车看札幌夜景",
            "address": "Mt. Moiwa Ropeway, Sapporo",
            "lat": 43.0364,
            "lng": 141.3211,
            "reservation": "none",
            "reservationNote": "遇大风雪可能临时停运，出门前看一眼官网顶部的运行状态提示。",
            "bookingUrl": "https://mt-moiwa.jp/",
            "cost": {
              "amount": 2300,
              "note": "两段缆车往返套票 ¥2,100。"
            },
            "photo": photo("hk-d4-moiwa"),
            "why": "日本新三大夜景之一，整座札幌棋盘状的万家灯火铺在雪原上，视野极开阔。",
            "note": "在薄野十字路口坐复古市电（有轨电车）约 20 分钟到「ロープウェイ入口」站，下车走两步就有免费接驳巴士送到山麓缆车站。3 月日落在 17:30 左右，提前半小时上山能一次看全蓝调时刻和夜景。山顶风非常硬，帽子手套围巾全副武装；万一当天缆车停开，就改去札幌站楼上的 JR 塔 T38 室内展望室看夜景。"
          }
        ]
      },
      {
        "id": "hk-d5",
        "date": "2027-03-09",
        "city": "札幌",
        "title": "北海道大学散步、买伴手礼，傍晚返程",
        "items": [
          {
            "id": "hk-d5-morning",
            "time": "09:30–12:00",
            "kind": "sight",
            "name": "北海道大学银杏白杨道与札幌站百货",
            "address": "Sapporo Station / Hokkaido University",
            "lat": 43.0686,
            "lng": 141.3508,
            "reservation": "none",
            "reservationNote": "",
            "bookingUrl": "",
            "cost": {
              "amount": 1500,
              "note": "预留伴手礼预算约 ¥1,500。"
            },
            "why": "离札幌站北口仅几步路的宁静雪地校园，逛完顺路在大丸百货把六花亭、北菓楼一次买齐。",
            "note": "退房后先把行李寄存在酒店前台或札幌站储物柜，轻装去北大校园走一圈（注意安静，不进教学楼）。买点心在札幌站大丸百货 B1 或下午到新千岁机场国内航站楼 2 楼买都很全。"
          },
          {
            "id": "hk-d5-lunch",
            "time": "12:15",
            "kind": "food",
            "name": "札幌站根室花丸回转寿司或十胜豚丼",
            "address": "JR Tower Stellar Place 6F, Sapporo Station",
            "lat": 43.0683,
            "lng": 141.3505,
            "reservation": "none",
            "reservationNote": "Stellar Place 6 楼两家名店都支持机器取号，拿完号可以在商场里边逛边等。",
            "bookingUrl": "",
            "cost": {
              "amount": 1500,
              "note": "人均约 ¥1,300–2,200。"
            },
            "why": "离开札幌前吃顿现握北海道海鲜寿司，或炭火焦香的十胜烤猪肉饭收尾。",
            "note": "都在札幌站楼上的 Stellar Place 6 楼（根室花丸寿司、十胜豚丼 いっぴん）。如果不想等位，新千岁机场国内航站楼 3 楼的「北海道拉面道场」和海鲜餐厅也非常好逛好吃。"
          },
          {
            "id": "hk-d5-to-airport",
            "time": "15:00–15:40",
            "kind": "transport",
            "name": "JR 快速 Airport 前往新千岁机场",
            "address": "Sapporo Station → New Chitose Airport",
            "lat": 43.0686,
            "lng": 141.3508,
            "reservation": "none",
            "reservationNote": "19:30 起飞，16:00 左右到机场还能从容逛吃新千岁国内楼。",
            "bookingUrl": "",
            "cost": {
              "amount": 1200,
              "note": "单程约 ¥1,150。"
            },
            "note": "冬季偶尔遇到风雪减速，比平时多留半小时余量更踏实。新千岁国内航站楼被称作最好逛的机场，吃个 Kinotoya 牛奶冰淇淋再去值机。"
          },
          {
            "id": "hk-d5-flight1",
            "time": "19:30–21:10",
            "kind": "transport",
            "name": "札幌新千岁飞东京羽田 NH78",
            "address": "New Chitose Airport (CTS)",
            "lat": 42.7752,
            "lng": 141.6925,
            "reservation": "none",
            "reservationNote": "机票已出；新千岁柜台确认行李能否直挂上海浦东。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "已含在往返机票里。"
            },
            "note": "在全日空柜台办手续时让地勤把两段登机牌打出来，确认行李直挂。落地羽田后跟着「国際線乗継」指示走转机通道。"
          },
          {
            "id": "hk-d5-flight2",
            "time": "22:40–01:15+1",
            "kind": "transport",
            "name": "东京羽田飞上海浦东 NH967",
            "address": "Tokyo Haneda (HND) → Shanghai Pudong (PVG)",
            "lat": 35.5494,
            "lng": 139.7798,
            "reservation": "none",
            "reservationNote": "次日凌晨 01:15 落地浦东。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "已含在往返机票里。"
            },
            "note": "落地浦东已是凌晨一点多，地铁已停运，提前约好接机或出到达层去出租车/网约车上客点。"
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
        "title": "落地悉尼，海港渡轮与歌剧院日落",
        "items": [
          {
            "id": "au-d1-opal",
            "time": "落地后",
            "kind": "transport",
            "name": "机场火车 T8 直达环形码头",
            "address": "Sydney Airport International Station",
            "lat": -33.9344,
            "lng": 151.1652,
            "reservation": "none",
            "reservationNote": "不用提前买票，直接刷 Visa / Mastercard 信用卡或 Opal 卡进站。",
            "bookingUrl": "",
            "cost": {
              "amount": 22.94,
              "note": "含机场站通行费 A$18.61 + 进城车资，合计约 A$22.94。"
            },
            "note": "国际航站楼和国内航站楼各有一个火车站。跟着 Train 指示牌下楼坐 T8 进城方向，在 Circular Quay（环形码头）下车即可。如果行李多或飞太累，也可以直接打车进城，车程约 30–40 分钟。"
          },
          {
            "id": "au-d1-stay",
            "time": "入住",
            "kind": "stay",
            "name": "住环形码头或岩石区（连住 2 晚）",
            "address": "Circular Quay, Sydney",
            "lat": -33.8612,
            "lng": 151.2108,
            "reservation": "required",
            "reservationNote": "海港边位置好的酒店抢手，建议提前连订两晚；上午落地可先把行李寄存在前台。",
            "bookingUrl": "https://www.booking.com/searchresults.html?ss=Circular+Quay%2C+Sydney&checkin=2027-04-29&checkout=2027-05-01",
            "cost": {
              "amount": 330,
              "note": "四星酒店每晚约 A$300–350/间，两晚双人平摊每人约 A$330。"
            },
            "why": "下楼就能走到歌剧院、岩石区和渡轮码头，前两天坐船出门最省力。",
            "note": "今明两天去沃森斯湾和曼利海滩都在环形码头上船，住这一片不用反复换乘。"
          },
          {
            "id": "au-d1-watsons",
            "time": "早到再去",
            "kind": "sight",
            "name": "渡轮去沃森斯湾与 The Gap 海崖",
            "address": "Gap Park, Watsons Bay",
            "lat": -33.8452,
            "lng": 151.287,
            "reservation": "none",
            "reservationNote": "渡轮直接刷卡上船，海崖公园免费。",
            "bookingUrl": "",
            "cost": {
              "amount": 14.7,
              "note": "往返渡轮单程各 A$7.35。"
            },
            "why": "内港一侧是安静小渔村，翻过草坡就是太平洋巨浪拍岸的断崖，来回坐船很轻松。",
            "photo": photo("au-d2-gap"),
            "note": "如果搭早班机上午就到悉尼，放好行李去环形码头 2 号码头坐 F9 渡轮（约 25 分钟）。下船穿过草坪走上 Gap Park 看外海悬崖，往返步行只要 20 分钟；若下午才落地悉尼，就跳过这站直接去歌剧院散步。"
          },
          {
            "id": "au-d1-opera",
            "time": "傍晚",
            "kind": "sight",
            "name": "悉尼歌剧院与麦考利夫人石椅散步",
            "address": "Bennelong Point, Sydney NSW",
            "lat": -33.8568,
            "lng": 151.2153,
            "reservation": "none",
            "reservationNote": "户外海滨步道全天免费。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "免费。"
            },
            "why": "顺着海港栈道慢走到白帆脚下，再进皇家植物园拍歌剧院与海港大桥同框日落。",
            "photo": photo("au-d1-opera"),
            "note": "从环形码头沿海边散步过去只要几分钟。看完美丽的贝壳屋顶，如果体力还行，继续往东穿过皇家植物园走 20 分钟到 Mrs Macquarie's Chair，傍晚光线最出片。"
          },
          {
            "id": "au-d1-tour",
            "time": "想进去再订",
            "kind": "sight",
            "name": "悉尼歌剧院中文/英文入内导览",
            "address": "Sydney Opera House Welcome Centre",
            "lat": -33.8568,
            "lng": 151.2153,
            "reservation": "recommended",
            "reservationNote": "官网提前买比现场便宜 A$5；每场限约 35 人，迟到超 5 分钟无法入场。",
            "bookingUrl": "https://www.sydneyoperahouse.com/tours/sydney-opera-house-tour",
            "cost": {
              "amount": 52,
              "note": "官网提前订每人约 A$52。"
            },
            "why": "由讲解员带着走进风帆内部看木质音乐厅结构，团小安静。",
            "photo": photo("au-d1-tour"),
            "note": "想看内部建筑再订即可，选傍晚前最后一场，提前 15 分钟到下层 Welcome Centre 集合。"
          },
          {
            "id": "au-d1-bar",
            "time": "晚饭",
            "kind": "food",
            "name": "Opera Bar 海景晚餐",
            "address": "Lower Concourse, Sydney Opera House",
            "lat": -33.8583,
            "lng": 151.2142,
            "reservation": "none",
            "reservationNote": "现场找位置入座，不接受预订。",
            "bookingUrl": "",
            "cost": {
              "amount": 60,
              "note": "一份主菜配一杯酒水人均约 A$50–70。"
            },
            "why": "就在歌剧院正下方的露天水岸餐吧，正对海港大桥夜景。",
            "note": "日落前后靠水边的桌子最抢手，逛完歌剧院直接下楼坐下吃顿简餐喝一杯，吃完溜达回酒店早点睡。"
          }
        ]
      },
      {
        "id": "au-d3",
        "date": "2027-04-30",
        "city": "悉尼",
        "title": "渡轮去曼利海滩，徒步北角悬崖",
        "items": [
          {
            "id": "au-d3-ferry",
            "time": "10:00",
            "kind": "transport",
            "name": "F1 渡轮前往曼利码头",
            "address": "Circular Quay Wharf 3",
            "lat": -33.8612,
            "lng": 151.2108,
            "reservation": "none",
            "reservationNote": "直接刷信用卡或 Opal 卡进闸。",
            "bookingUrl": "",
            "cost": {
              "amount": 9.65,
              "note": "周五全天公共交通封顶 A$9.65，往返渡轮与公交都含在内。"
            },
            "note": "在环形码头 3 号码头坐 F1 Manly，航程约 30 分钟。挑上层甲板外侧坐，一路驶过歌剧院和海港大桥，海风大记得带件外套。"
          },
          {
            "id": "au-d3-manly",
            "time": "10:40",
            "kind": "sight",
            "name": "曼利海滩与 Shelly Beach 海滨步道",
            "address": "Shelly Beach, Manly",
            "lat": -33.8003,
            "lng": 151.2975,
            "reservation": "none",
            "reservationNote": "免费开放。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "免费。"
            },
            "why": "穿过冲浪海滩顺着礁石海边栈道往南走一公里，就是风平浪静的朝北小海湾。",
            "photo": photo("au-d3-manly"),
            "note": "下船穿过 The Corso 步行街时先买好三明治和饮用水带上（后面北角山上没有商店和餐厅），走到主海滩右转沿着海边步道慢走到 Shelly Beach。"
          },
          {
            "id": "au-d3-northhead",
            "time": "11:30",
            "kind": "sight",
            "name": "北角 Fairfax 悬崖观景台",
            "address": "Fairfax Lookout, North Head Scenic Drive, Manly",
            "lat": -33.8167,
            "lng": 151.2963,
            "reservation": "none",
            "reservationNote": "国家公园免费进入。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "免费。"
            },
            "why": "站在高耸海岬上回望整座悉尼港入口与城市天际线，5 月初还常能遇到迁徙的鲸鱼。",
            "photo": photo("au-d3-northhead"),
            "note": "从 Shelly Beach 停车场后方的林间步道爬升约 80 米上山，跟着路牌走到 Fairfax Lookout 环形栈道，刚好在悬崖边野餐吃午饭。"
          },
          {
            "id": "au-d3-bus",
            "time": "14:30",
            "kind": "transport",
            "name": "161 路公交回曼利码头",
            "address": "North Fort, North Head Scenic Drive",
            "lat": -33.8133,
            "lng": 151.2925,
            "reservation": "none",
            "reservationNote": "上车刷卡。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "已含在周五封顶车资里。"
            },
            "note": "在 North Fort 停车场坐 161 路下山回码头（约半小时一班）；如果不想等车，顺步道一路下坡走回去也只要 3 公里。"
          },
          {
            "id": "au-d3-back",
            "time": "15:30",
            "kind": "transport",
            "name": "渡轮返回环形码头",
            "address": "Manly Wharf",
            "lat": -33.8001,
            "lng": 151.284,
            "reservation": "none",
            "reservationNote": "",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "已含在当天封顶里。"
            },
            "note": "坐 F1 渡轮迎着夕阳光线回环形码头，下船往西走两步就是岩石区。"
          },
          {
            "id": "au-d3-rocks",
            "time": "16:45–19:30",
            "kind": "food",
            "name": "岩石区（The Rocks）石板老街漫步与海港晚餐",
            "address": "The Rocks, Sydney NSW",
            "lat": -33.8599,
            "lng": 151.209,
            "reservation": "none",
            "reservationNote": "历史老酒馆与露天餐座随到随坐。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "餐费已计入每日三餐预算。"
            },
            "why": "海港大桥正下方的百年砂岩老街区，傍晚逛手工小店，再找家百年酒馆露台吃牛排或炸鱼薯条。",
            "note": "从环形码头西侧步行 5 分钟即达。The Glenmore 顶层露台正好平视歌剧院夜景，吃完慢慢走回酒店收拾行李，准备明早飞圣灵群岛。"
          }
        ]
      },
      {
        "id": "au-d4",
        "date": "2027-05-01",
        "city": "圣灵群岛",
        "title": "飞抵艾尔利海滩，泻湖看海",
        "items": [
          {
            "id": "au-d4-flight",
            "time": "早上",
            "kind": "transport",
            "name": "悉尼直飞普罗瑟派恩（PPP）",
            "address": "Whitsunday Coast Airport PPP",
            "lat": -20.495,
            "lng": 148.552,
            "reservation": "required",
            "reservationNote": "正逢昆士兰劳动节长周末首日，早点锁中午前后落地的直飞航班。",
            "bookingUrl": "https://www.google.com/travel/flights?hl=zh-CN&q=One%20way%20flights%20from%20Sydney%20to%20Proserpine%20on%20May%201%202027",
            "cost": {
              "amount": 260,
              "note": "捷星直飞含一件托运行李约 A$220–290。"
            },
            "note": "白天堂沙滩的一日游快艇大多从艾尔利海滩发船，所以飞大陆侧的 PPP（Whitsunday Coast）机场最顺，航程约 2.5 小时。"
          },
          {
            "id": "au-d4-shuttle",
            "time": "落地后",
            "kind": "transport",
            "name": "机场接驳巴士前往艾尔利海滩",
            "address": "Airlie Beach",
            "lat": -20.2676,
            "lng": 148.7166,
            "reservation": "recommended",
            "reservationNote": "巴士按航班时间发车，提前在网上订好座位最稳。",
            "bookingUrl": "https://www.whitsundaytransit.com.au/",
            "cost": {
              "amount": 22,
              "note": "单程约 A$22。"
            },
            "note": "上车报酒店名字即可直接送到门口，车程约 35–40 分钟。"
          },
          {
            "id": "au-d4-stay",
            "time": "入住",
            "kind": "stay",
            "name": "住艾尔利海滩主街或 Coral Sea 码头旁（连住 2 晚）",
            "address": "Airlie Beach QLD",
            "lat": -20.2682,
            "lng": 148.7172,
            "reservation": "required",
            "reservationNote": "昆士兰劳动节小长假期间海边房源紧俏，尽早预订。",
            "bookingUrl": "https://www.booking.com/searchresults.html?ss=Airlie+Beach&checkin=2027-05-01&checkout=2027-05-03",
            "cost": {
              "amount": 280,
              "note": "每晚约 A$250–300/间，两晚双人平摊每人约 A$280。"
            },
            "why": "出门就是海滨主街和游艇码头，第二天一早溜达着就能去登船出海。",
            "note": "认准 Airlie Beach 镇中心或 Coral Sea Marina 周边，千万别订到内陆的 Proserpine 镇上。"
          },
          {
            "id": "au-d4-lagoon",
            "time": "下午",
            "kind": "sight",
            "name": "艾尔利海滨泻湖泳池（Airlie Beach Lagoon）",
            "address": "Airlie Beach Lagoon",
            "lat": -20.2692,
            "lng": 148.7188,
            "reservation": "none",
            "reservationNote": "免费公共设施。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "免费。"
            },
            "why": "紧贴珊瑚海的露天无边泻湖，不用穿防刺服就能安全泡水晒太阳。",
            "photo": photo("au-d4-lagoon"),
            "note": "5 月初外海仍有水母需穿防刺服，在镇中心的泻湖泳池可以直接下水游泳，旁边草坪躺着看海非常惬意。"
          }
        ]
      },
      {
        "id": "au-d5",
        "date": "2027-05-02",
        "city": "圣灵群岛",
        "title": "出海：白天堂沙滩与希尔湾观景台",
        "altTitle": "备选船型：怕快艇颠簸可改订 Lady Enid 复古木帆船",
        "items": [
          {
            "id": "au-d5-raft",
            "time": "08:45–15:30",
            "kind": "sight",
            "name": "Ocean Rafting 快艇一日游（Northern Exposure 线）",
            "address": "Coral Sea Marina, Airlie Beach",
            "lat": -20.267,
            "lng": 148.7135,
            "reservation": "required",
            "reservationNote": "整趟行程最抢手的一项，务必提前锁 Northern Exposure 线（只订半日游去不了希尔湾观景台）。",
            "bookingUrl": "https://www.oceanrafting.com.au/",
            "cost": {
              "amount": 249,
              "note": "成人 A$249，含自助简餐、浮潜装备、防刺服和镇上接送。"
            },
            "why": "半敞篷快艇船小速度快，能赶在大批游船抵达前先登上观景台和白沙滩。",
            "note": "认准 Coral Sea Marina 北码头集合（别跑去另一头的 Port of Airlie），提前 30 分钟签到。带好泳衣、浴巾、防晒霜和一双好走的凉鞋，容易晕船的话开船前半小时先吃晕船药。"
          },
          {
            "id": "au-d5-enid",
            "alt": true,
            "time": "08:00–17:30",
            "kind": "sight",
            "name": "Lady Enid 复古木帆船一日游",
            "address": "Coral Sea Marina, Airlie Beach",
            "lat": -20.2682,
            "lng": 148.7172,
            "reservation": "recommended",
            "reservationNote": "与上面的快艇二选一即可；仅接待 18 岁以上成人，限载 24 人。",
            "bookingUrl": "https://www.australiancruisegroup.com.au/whitsundays/whitehaven-beach-cruises/10hr-lady-enid-whitehaven-beach-sail-snorkel-cruise",
            "cost": {
              "amount": 295,
              "note": "每人 A$295（含早午茶点与浮潜，比快艇贵 A$46）。"
            },
            "why": "1962 年的经典木帆船，航行平稳安静，同样包含希尔湾观景台和白天堂沙滩。",
            "note": "全程约 9.5 小时，适合不想坐高速快艇颠簸、想在甲板上慢慢吹海风看海的节奏。"
          },
          {
            "id": "au-d5-hill",
            "time": "上午",
            "kind": "sight",
            "name": "希尔湾观景台（Hill Inlet Lookout）",
            "address": "Hill Inlet Lookout, Whitsunday Island",
            "lat": -20.2597,
            "lng": 149.0378,
            "reservation": "none",
            "reservationNote": "已含在出海行程内。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "含在船票里。"
            },
            "why": "纯白沙洲与蒂芙尼蓝海水随潮汐交织成流沙漩涡，圣灵群岛最震撼的俯瞰机位。",
            "photo": photo("au-d5-hill"),
            "note": "快艇停靠 Tongue Bay 后，跟着向导走 15 分钟林间木栈道登上观景台。"
          },
          {
            "id": "au-d5-sand",
            "time": "中午",
            "kind": "sight",
            "name": "白天堂沙滩（Whitehaven Beach）",
            "address": "Whitehaven Beach, Whitsunday Island",
            "lat": -20.282,
            "lng": 149.0375,
            "reservation": "none",
            "reservationNote": "已含在出海行程内。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "含在船票里。"
            },
            "why": "绵延 7 公里的 98% 纯白硅砂海滩，赤脚踩上去细腻不烫脚。",
            "photo": photo("au-d5-sand"),
            "note": "岛上属于国家公园保护区，没有任何商店，也不能带走沙子。下午回港后在艾尔利主街吃海鲜，早点把箱子收好准备明早飞墨尔本。"
          }
        ]
      },
      {
        "id": "au-d7",
        "date": "2027-05-03",
        "city": "墨尔本",
        "title": "飞抵墨尔本，穿梭涂鸦咖啡小巷",
        "items": [
          {
            "id": "au-d7-flight",
            "time": "上午",
            "kind": "transport",
            "name": "普罗瑟派恩直飞墨尔本 JQ833",
            "address": "Melbourne Airport",
            "lat": -37.669,
            "lng": 144.841,
            "reservation": "required",
            "reservationNote": "每天仅一班捷星直飞（约 3 小时），小长假返程票紧，建议最先锁定。",
            "bookingUrl": "https://www.google.com/travel/flights?hl=zh-CN&q=One%20way%20flights%20from%20Proserpine%20to%20Melbourne%20on%20May%203%202027",
            "cost": {
              "amount": 322,
              "note": "直飞机票含托运约 A$300 + 去 PPP 机场的接驳巴士 A$22。"
            },
            "note": "提前一天约好从艾尔利海滩去机场的大巴（车程约 40 分钟），按起飞前 2 小时到机场预留。"
          },
          {
            "id": "au-d7-sky",
            "time": "落地后",
            "kind": "transport",
            "name": "SkyBus 机场快线直达南十字星站",
            "address": "Southern Cross Station, Melbourne",
            "lat": -37.8184,
            "lng": 144.9525,
            "reservation": "none",
            "reservationNote": "随到随坐，现场扫码或刷卡买票。",
            "bookingUrl": "https://www.skybus.com.au/",
            "cost": {
              "amount": 43.4,
              "note": "直接买往返套票 A$43.40（比买两次单程省 A$8.40，回程通用）。"
            },
            "note": "走出航站楼就能看到红色 SkyBus 双层大巴，约 30–40 分钟直达市中心 Southern Cross 车站。"
          },
          {
            "id": "au-d7-stay",
            "time": "入住",
            "kind": "stay",
            "name": "住弗林德斯街或南十字星站周边（连住 2 晚）",
            "address": "Flinders Street, Melbourne",
            "lat": -37.8183,
            "lng": 144.9671,
            "reservation": "required",
            "reservationNote": "连住 5 月 3–5 日两晚，选在免费电车区（Free Tram Zone）内最方便。",
            "bookingUrl": "https://www.booking.com/searchresults.html?ss=Flinders+Street+Melbourne&checkin=2027-05-03&checkout=2027-05-05",
            "cost": {
              "amount": 240,
              "note": "市中心四星每晚约 A$200–260/间，两晚双人平摊每人约 A$240。"
            },
            "why": "出门在市中心坐电车全免费，去涂鸦巷和返程搭机场大巴都在步行圈内。",
            "note": "若最后一天搭早班机回国，提前一晚把行李收拾妥当；若搭晚班机，退房后把箱子寄存在前台即可轻松再逛半天。"
          },
          {
            "id": "au-d7-lanes",
            "time": "傍晚",
            "kind": "sight",
            "name": "Degraves St 与 Flinders Lane 咖啡涂鸦小巷",
            "address": "Centre Place, Melbourne",
            "lat": -37.816,
            "lng": 144.9653,
            "reservation": "none",
            "reservationNote": "全天免费。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "免费。"
            },
            "why": "比游客扎堆的 Hosier Lane 更有味道，窄巷两侧挤满露天咖啡座、独立小店与街头壁画。",
            "photo": photo("au-d7-lanes"),
            "note": "从弗林德斯街车站对面钻进 Degraves Street 和 Centre Place，再顺着 Flinders Lane 一路往东慢走到 AC/DC Lane，20 分钟就能逛完精华段，终点刚好去吃晚饭。"
          },
          {
            "id": "au-d7-coda",
            "time": "晚饭",
            "kind": "food",
            "name": "Coda 晚餐",
            "address": "141 Flinders Lane, Melbourne VIC 3000",
            "lat": -37.8162,
            "lng": 144.9704,
            "reservation": "recommended",
            "reservationNote": "墨尔本口碑很稳的巷弄餐厅，晚餐建议提前官网订位。",
            "bookingUrl": "https://www.opentable.com/r/coda-melbourne",
            "cost": {
              "amount": 100,
              "note": "点几道招牌小菜配杯葡萄酒，人均约 A$90–110。"
            },
            "why": "藏在弗林德斯巷半地下室的现代亚澳融合菜，烤鸭春卷和黄咖喱都很出彩。",
            "note": "就在 AC/DC Lane 路口旁，订 19:00 左右最从容。"
          }
        ]
      },
      {
        "id": "au-d8",
        "date": "2027-05-04",
        "city": "墨尔本",
        "title": "卡尔顿花园、Fitzroy 复古街区与老修道院",
        "items": [
          {
            "id": "au-d8-reb",
            "time": "10:30",
            "kind": "sight",
            "name": "皇家展览馆与卡尔顿花园",
            "address": "9 Nicholson Street, Carlton VIC",
            "lat": -37.8047,
            "lng": 144.9717,
            "reservation": "none",
            "reservationNote": "花园与展览馆外广场免费开放。",
            "bookingUrl": "",
            "cost": {
              "amount": 17.4,
              "note": "myki 交通卡工本费 A$6 + 全天交通封顶 A$11.40。",
              "cat": "transport"
            },
            "why": "5 月初秋梧桐叶变黄，阳光穿过林荫道照在百年白色穹顶建筑上特别出片。",
            "photo": photo("au-d8-reb"),
            "note": "在 Bourke Street 坐 86 或 96 路电车到 Melbourne Museum 站下车即到，绕着喷泉和花园走一圈，东门出去就接上 Fitzroy 街区。"
          },
          {
            "id": "au-d8-fitzroy",
            "time": "11:30",
            "kind": "sight",
            "name": "Fitzroy 街区漫步（Gertrude St 与后街）",
            "address": "Gertrude Street, Fitzroy VIC",
            "lat": -37.806,
            "lng": 144.981,
            "reservation": "none",
            "reservationNote": "街区随逛随停，午饭直接在街边挑喜欢的馆子。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "逛街免费，午饭已含在每日餐费预算里。"
            },
            "why": "墨尔本最有生活气息的老街区，维多利亚式铸铁阳台排屋里藏着独立书店、买手店和烘焙坊。",
            "photo": photo("au-d8-fitzroy"),
            "note": "沿着 Gertrude Street 往东逛，随时拐进北侧安静的 Rose Street、Kerr Street 看老排屋和画廊；中午在附近喝杯 Flat White、吃顿 Brunch（如 Lune 可颂或 Archie's All Day）。"
          },
          {
            "id": "au-d8-convent",
            "time": "14:00–16:15",
            "kind": "sight",
            "name": "Abbotsford Convent 老修道院艺术园",
            "address": "1 St Heliers Street, Abbotsford VIC",
            "lat": -37.8025,
            "lng": 145.0036,
            "reservation": "none",
            "reservationNote": "园区全天免费。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "免费，往返公交与火车已含在当天 myki 封顶里。"
            },
            "why": "亚拉河湾畔的百年修道院建筑群，大草坪、花园面包房与手工作坊安静得像世外桃源。",
            "photo": photo("au-d8-convent"),
            "note": "从 Fitzroy 走到 Johnston Street 坐 200 或 207 路公交到终点 Clarke Street 下车（打车也只要 10 分钟），顺着河岸步道还可以走到隔壁小农场看看。"
          },
          {
            "id": "au-d8-back-city",
            "time": "16:30–17:00",
            "kind": "transport",
            "name": "Victoria Park 站乘火车回市中心",
            "address": "Victoria Park Station, Abbotsford",
            "lat": -37.7995,
            "lng": 144.9945,
            "reservation": "none",
            "reservationNote": "刷 myki 进站。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "已含在当天 myki 封顶里。"
            },
            "note": "从修道院步行 12 分钟到车站，坐 Mernda 或 Hurstbridge 线约 10 分钟回到 Flinders Street。"
          },
          {
            "id": "au-d8-southbank",
            "time": "17:45–20:00",
            "kind": "food",
            "name": "雅拉河南岸（Southbank）日落散步与晚餐",
            "address": "Southbank Promenade, Melbourne",
            "lat": -37.8204,
            "lng": 144.9647,
            "reservation": "none",
            "reservationNote": "河畔餐厅与唐人街/意大利街馆子选择极多，现场挑即可。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "餐费已计入每日三餐预算。"
            },
            "why": "沿着王子桥与雅拉河岸看市中心高楼亮起灯火，找家河景餐厅或去 Lygon St 吃意面收尾。",
            "note": "如果在澳洲的最后一晚想吃热乎中餐，从河边走两个街区就是 Little Bourke St 唐人街；若明天搭早班机回国，今晚吃完记得提前把箱子打包好。"
          },
          {
            "id": "au-d8-ngv",
            "time": "下雨再去",
            "kind": "sight",
            "name": "维多利亚国家美术馆（NGV International）",
            "address": "180 St Kilda Road, Melbourne",
            "lat": -37.8226,
            "lng": 144.9689,
            "reservation": "none",
            "reservationNote": "常设馆藏免费直接入场，仅大型特展需购票。",
            "bookingUrl": "https://www.ngv.vic.gov.au/whats-on/",
            "cost": {
              "amount": 0,
              "note": "常设展免费。"
            },
            "why": "澳洲馆藏最丰富的美术馆，入口水幕墙与彩绘玻璃穹顶大厅本身就值得一看。",
            "photo": photo("au-d8-ngv"),
            "note": "如果这天碰上刮风下雨，就把户外老修道院换成这里。从弗林德斯街车站过桥往南走 8 分钟就到。"
          }
        ]
      },
      {
        "id": "au-d9",
        "date": "2027-05-05",
        "city": "墨尔本",
        "title": "皇家植物园晨间散步，返程回国",
        "items": [
          {
            "id": "au-d9-garden",
            "time": "北京出发才去",
            "kind": "sight",
            "name": "皇家植物园与战争纪念馆露台",
            "address": "Shrine of Remembrance, Birdwood Avenue, Melbourne",
            "lat": -37.8305,
            "lng": 144.9734,
            "reservation": "none",
            "reservationNote": "两处均免费开放（植物园 07:30 开园，纪念馆 10:00 开放）。",
            "bookingUrl": "",
            "cost": {
              "amount": 0,
              "note": "免费。"
            },
            "why": "登上纪念馆顶层露台正对市中心中轴天际线，隔壁就是黑天鹅游弋的皇家植物园湖畔。",
            "note": "适合搭傍晚航班（如北京线 19:40 起飞）的半日慢逛：从酒店沿圣基尔达路散步过去，中午在园内湖边咖啡馆吃简餐，15:00 前回酒店取行李即可。"
          },
          {
            "id": "au-d8-air",
            "time": "回程",
            "kind": "transport",
            "name": "南十字星站乘 SkyBus 前往墨尔本机场",
            "address": "Southern Cross Station",
            "lat": -37.8184,
            "lng": 144.9525,
            "reservation": "none",
            "reservationNote": "直接刷去程买好的往返二维码上车。",
            "bookingUrl": "https://www.skybus.com.au/",
            "cost": {
              "amount": 0,
              "note": "已含在往返套票里。"
            },
            "note": "SkyBus 24 小时发车，车程约 35–45 分钟。国际航班建议至少提前 3 小时到机场办理退税和托运（北京 19:40 航班约 15:45 前上车；上海 08:00 早班机需凌晨 04:30 前上车）。"
          }
        ]
      }
    ]
  }
];
