ChromeSnifferPlus
=================

ChromeSnifferPlus： Chrome 探测器，可以探测正在使用的开源软件或者 js 类库，开发者必备。

### 安装

- [Chrome Web Store](https://chrome.google.com/webstore/detail/chrome-sniffer-plus/fhhdlnnepfjhlhilgmeepgkhjmhhhjkh)

如果你使用的是 Chrome 内核的国产浏览器，可以直接下载已经打包好的 [crx 文件](https://github.com/justjavac/ChromeSnifferPlus/releases) 进行安装。 

### 介绍

本插件是一个扩展版的 Appspector（原名 ChromeSniffer）。
从名字也可以看出来，由于原作者一直没有更新，于是我在原有基础上增加了一些最近新流行的库，尤其是增加了对于国内库以及框架的支持。

现在正在对整个插件的代码进行重构，本来打算重新改名，重新架构，以区别于 ChromeSniffer。
鉴于 ChromeSniffer 已经改名为 Appspector，于是本插件就依然叫 ChromeSnifferPlus。

### 功能

通过本插件，您可以探测：

- javascript 库： jQuery、ExtJS、Angular 等。
- 常用的 web 服务： 百度统计、cnzz、Google Analytics 等。
- Web 框架： WordPress、phpBB、Drupal、MediaWiki 等。
- 服务器环境： PHP、Apache、nginx 等。

当你安装此插件去浏览网页时，还可以发现更多你未知的框架和库。

如果你发现了还不能探测的类库，可以[创建 issues](https://github.com/justjavac/ChromeSnifferPlus/issues)。

查看：[更新日志](./changelog.md)

### 隐私

ChromeSnifferPlus 会收集用户的 IP 地址，插件版本信息，探测的网站 url 以及探测到的库。

下一个大版本会增加查询功能，以及所有库的走势图。由于现在没有选择好域名，暂时使用 http://jjc.link

### 截图

![ChromeSnifferPlus效果截图](./screenshot/shot1.png) &nbsp;&nbsp;&nbsp;&nbsp;
![ChromeSnifferPlus效果截图](./screenshot/shot2.png) &nbsp;&nbsp;&nbsp;&nbsp;
![ChromeSnifferPlus效果截图](./screenshot/shot3.png) &nbsp;&nbsp;&nbsp;&nbsp;
![ChromeSnifferPlus效果截图](./screenshot/shot4.png) 

### 作者

 - [justjavac](https://github.com/justjavac)

### 版权

ChromeSnifferPlus 基于 GPL 版权发布。详细信息可以查看 [LICENSE](./LICENSE) 文件。
