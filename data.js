window.SEED_TRIPS = [
  {
    id: "australia-2027",
    title: "澳洲",
    start: "2027-04-28",
    end: "2027-05-05",
    covers: {
      悉尼: {
        src: "covers/sydney.jpg",
        credit: "Benh LIEU SONG · CC BY-SA 4.0",
        link: "https://commons.wikimedia.org/wiki/File:Sydney_Opera_House_and_Harbour_Bridge_Dusk_(2)_2019-06-21.jpg"
      },
      圣灵群岛: {
        src: "covers/whitsundays.jpg",
        credit: "Isderion · CC BY-SA 3.0 DE",
        link: "https://commons.wikimedia.org/wiki/File:Hill_Inlet_at_the_end_of_Whitehaven_Beach_in_the_Whitsundays.JPG"
      },
      墨尔本: {
        src: "covers/melbourne.jpg",
        credit: "Donaldytong · CC BY-SA 3.0",
        link: "https://commons.wikimedia.org/wiki/File:Melbourne_Yarra_River.jpg"
      }
    },
    summary: "按开口程排：4月28日进悉尼，5月1日飞圣灵群岛，5月4日飞墨尔本，5月5日从墨尔本离开。如果你的回程也在悉尼，把墨尔本放到最前面。5月2日是这趟唯一要早起的一天，船早上开。维多利亚女王市场星期三不开，所以5月5日不去。蓝山和大洋路来回都要一整天，这趟没排。",
    days: [
      {
        id: "au-d1",
        date: "2027-04-28",
        city: "悉尼",
        title: "下飞机，只在港边走",
        items: [
          {
            id: "au-d1-opal",
            time: "落地后",
            kind: "transport",
            name: "机场站坐火车到环形码头",
            address: "Sydney Airport International Station",
            lat: -33.9344,
            lng: 151.1652,
            reservation: "none",
            reservationNote: "不用订票。刷银行卡或 Opal 卡即可。",
            bookingUrl: "",
            note: "国际航站楼和国内航站楼是两个火车站。坐 T8，方向进城，经过中央车站、市政厅、温亚德，到环形码头下。机场站另收一笔通行费，比普通地铁贵。行李多、很累就打车，大约三四十分钟到环形码头。"
          },
          {
            id: "au-d1-stay",
            time: "入住",
            kind: "stay",
            name: "住环形码头或岩石区",
            address: "Circular Quay, Sydney",
            lat: -33.8612,
            lng: 151.2108,
            reservation: "required",
            reservationNote: "国庆前后不是旺季，但港边酒店仍然要先订。",
            bookingUrl: "https://www.booking.com/searchresults.html?ss=Circular+Quay%2C+Sydney&checkin=2027-04-28&checkout=2027-05-01",
            note: "住这儿，歌剧院、岩石区和渡轮码头都能走路到。后面两晚都住同一家，5月1日早上再去机场。"
          },
          {
            id: "au-d1-opera",
            time: "下午",
            kind: "sight",
            name: "悉尼歌剧院外面",
            address: "Bennelong Point, Sydney NSW",
            lat: -33.8568,
            lng: 151.2153,
            reservation: "none",
            reservationNote: "只在室外走，不用票。",
            bookingUrl: "",
            note: "从环形码头沿着海走过去。先看壳，再绕到海岬一侧。刚下飞机不要排室内导览。"
          },
          {
            id: "au-d1-tour",
            time: "想进去再订",
            kind: "sight",
            name: "歌剧院室内导览",
            address: "Sydney Opera House Welcome Centre",
            lat: -33.8568,
            lng: 151.2153,
            reservation: "recommended",
            reservationNote: "官网写明建议提前买。每场大约35人，迟到超过5分钟票作废。",
            bookingUrl: "https://www.sydneyoperahouse.com/tours/sydney-opera-house-tour",
            note: "到了再决定。订的话选下午场，提前15分钟到下层的 Welcome Centre。不订也不影响这天。"
          },
          {
            id: "au-d1-chair",
            time: "傍晚",
            kind: "sight",
            name: "皇家植物园到麦考利夫人椅子",
            address: "Mrs Macquaries Point, Sydney",
            lat: -33.8599,
            lng: 151.2226,
            reservation: "none",
            reservationNote: "植物园免费，不用订。",
            bookingUrl: "",
            note: "从歌剧院继续往东走进植物园，顺着海走到尽头，就是看歌剧院和港湾的那个石头椅子。原路走回岩石区。"
          },
          {
            id: "au-d1-bar",
            time: "晚饭",
            kind: "food",
            name: "Opera Bar",
            address: "Lower Concourse, Sydney Opera House",
            lat: -33.8583,
            lng: 151.2142,
            reservation: "none",
            reservationNote: "歌剧院下层的酒吧餐厅，现场坐，不接受预订。",
            bookingUrl: "",
            note: "就在歌剧院脚下。要靠窗的位置就早点去。这天别再跑别的区。"
          }
        ]
      },
      {
        id: "au-d2",
        date: "2027-04-29",
        city: "悉尼",
        title: "邦迪走到库吉",
        items: [
          {
            id: "au-d2-bus",
            time: "10:00",
            kind: "transport",
            name: "333 路到邦迪海滩",
            address: "Circular Quay, Elizabeth Street",
            lat: -33.8612,
            lng: 151.2108,
            reservation: "none",
            reservationNote: "公交车，刷卡上车。",
            bookingUrl: "",
            note: "在环形码头附近找 333，车头写 Bondi Beach。坐到终点就是邦迪海滩，大约四十分钟。不要在 Bondi Junction 下车，那儿离海滩还有一段。"
          },
          {
            id: "au-d2-ice",
            time: "12:00",
            kind: "food",
            name: "Icebergs 餐厅",
            address: "1 Notts Avenue, Bondi Beach NSW 2026",
            lat: -33.8949,
            lng: 151.2743,
            reservation: "required",
            reservationNote: "靠海的正餐厅要订位。楼下酒吧可以不订，但没位子。星期四中午开。",
            bookingUrl: "https://www.opentable.com.au/r/icebergs-dining-room-and-bar-bondi-beach",
            note: "在邦迪海滩南端，游泳池上面。窗边位子要在备注里写。订的是午餐，吃完从这儿开始往南走。不订就在海滩上随便吃，然后照样走。"
          },
          {
            id: "au-d2-walk",
            time: "13:30",
            kind: "sight",
            name: "邦迪到库吉海岸步道",
            address: "Bondi to Coogee Walk",
            lat: -33.9005,
            lng: 151.269,
            reservation: "none",
            reservationNote: "公共步道，不用票。",
            bookingUrl: "",
            note: "从 Icebergs 游泳池南边的台阶走上悬崖。跟着海岸走，经过 Tamarama、Bronte、Clovelly，到库吉。大约 6 公里，两小时。看牌子 Coastal Walk，不要走到上面的马路。秋天傍晚五点多天就暗，四点前要走到库吉。"
          },
          {
            id: "au-d2-back",
            time: "16:30",
            kind: "transport",
            name: "从库吉坐公交回城",
            address: "Coogee Beach",
            lat: -33.9208,
            lng: 151.2555,
            reservation: "none",
            reservationNote: "不用订。",
            bookingUrl: "",
            note: "库吉海滩公交站坐往市区的车，车头写 City 或 Museum。回环形码头。"
          },
          {
            id: "au-d2-climb",
            time: "可不去",
            kind: "sight",
            name: "海港大桥攀爬",
            address: "3 Cumberland Street, The Rocks",
            lat: -33.8556,
            lng: 151.209,
            reservation: "recommended",
            reservationNote: "要爬才订，不爬就忽略这一条。黄昏和周末最先满，现场基本没有票。",
            bookingUrl: "https://www.bridgeclimb.com/book",
            note: "全程大约三小时，不能自己带手机，他们发一套衣服。鞋子要穿包住脚面的运动鞋。这天如果海岸步道走完已经累了，就放弃，不要硬排。"
          }
        ]
      },
      {
        id: "au-d3",
        date: "2027-04-30",
        city: "悉尼",
        title: "渡轮去曼利",
        items: [
          {
            id: "au-d3-ferry",
            time: "10:30",
            kind: "transport",
            name: "F1 渡轮到曼利",
            address: "Circular Quay Wharf 3",
            lat: -33.8612,
            lng: 151.2108,
            reservation: "none",
            reservationNote: "刷 Opal 或银行卡，不用提前买。",
            bookingUrl: "",
            note: "环形码头看牌子 F1 Manly，一般在 3 号码头。船大约 30 分钟。坐船头或上层的外侧，进港湾那一段。风大，外套带着。"
          },
          {
            id: "au-d3-manly",
            time: "11:10",
            kind: "sight",
            name: "曼利海滩到 Shelly Beach",
            address: "Manly Beach",
            lat: -33.7972,
            lng: 151.2887,
            reservation: "none",
            reservationNote: "不用票。",
            bookingUrl: "",
            note: "下船穿过 The Corso 商业街就是海滩。再沿右边海岸走大约 1 公里到 Shelly Beach，小湾，人比主滩少。走回去。"
          },
          {
            id: "au-d3-lunch",
            time: "13:00",
            kind: "food",
            name: "曼利 Corso 吃饭",
            address: "The Corso, Manly",
            lat: -33.7982,
            lng: 151.2865,
            reservation: "none",
            reservationNote: "这条街上的馆子大多现场坐。",
            bookingUrl: "",
            note: "不要为了吃饭再坐回市区。吃完可以在海滩再坐一会儿。"
          },
          {
            id: "au-d3-back",
            time: "15:30",
            kind: "transport",
            name: "渡轮回环形码头",
            address: "Manly Wharf",
            lat: -33.8001,
            lng: 151.284,
            reservation: "none",
            reservationNote: "不用订。",
            bookingUrl: "",
            note: "原船回去。晚上在歌剧院脚下的 Opera Bar 现场坐，或者回酒店。今天不再加景点。"
          }
        ]
      },
      {
        id: "au-d4",
        date: "2027-05-01",
        city: "圣灵群岛",
        title: "飞艾尔利海滩",
        items: [
          {
            id: "au-d4-flight",
            time: "早上",
            kind: "transport",
            name: "悉尼飞普罗瑟派恩",
            address: "Whitsunday Coast Airport PPP",
            lat: -20.495,
            lng: 148.552,
            reservation: "required",
            reservationNote: "国内线，肩季也要先锁票。目标是中午前后落地，不要订下午太晚的。",
            bookingUrl: "https://www.google.com/travel/flights?hl=zh-CN&q=One%20way%20flights%20from%20Sydney%20to%20Proserpine%20on%20May%201%202027",
            note: "机场代码 PPP，也叫 Whitsunday Coast。飞行大约两个半小时。汉密尔顿岛机场（HTI）更靠近海岛，但怀特黑文的船大多从艾尔利海滩开，所以飞 PPP。悉尼国内航站楼出发，国际转国内要留足时间，如果行李不能直挂，自己提出来再办托运。"
          },
          {
            id: "au-d4-shuttle",
            time: "落地后",
            kind: "transport",
            name: "机场班车到艾尔利海滩",
            address: "Airlie Beach",
            lat: -20.2676,
            lng: 148.7166,
            reservation: "recommended",
            reservationNote: "班车按航班接，提前订座位更稳。不订就在到达厅找柜台，可能要等下一班。",
            bookingUrl: "https://www.whitsundaytransit.com.au/",
            note: "路程大约 35 到 40 分钟。告诉司机酒店名字。打车也可以，几个人一起分摊更合适。"
          },
          {
            id: "au-d4-stay",
            time: "入住",
            kind: "stay",
            name: "住艾尔利海滩主街或码头",
            address: "Airlie Beach QLD",
            lat: -20.2682,
            lng: 148.7172,
            reservation: "required",
            reservationNote: "只有两晚，但游船客人会把码头附近订满。",
            bookingUrl: "https://www.booking.com/searchresults.html?ss=Airlie+Beach&checkin=2027-05-01&checkout=2027-05-04",
            note: "优先住 Coral Sea Marina 或主街，第二天早上走去码头。不要住到普罗瑟派恩镇上。"
          },
          {
            id: "au-d4-lagoon",
            time: "下午",
            kind: "sight",
            name: "艾尔利泻湖",
            address: "Airlie Beach Lagoon",
            lat: -20.2692,
            lng: 148.7188,
            reservation: "none",
            reservationNote: "免费公共泻湖。",
            bookingUrl: "",
            note: "5月仍算刺胞动物季节，外海游泳要穿防刺服。这个泻湖有防护，适合下水。主街走到海就看见。晚饭在主街吃，肩季大多不用订。"
          }
        ]
      },
      {
        id: "au-d5",
        date: "2027-05-02",
        city: "圣灵群岛",
        title: "怀特黑文和希尔因莱特",
        items: [
          {
            id: "au-d5-raft",
            time: "早上集合",
            kind: "sight",
            name: "Ocean Rafting Northern Exposure",
            address: "Coral Sea Marina, Airlie Beach",
            lat: -20.267,
            lng: 148.7135,
            reservation: "required",
            reservationNote: "这是这趟最该先订的一项。小船名额少。只订「南端白沙滩半天」会看不到希尔因莱特观景台。",
            bookingUrl: "https://www.oceanrafting.com.au/",
            note: "订 Northern Exposure：怀特黑文沙滩、希尔因莱特观景台，加浮潜。集合点以确认邮件为准，常见是 Coral Sea Marina，不要走到另一头的 Port of Airlie。船早上开，这是五天里要早起的一天，具体时间以订单为准，提前半小时到。防刺服船上有。带泳衣、毛巾、一双能上岸的鞋。晕船药在开船前吃。大风他们会改期或换沙滩，看短信。"
          },
          {
            id: "au-d5-sand",
            time: "船上",
            kind: "sight",
            name: "怀特黑文海滩",
            address: "Whitehaven Beach, Whitsunday Island",
            lat: -20.282,
            lng: 149.0375,
            reservation: "none",
            reservationNote: "不能自己去，已经含在船票里。",
            bookingUrl: "",
            note: "岛上没有路，也没有店。沙子细，会粘鞋。不要把沙子带走，公园在管。回程晚饭回艾尔利主街，今天不要再加别的活动。"
          },
          {
            id: "au-d5-hill",
            time: "船上",
            kind: "sight",
            name: "希尔因莱特观景台",
            address: "Hill Inlet Lookout, Whitsunday Island",
            lat: -20.2597,
            lng: 149.0378,
            reservation: "none",
            reservationNote: "含在 Northern Exposure 里。大船如果只停南端沙滩，就上不了这个台。",
            bookingUrl: "",
            note: "看水的颜色要爬一段台阶。穿船方要求的鞋。拍照从观景台往下看海湾，不是站在沙滩上。"
          }
        ]
      },
      {
        id: "au-d6",
        date: "2027-05-03",
        city: "圣灵群岛",
        title: "镇上休息，不要再订一整天的船",
        items: [
          {
            id: "au-d6-town",
            time: "10:30",
            kind: "sight",
            name: "艾尔利主街和码头",
            address: "Airlie Beach Main Street",
            lat: -20.2676,
            lng: 148.7166,
            reservation: "none",
            reservationNote: "不用订。",
            bookingUrl: "",
            note: "睡够再出门。泻湖、主街、码头走一圈。晚饭早点吃，行李收好。第二天要去机场。"
          },
          {
            id: "au-d6-half",
            time: "可不去",
            kind: "sight",
            name: "半天浮潜",
            address: "Airlie Beach",
            lat: -20.267,
            lng: 148.7135,
            reservation: "recommended",
            reservationNote: "只有还想下海才订。订半天，不要再订一整天。",
            bookingUrl: "https://www.oceanrafting.com.au/",
            note: "如果昨天的船因为天气取消，用这一天补。补的话仍然订含希尔因莱特的那条，并且把5月4日的飞机改到下午。"
          }
        ]
      },
      {
        id: "au-d7",
        date: "2027-05-04",
        city: "墨尔本",
        title: "飞到墨尔本，只走城中心",
        items: [
          {
            id: "au-d7-flight",
            time: "早上",
            kind: "transport",
            name: "普罗瑟派恩飞墨尔本",
            address: "Melbourne Airport",
            lat: -37.669,
            lng: 144.841,
            reservation: "required",
            reservationNote: "这条线经常要在布里斯班或悉尼转机，全程可能要五六个小时。先看时刻再订酒店。",
            bookingUrl: "https://www.google.com/travel/flights?hl=zh-CN&q=One%20way%20flights%20from%20Proserpine%20to%20Melbourne%20on%20May%204%202027",
            note: "早上从艾尔利返回 PPP，班车大约 40 分钟，再加安检，按飞机起飞前两小时到机场倒推。落地是墨尔本国内航站楼。"
          },
          {
            id: "au-d7-sky",
            time: "落地后",
            kind: "transport",
            name: "SkyBus 到南十字车站",
            address: "Southern Cross Station, Melbourne",
            lat: -37.8184,
            lng: 144.9525,
            reservation: "none",
            reservationNote: "车上或官网都能买，不用提前锁位。",
            bookingUrl: "https://www.skybus.com.au/",
            note: "墨尔本机场没有火车站。跟随 SkyBus 牌子，在航站楼外上车，终点南十字车站，大约 30 到 40 分钟，堵车会更久。市区交通刷 Myki 卡，机场大巴本身不是 Myki。"
          },
          {
            id: "au-d7-stay",
            time: "入住",
            kind: "stay",
            name: "住弗林德斯街或南十字附近",
            address: "Flinders Street, Melbourne",
            lat: -37.8183,
            lng: 144.9671,
            reservation: "required",
            reservationNote: "只住两晚，城中心方便坐电车。",
            bookingUrl: "https://www.booking.com/searchresults.html?ss=Flinders+Street+Melbourne&checkin=2027-05-04&checkout=2027-05-06",
            note: "如果 5 日晚上的国际航班，6 日清晨再退房也行。住这儿，联邦广场和明天的电车都在走路范围内。"
          },
          {
            id: "au-d7-lane",
            time: "下午",
            kind: "sight",
            name: "联邦广场和 Hosier Lane",
            address: "Hosier Lane, Melbourne",
            lat: -37.8166,
            lng: 144.969,
            reservation: "none",
            reservationNote: "巷子免费。",
            bookingUrl: "",
            note: "南十字走到弗林德斯街火车站，对面是联邦广场。Hosier Lane 在弗林德斯街和弗林德斯巷之间，涂鸦巷，走到头就行，不用逛很久。"
          },
          {
            id: "au-d7-coda",
            time: "晚饭",
            kind: "food",
            name: "Coda",
            address: "141 Flinders Lane, Melbourne VIC 3000",
            lat: -37.8162,
            lng: 144.9704,
            reservation: "recommended",
            reservationNote: "弗林德斯巷的小馆子，晚餐建议订。就在 Hosier Lane 旁边。",
            bookingUrl: "https://www.opentable.com/r/coda-melbourne",
            note: "亚洲口味、分着吃。订 19:00 左右。如果飞机晚点，取消预订，在巷子口随便吃。"
          }
        ]
      },
      {
        id: "au-d8",
        date: "2027-05-05",
        city: "墨尔本",
        title: "美术馆、植物园、圣基尔达",
        items: [
          {
            id: "au-d8-ngv",
            time: "10:30",
            kind: "sight",
            name: "维多利亚国家美术馆",
            address: "180 St Kilda Road, Melbourne",
            lat: -37.8226,
            lng: 144.9689,
            reservation: "none",
            reservationNote: "常设展免费，直接进。特展才要票。",
            bookingUrl: "https://www.ngv.vic.gov.au/whats-on/",
            note: "从弗林德斯街沿圣基尔达路往南坐电车，有 Arts Precinct 或 NGV 字样的站下。看常设就行。想看特展再点上面的链接，有票再订，没有就进免费展厅。"
          },
          {
            id: "au-d8-garden",
            time: "12:30",
            kind: "sight",
            name: "皇家植物园",
            address: "Birdwood Avenue, South Yarra",
            lat: -37.83,
            lng: 144.9796,
            reservation: "none",
            reservationNote: "免费。",
            bookingUrl: "",
            note: "美术馆旁边就是植物园，从圣基尔达路的门进去。走观赏湖一圈，大约一小时。午饭在园里或美术馆咖啡，不用订。墨尔本这天可能刮风下雨，外套带着。"
          },
          {
            id: "au-d8-stkilda",
            time: "14:30",
            kind: "sight",
            name: "圣基尔达海滩和 Acland 街",
            address: "St Kilda Beach",
            lat: -37.8678,
            lng: 144.974,
            reservation: "none",
            reservationNote: "电车和海滩都不用订。",
            bookingUrl: "",
            note: "坐 16 路电车往圣基尔达，到 Luna Park 那一站。海滩看一眼，Acland 街买一块蛋糕。如果国际航班在下午，这里取消，从植物园回南十字坐 SkyBus，国际航班起飞前三小时到机场。"
          },
          {
            id: "au-d8-air",
            time: "回程",
            kind: "transport",
            name: "南十字坐 SkyBus 去机场",
            address: "Southern Cross Station",
            lat: -37.8184,
            lng: 144.9525,
            reservation: "none",
            reservationNote: "当天买票即可。",
            bookingUrl: "https://www.skybus.com.au/",
            note: "车站里跟着 SkyBus 牌子走。国际航班留三小时。大巴大约 30 到 40 分钟，傍晚可能堵。"
          }
        ]
      }
    ]
  }
];
