# 行程库

一个打开就能用的旅行攻略网页。行程存在浏览器里，地点会标在地图上。必须提前订的项目单独列出来，点一下跳到预约页面。

## 使用

用浏览器打开 `index.html`，或在这个目录执行：

```bash
python3 -m http.server 8766
```

然后访问 http://127.0.0.1:8766/

第一趟示例是 2027 年 4 月 28 日到 5 月 5 日的澳洲行程：悉尼、圣灵群岛、墨尔本。

改动只存在这台浏览器。换电脑或发给别人时，用页面右上角的「导出」。别人可以「导入」这份 JSON。

## 许可

代码是 MIT，见 [LICENSE](LICENSE)。图标来自 [Lucide](https://lucide.dev)（ISC）。

`photos/` 里的景点照片来自维基共享资源，按各自的许可使用，不在 MIT 范围内。都缩小和压缩过：

- 悉尼歌剧院（`photos/au-d1-opera.jpg`）：[Bernard Spragg · CC0](https://commons.wikimedia.org/wiki/File:Sydney_Australia._(21339175489).jpg)
- 歌剧院音乐厅（`photos/au-d1-tour.jpg`）：[Nick-D · CC BY-SA 3.0](https://commons.wikimedia.org/wiki/File:Sydney_Opera_House_concert_hall_October_2018.jpg)
- 沃森斯湾（`photos/au-d2-gap.jpg`）：[Dietmar Rabich · CC BY-SA 4.0](https://commons.wikimedia.org/wiki/File:Sydney_(AU),_Watsons_Bay_--_2019_--_2295.jpg)
- Shelly Beach（`photos/au-d3-manly.jpg`）：[J Bar · CC BY-SA 3.0](https://commons.wikimedia.org/wiki/File:Shelly_Beach_Manly.JPG)
- 北角观景台（`photos/au-d3-northhead.jpg`）：[ColonelLight · CC0](https://commons.wikimedia.org/wiki/File:Burragula_Lookout_North_Head_02.jpg)
- 艾尔利泻湖（`photos/au-d4-lagoon.jpg`）：[Niki Gango · CC BY-SA 3.0](https://commons.wikimedia.org/wiki/File:Airlie_Beach_Lagoon.JPG)
- 怀特黑文海滩（`photos/au-d5-sand.jpg`）：[Slug69 · CC BY-SA 2.0](https://commons.wikimedia.org/wiki/File:Whitehaven_Beach,_Whitsunday_Island,_Queensland.jpg)
- 希尔因莱特（`photos/au-d5-hill.jpg`）：[Isderion · CC BY-SA 3.0 DE](https://commons.wikimedia.org/wiki/File:Hill_Inlet_at_the_end_of_Whitehaven_Beach_in_the_Whitsundays.JPG)
- 艾尔利海滩（`photos/au-d6-town.jpg`）：[Richard N Horne · CC BY 4.0](https://commons.wikimedia.org/wiki/File:Airlie_Beach_is_a_departure_point_for_the_Great_Barrier_Reef.jpg)
- 墨尔本小巷（`photos/au-d7-lanes.jpg`）：[Ashton 29 · CC BY-SA 4.0](https://commons.wikimedia.org/wiki/File:Melbourne_laneway.jpg)
- 皇家展览馆（`photos/au-d8-reb.jpg`）：[Diliff, Ian Fieggen · CC BY 2.5](https://commons.wikimedia.org/wiki/File:Royal_exhibition_building_tulips_straight.jpg)
- Gertrude Street（`photos/au-d8-fitzroy.jpg`）：[Nick-D · CC BY-SA 4.0](https://commons.wikimedia.org/wiki/File:Buildings_on_Gertrude_Street_December_2020.jpg)
- Abbotsford Convent（`photos/au-d8-convent.jpg`）：[Redtree21 · CC BY-SA 4.0](https://commons.wikimedia.org/wiki/File:Abbotsford_Convent_Looking_North.jpg)
- 维多利亚国家美术馆（`photos/au-d8-ngv.jpg`）：[Shkuru Afshar · CC BY-SA 4.0](https://commons.wikimedia.org/wiki/File:National_Gallery_of_Victoria_2024.jpg)
