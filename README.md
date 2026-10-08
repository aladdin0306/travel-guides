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

`covers/` 里的照片来自维基共享资源，按各自的许可使用，不在 MIT 范围内：

- `sydney.jpg`：[Benh LIEU SONG](https://commons.wikimedia.org/wiki/File:Sydney_Opera_House_and_Harbour_Bridge_Dusk_(2)_2019-06-21.jpg)，CC BY-SA 4.0
- `whitsundays.jpg`：[Isderion](https://commons.wikimedia.org/wiki/File:Hill_Inlet_at_the_end_of_Whitehaven_Beach_in_the_Whitsundays.JPG)，CC BY-SA 3.0 DE
- `melbourne.jpg`：[Donaldytong](https://commons.wikimedia.org/wiki/File:Melbourne_Yarra_River.jpg)，CC BY-SA 3.0

三张都缩小和压缩过。
