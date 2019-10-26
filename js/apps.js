/**
 * Chrome AppSniffer
 *
 * Web Application definition
 *
 * @author justjavac <justjavac@gmail.com>
 * @license GPLv3
 **/

var appinfo = {
    // ==== zh-cn ====
    '\u767e\u5ea6\u7edf\u8ba1': {
        icon: 'bdtongji.ico',
        url: 'http://tongji.baidu.com',
        priority: 3
    },
    'cnzz': {
        icon: 'cnzz.ico',
        url: 'http://www.cnzz.com',
        priority: 3
    },
    'bShare': {
        icon: 'bshare.ico',
        url: 'http://www.bshare.cn',
        priority: 2.9
    },
    '\u767e\u5ea6\u5206\u4eab': {
        icon: 'baidushare.ico',
        url: 'http://share.baidu.com',
        priority: 2.9
    },
    '\u591a\u8bf4': {
        icon: 'duoshuo.ico',
        url: 'http://www.duoshuo.com',
        priority: 2.9
    },
    '\u53cb\u8350': {
        icon: 'ujian.ico',
        url: 'http://www.ujian.cc',
        priority: 2.9
    },
    '\u53cb\u8a00': {
        icon: 'uyan.ico',
        url: 'http://www.uyan.cc',
        priority: 2.9
    },
    'JiaThis': {
        icon: 'jiathis.ico',
        url: 'http://www.jiathis.com',
        priority: 2.9
    },
    '\u65e0\u89c5': {
        icon: 'wumii.ico',
        url: 'http://www.wumii.com/widget/getWidget',
        priority: 2.9
    },
    'segmentfault': {
        icon: 'segmentfault.ico',
        url: 'http://segmentfault.com',
        priority: 2.9
    },
    '\u4e03\u725b\u4e91\u5b58\u50a8\u52a0\u901f': {
        icon: 'qiniu.png',
        url: 'http://www.qiniu.com',
        priority: 0.9
    },

    // ==== services ====
    'Tumblr': {
        icon: 'Tumblr.ico',
        url: 'http://tumblr.com',
        priority: 0.9
    },
    'TypePad': {
        icon: 'TypePad.ico',
        url: 'http://typepad.com',
        priority: 0.9
    },
    'Blogger': {
        icon: 'Blogger.ico',
        url: 'http://blogger.com',
        priority: 0.9
    },

    'Webs': {
        icon: 'webs.ico',
        url: 'http://www.webs.com/',
        priority: 0.9
    },
    'Weebly': {
        icon: 'weebly.ico',
        url: 'http://www.weebly.com/',
        priority: 0.9
    },
    'Webnode': {
        icon: 'webnode.ico',
        url: 'http://www.webnode.com/',
        priority: 0.9
    },
    'Jimdo': {
        icon: 'jimdo.ico',
        url: 'http://www.jimdo.com',
        priority: 0.9
    },
    'Jigsy': {
        icon: 'jigsy.ico',
        url: 'http://jigsy.com',
        priority: 0.9
    },
    'Yola': {
        icon: 'yola.ico',
        url: 'http://www.yola.com/',
        priority: 0.9
    },

    // ==== cms or framework ====
    'CodeIgniter': {
        icon: 'codeigniter.ico',
        url: 'http://codeigniter.com',
        priority: 1
    },

    'vBulletin': {
        icon: 'vBulletin.ico',
        url: 'http://www.vbulletin.com/',
        priority: 1
    },
    'SMF': {
        title: 'Simple Machines Forum',
        icon: 'SMF.ico',
        url: 'http://www.simplemachines.org/',
        priority: 1
    },
    'phpBB': {
        icon: 'phpBB.ico',
        url: 'http://www.phpbb.com',
        priority: 1
    },
    'Flarum': {
        icon: 'flarum.png',
        url: 'http://flarum.org',
        priority: 1
    },
    'IPB': {
        title: 'Invision Power Board',
        icon: 'IPB.ico',
        url: 'http://invisionpower.com/',
        priority: 1
    },
    'miniBB': {
        icon: 'miniBB.ico',
        url: 'http://www.minibb.com/',
        priority: 1
    },
    'MyBB': {
        icon: 'mybb.ico',
        url: 'http://www.mybb.com/',
        priority: 1
    },
    'XenForo': {
        icon: 'xenforo.ico',
        url: 'http://xenforo.com',
        priority: 1
    },

    'Drupal': {
        icon: 'Drupal.ico',
        url: 'https://www.drupal.org/',
        priority: 1
    },
    'Drupal8': {
        title: 'Drupal',
        icon: 'Drupal8.ico',
        url: 'https://www.drupal.org/8',
        priority: 0.9 // higher priority compared with Drupal
    },
    'Ubercart': {
        icon: 'Ubercart.ico',
        url: 'http://www.ubercart.org/',
        priority: 0.9 // higher priority compared with Drupal
    },

    'AlphaCMS': {
        icon: 'alphacms.ico',
        url: 'http://www.mego.com.vn',
        priority: 1
    },
    'TomatoCMS': {
        icon: 'tomatocms.ico',
        url: 'http://www.tomatocms.com/',
        priority: 1
    },

    'WordPress': {
        icon: 'WordPress.ico',
        url: 'http://wordpress.org',
        priority: 1
    },
    'WPML': {
        icon: 'WPML.ico',
        url: 'http://wpml.org/',
        priority: 1.1
    },

    'bbPress': {
        icon: 'bbPress.ico',
        url: 'http://bbpress.org',
        priority: 1
    },
    'Movable Type': {
        icon: 'MovableType.ico',
        url: 'http://www.movabletype.org/',
        priority: 1
    },
    'Serendipity': {
        icon: 'Serendipity.png',
        url: 'http://www.s9y.org/',
        priority: 1
    },
    'concrete5': {
        icon: 'concrete5.gif',
        url: 'http://www.concrete5.org',
        priority: 1
    },

    'MediaWiki': {
        icon: 'MediaWiki.ico',
        url: 'http://www.mediawiki.org/',
        priority: 1
    },
    'DokuWiki': {
        icon: 'DokuWiki.ico',
        url: 'http://www.dokuwiki.org/',
        priority: 1
    },

    'OpenACS': {
        icon: 'openacs.ico',
        url: 'http://openacs.org',
        priority: 1
    },

    'Pusher': {
        icon: 'pusher.ico',
        url: 'https://pusher.com',
        priority: 1
    },

    'Joomla': {
        icon: 'Joomla.ico',
        url: 'http://joomla.org',
        priority: 1
    },
    'Magento': {
        icon: 'Magento.ico',
        url: 'http://www.magentocommerce.com/',
        priority: 1
    },
    'XOOPS': {
        icon: 'XOOPS.ico',
        url: 'http://xoops.org',
        priority: 1
    },
    'Plone': {
        icon: 'Plone.ico',
        url: 'http://plone.org/',
        priority: 1
    },
    'CMSMadeSimple': {
        title: 'CMS Made Simple',
        icon: 'CMSMadeSimple.ico',
        url: 'http://www.cmsmadesimple.org/',
        priority: 1
    },
    'SilverStripe': {
        icon: 'SilverStripe.png',
        url: 'http://silverstripe.org',
        priority: 1
    },
    'MODx': {
        icon: 'MODx.ico',
        url: 'http://modxcms.com/',
        priority: 1
    },
    'Amiro.CMS': {
        icon: 'Amiro.CMS.ico',
        url: 'http://www.amirocms.com/',
        priority: 1
    },
    'JaliosJCMS': {
        icon: 'JaliosJCMS.ico',
        url: 'http://www.jalios.com',
        priority: 1,
        title: 'Jalios JCMS'
    },
    'Koobi': {
        icon: 'Koobi.ico',
        url: 'http://www.dream4.de/cms/',
        priority: 1
    },
    'Liferay': {
        icon: 'LifeRay.ico',
        url: 'http://www.liferay.com',
        priority: 1
    },
    'TYPO3': {
        icon: 'TYPO3.ico',
        url: 'http://typo3.org/',
        priority: 1
    },
    'Contao': {
        icon: 'contao.ico',
        url: 'http://www.contao.org',
        priority: 1
    },
    'Fatwire': {
        icon: 'Fatwire.ico',
        url: 'http://www.fatwire.com',
        priority: 1
    },
    'PHP-Fusion': {
        icon: 'PHP-Fusion.ico',
        url: 'http://php-fusion.co.uk/',
        priority: 1
    },
    'PHP-Nuke': {
        icon: 'PHP-Nuke.ico',
        url: 'http://phpnuke.org/',
        priority: 1
    },
    'WebGUI': {
        icon: 'WebGUI.ico',
        url: 'http://www.webgui.org/',
        priority: 1
    },
    'ez Publish': {
        icon: 'eZ.ico',
        url: 'http://ez.no/',
        priority: 1
    },
    'BIGACE': {
        icon: 'BIGACE.ico',
        url: 'http://www.bigace.de/',
        priority: 1
    },
    'OpenCMS': {
        icon: 'opencms.ico',
        url: 'http://www.opencms.org/',
        priority: 1
    },
    '1c-bitrix': {
        icon: '1c-bitrix.ico',
        url: 'http://www.1c-bitrix.ru/',
        priority: 1
    },
    'MojoMotor': {
        icon: 'mojomotor.ico',
        url: '	http://mojomotor.com',
        priority: 1
    },
    'GetSimple': {
        icon: 'getsimple.png',
        url: '	http://get-simple.info/',
        priority: 1
    },
    'Perch': { // not yet supported
        icon: 'perch.ico',
        url: 'http://grabaperch.com/',
        priority: 1
    },
    'DataLifeEngine': {
        title: 'DataLife Engine',
        icon: 'datalife.ico',
        url: 'http://dle-news.ru/',
        priority: 1
    },

    'Elgg': {
        icon: 'Elgg.ico',
        url: 'http://www.elgg.org/',
        priority: 1
    },

    'DotNetNuke': {
        icon: 'DotNetNuke.ico',
        url: 'http://www.dotnetnuke.com/',
        priority: 1
    },
    'Sitefinity': {
        icon: 'Sitefinity.ico',
        url: 'http://www.sitefinity.com/',
        priority: 1
    },
    'SharePoint': {
        icon: 'SharePoint.png',
        url: 'http://sharepoint.microsoft.com',
        priority: 1,
        title: 'Microsoft SharePoint'
    },

    'ZenPhoto': {
        icon: 'ZenPhoto.ico',
        url: 'http://www.zenphoto.org',
        priority: 1
    },
    'Gallery2': {
        icon: 'Gallery2.ico',
        url: 'http://gallery.menalto.com/',
        priority: 1
    },

    'Avactis': {
        icon: 'avactis.ico',
        url: 'http://www.avactis.com',
        priority: 1
    },
    'PrestaShop': {
        icon: 'PrestaShop.ico',
        url: 'http://www.prestashop.com/',
        priority: 1
    },
    'Prostores': {
        icon: 'prostores.ico',
        url: 'http://www.prostores.com',
        priority: 1
    },
    'ZenCart': {
        icon: 'zencart.ico',
        url: 'http://www.zen-cart.com',
        priority: 1
    },
    'ErainCart': {
        icon: 'eraincart.ico',
        url: 'http://eraincart.com',
        priority: 1
    },
    'Volusion': {
        icon: 'volusion.ico',
        url: 'http://www.volusion.com',
        priority: 1
    },
    'osCommerce': {
        icon: 'osCommerce.ico',
        url: 'http://www.oscommerce.com',
        priority: 1
    },
    'OpenCart': {
        icon: 'opencart.png',
        url: 'http://www.opencart.com',
        priority: 1
    },

    'Moodle': {
        icon: 'moodle.png',
        url: 'http://moodle.org',
        priority: 1
    },
    'SugarCRM': {
        icon: 'sugarcrm.ico',
        url: 'http://www.sugarcrm.com',
        priority: 1
    },
    'PivotX': {
        icon: 'pivotx.ico',
        url: 'http://pivotx.net',
        priority: 1
    },

    'Shibboleth': {
        icon: 'shibboleth.png',
        url: 'http://shibboleth.internet2.edu/',
        priority: 1
    },
    'Alfresco': {
        icon: 'Alfresco.png',
        url: 'http://www.alfresco.com',
        priority: 1
    },

    'ClanSphere': {
        icon: 'ClanSphere.png',
        url: 'http://csphere.eu',
        priority: 1
    },

    // ==== js framework ====
    'KindEditor':{
        icon: 'kindeditor.ico',
        url: 'http://kindeditor.net',
        priority: 2
    },
    'Highcharts': {
        icon: 'highcharts.png',
        url: 'http://www.highcharts.com',
        priority: 2
    },
    'Zepto.js': {
        icon: 'zepto.png',
        url: 'http://zeptojs.com',
        priority: 2
    },
    'jQuery': {
        icon: 'jQuery.ico',
        url: 'http://jquery.com',
        priority: 2
    },
    'jQuery UI': {
        icon: 'jQuery_UI.ico',
        url: 'http://jqueryui.com/',
        priority: 1.9
    },
    'ExtJS': {
        icon: 'ExtJS.ico',
        url: 'http://www.extjs.com/',
        priority: 2
    },
    'Prototype': {
        icon: 'Prototype.ico',
        url: 'http://www.prototypejs.org/',
        priority: 2
    },
    'Closure': {
        icon: 'Closure.png',
        url: 'http://code.google.com/closure/',
        priority: 2
    },
    'MooTools': {
        icon: 'MooTools.ico',
        url: 'http://mootools.net/',
        priority: 2
    },
    'Dojo': {
        icon: 'dojo.ico',
        url: 'http://www.dojotoolkit.org/',
        priority: 2
    },
    'script.aculo.us': {
        icon: 'script.aculo.us.ico',
        url: 'http://script.aculo.us/',
        priority: 1.9
    },
    'YUI': {
        icon: 'YUI.ico',
        url: 'http://developer.yahoo.com/yui/2/',
        priority: 2
    },
    'YUI 3': {
        icon: 'yui3.png',
        url: 'http://yuilibrary.com',
        priority: 2
    },
    "ColorThief": {
        url: "https://github.com/lokesh/color-thief",
        priority: 2
    },
    "jQuery.hotkeys": {
        "url": "https://github.com/jeresig/jquery.hotkeys",
        "priority": 1.9
    },
    "spin.js": {
        "icon": "spin.js.ico",
        "url": "http://spin.js.org/",
        "priority": 2
    },
    "babel":{
        "icon": "babeljs.ico",
        "url": "https://babeljs.io",
        "priority": 2
    },
    "FastClick":{
        "url": "https://github.com/ftlabs/fastclick",
        "priority": 2
    },
    "twemoji":{
        "url": "https://github.com/twitter/twemoji",
        "priority": 2
    },
    "Mithril":{
        "icon": "mithril.png",
        "url": "http://mithril.js.org",
        "priority": 2
    },
    "s9e.TextFormatter":{
        "url": "https://github.com/s9e/TextFormatter",
        "priority": 2
    },
    'Cappuccino': {
        icon: 'cappuccino.png',
        url: 'http://cappuccino.org/',
        priority: 2
    },
    'RightJS': {
        icon: 'rightjs.png',
        url: 'http://RightJS.org/',
        priority: 2
    },
    'Spine': {
        icon: 'spine.ico',
        url: 'http://spinejs.com',
        priority: 1.9
    },
    'AngularJs': {
        icon: 'angular.ico',
        url: 'http://angularjs.org/',
        priority: 1.5
    },
    'Angular': {
        icon: 'angular.ico',
        url: 'http://angular.io/',
        priority: 1.5
    },
    'Ionic': {
        icon: 'ionic.ico',
        url: 'http://ionicframework.com/',
        priority: 1.5
    },
    'Elm': {
        icon: 'elm.ico',
        url: 'http://elm-lang.org/',
        priority: 1.5
    },
    'D3': {
        icon: 'D3.svg',
        url: 'http://d3js.org/',
        priority: 2
    },
    'moment': {
        icon: 'moment.png',
        url: 'http://momentjs.com/',
        priority: 2
    },

    // ==== js tools ====
    'Raphael': {
        icon: 'raphael.ico',
        url: 'http://raphaeljs.com/',
        priority: 2.9
    },
    'Typekit': {
        icon: 'typekit.ico',
        url: 'http://typekit.com/',
        priority: 2.9
    },
    'Cufon': {
        icon: 'cufon.ico',
        url: 'http://cufon.shoqolate.com/',
        priority: 2.9
    },
    'sIFR': {
        icon: 'sifr.gif',
        url: 'http://www.mikeindustries.com/blog/sifr/',
        priority: 2.9
    },
    'Modernizr': {
        icon: 'modernizr.ico',
        url: 'http://www.modernizr.com/',
        priority: 2.9
    },
    'Facebook': {
        title: 'Facebook Social plugins',
        icon: 'facebook.ico',
        url: 'http://developers.facebook.com/',
        priority: 2.9
    },
    'Twitter': {
        title: 'Twitter plugins',
        icon: 'twitter.ico',
        url: 'http://dev.twitter.com',
        priority: 2.9
    },
    'Buzz': {
        title: 'Google Buzz Button',
        icon: 'buzz.png',
        url: 'http://www.google.com/buzz/stuff',
        priority: 2.9
    },
    'Plus1': {
        title: 'Google Plus 1',
        icon: 'plus1.png',
        url: 'http://www.google.com/+1/button/',
        priority: 2.9
    },
    'AddThis': {
        icon: 'addthis.ico',
        url: 'http://www.addthis.com',
        priority: 2.9
    },
    'Backbone.js': {
        icon: 'backbonejs.ico',
        url: 'http://backbonejs.org',
        priority: 1.9
    },
    'Underscore.js': {
        icon: 'underscorejs.ico',
        url: 'http://underscorejs.org/',
        priority: 2.9
    },

    'Head JS': {
        icon: 'headjs.gif',
        url: 'http://headjs.com',
        priority: 2.9
    },
    'Google Loader': {
        icon: 'google.ico',
        url: 'https://developers.google.com/loader/',
        priority: 2.9
    },

    'Woopra': {
        icon: 'woopra.ico',
        url: 'http://www.woopra.com',
        priority: 3
    },
    'OpenWebAnalytics': {
        icon: 'owa.ico',
        url: 'http://www.openwebanalytics.com',
        priority: 3
    },
    'Google Analytics': {
        icon: 'Google_Analytics.ico',
        url: 'https://www.google.com/analytics/?hl=zh-CN',
        priority: 3
    },
    'SiteCatalyst': {
        icon: 'SiteCatalyst.ico',
        url: 'http://www.omniture.com',
        priority: 3
    },
    'Coremetrics': {
        icon: 'coremetrics.ico',
        url: 'http://www.coremetrics.com',
        priority: 3
    },
    'Quantcast': {
        icon: 'Quantcast.ico',
        url: 'http://www.quantcast.com/',
        priority: 3
    },
    'Xiti': {
        title: 'Xiti Tracker',
        icon: 'xiti.ico',
        url: 'http://xiti.com/',
        priority: 3
    },
    'Piwik': {
        icon: 'Piwik.ico',
        url: 'http://piwik.org/',
        priority: 3
    },
    'Clicky': {
        icon: 'clicky.ico',
        url: 'http://getclicky.com/',
        priority: 3
    },

    'Disqus': {
        icon: 'Disqus.ico',
        url: 'http://disqus.com/',
        priority: 1
    },
    'GetSatisfaction': {
        icon: 'GetSatisfaction.gif',
        url: 'http://getsatisfaction.com',
        priority: 3
    },
    'Wibiya': {
        icon: 'Wibiya.ico',
        url: 'http://wibiya.com/',
        priority: 3
    },
    'Prettify': {
        title: 'Google Code Prettify',
        icon: 'google.ico',
        url: 'http://code.google.com/p/google-code-prettify/',
        priority: 3
    },
    'reCaptcha': {
        icon: 'reCaptcha.ico',
        url: 'http://recaptcha.net/',
        priority: 4
    },
    'Mollom': {
        icon: 'mollom.ico',
        url: 'http://mollom.com',
        priority: 4
    },
    'GoogleFontApi': {
        title: 'Google Font API',
        icon: 'google-font-api.gif',
        url: 'http://code.google.com/apis/webfonts/',
        priority: 4
    },
    'GoogleMapApi': {
        title: 'Google Map API',
        icon: 'gmap.png',
        url: 'http://code.google.com/apis/maps/',
        priority: 4
    },
    'SWFObject': {
        icon: 'SWFObject.ico',
        url: 'http://code.google.com/p/swfobject/',
        priority: 4
    },

    'OpenX': {
        icon: 'OpenX.ico',
        url: 'http://openx.org',
        priority: 5
    },
    'AdSense': {
        icon: 'AdSense.gif',
        url: 'https://www.google.com/adsense',
        priority: 5
    },
    'Chitika': {
        icon: 'chitika.ico',
        url: 'http://chitika.com/',
        priority: 5
    },
    'BuySellAds': {
        icon: 'buysellads.ico',
        url: 'http://buysellads.com/',
        priority: 5
    },
    'HumansTxt': {
        icon: 'humanstxt.ico',
        url: 'http://humanstxt.org/',
        priority: 5
    },
    'Bootstrap': {
        icon: 'bootstrap.ico',
        url: 'http://getbootstrap.com',
        priority: 5
    },
    'Ning': {
        icon: 'ning.ico',
        url: 'http://www.ning.com/',
        priority: 1
    },
    'ektron': {
        icon: 'ektron.ico',
        url: 'http://www.ektron.com/',
        priority: 1
    },
    'Mura CMS': {
        title: 'Mura CMS',
        icon: 'muracms.ico',
        url: 'http://www.getmura.com/',
        priority: 1
    },
    'Tiki Wiki CMS Groupware': {
        title: 'Tiki Wiki CMS Groupware',
        icon: 'TikiWikiCms.ico',
        url: 'http://info.tiki.org/',
        priority: 1
    },
    'etracker': {
        title: 'etracker',
        icon: 'etracker.ico',
        url: 'http://etracker.com/',
        priority: 1.2
    },
    'OpenTag': {
        icon: 'OpenTag.ico',
        url: 'http://opentag.qubitproducts.com',
        priority: 1.2
    },
    'SPDY': {
        icon: 'spdy.ico',
        url: 'http://www.chromium.org/spdy',
        priority: 5
    },
    'KISSmetrics': {
        icon: 'kissmetrics.ico',
        url: 'http://kissmetrics.com/',
        priority: 1
    },
    'LiveStreet': {
        icon: 'LiveStreetCms.ico',
        url: 'http://livestreetcms.com/',
        priority: 1
    },
    'PHP': {
        icon: 'php.ico',
        url: 'http://php.net/',
        priority: 1.5
    },
    'Java': {
        icon: 'java.ico',
        url: 'http://www.java.com',
        priority: 1.5
    },
    'Tengine': {
        icon: 'tengine.ico',
        url: 'http://tengine.taobao.org',
        priority: 1.5
    },
    'Apache': {
        icon: 'apache.ico',
        url: 'http://httpd.apache.org/',
        priority: 1.5
    },
    'Tomcat': {
        icon: 'tomcat.ico',
        url: 'http://tomcat.apache.org/',
        priority: 1.5
    },
    'Domino': {
        icon: 'domino.ico',
        url: 'http://www.ibm.com/software/lotus/products/domino/',
        priority: 1.5
    },
    'Play': {
        icon: 'play.ico',
        url: 'https://www.playframework.com/',
        priority: 1
    },
    'nginx': {
        icon: 'nginx.ico',
        url: 'http://nginx.org/en/',
        priority: 1.5
    },
    'GitHub': {
        icon: 'github.ico',
        url: 'https://github.com',
        priority: 1.5
    },
    'Varnish': {
        icon: 'varnish.ico',
        url: 'https://www.varnish-cache.org/',
        priority: 1.5
    },
    'IIS': {
        icon: 'iis.ico',
        url: 'http://www.iis.net/',
        priority: 1.5
    },
    'ASP.NET': {
        icon: 'asp.net.ico',
        url: 'http://www.asp.net/',
        priority: 1.5
    },
    'Nette': {
        icon: 'nette.ico',
        url: 'http://nette.org/',
        priority: 1.5
    },
    'Font Awesome': {
        icon: 'font-awesome.ico',
        url: 'https://fortawesome.github.io/Font-Awesome/',
        priority: 5
    },
    'polymer': {
        icon: 'polymer.ico',
        url: 'https://github.com/Polymer/polymer',
        priority: 2
    },
    'Vue': {
        icon: 'Vue.ico',
        url: 'http://vuejs.org/',
        priority: 2
    },
    'RxJs': {
        icon: 'RxJs.ico',
        url: 'https://github.com/Reactive-Extensions/RxJS',
        priority: 2
    },
    'Lo-dash': {
        icon: 'Lo-dash.ico',
        url: 'https://lodash.com/',
        priority: 3
    },
    'Webpack': {
        icon: 'Webpack.ico',
        url: 'https://github.com/webpack/webpack',
        priority: 3
    },
    'Django': {
        icon: 'django.ico',
        url: 'https://www.djangoproject.com/',
        priority: 1
    },
    'React': {
        icon: 'React.ico',
        url: 'https://facebook.github.io/react/',
        priority: 3
    },
    'AMP': {
        icon: 'AMP.png',
        url: 'https://ampproject.org',
        priority: 3
    },
    'Ember': {
        icon: 'ember.png',
        url: 'https://emberjs.com/',
        priority: 3
    },
    'flowchart': {
        icon: 'flowchart.png',
        url: 'https://github.com/adrai/flowchart.js'
    },
    'katex': {
        icon: 'katex.png',
        url: 'https://github.com/adrai/flowchart.js'
    },
    'editor.md': {
        icon: 'editormd.png',
        url: 'https://pandao.github.io/editor.md/'
    },
    'highlight.js': {
        icon: 'hljs.png',
        url: 'https://github.com/highlightjs/highlight.js'
    },
    'sequence-diagrams': {
        icon: 'sequence-diagrams.png',
        url: 'https://bramp.github.io/js-sequence-diagrams/'
    },
    'ace': {
        icon: 'ace.png',
        url: 'https://github.com/ajaxorg/ace'
    },
    'WebFont': {
        icon: 'google_fonts_lodp.ico',
        url: 'https://github.com/typekit/webfontloader'
    },
    'WebSocket': {
        icon: 'websockets.png',
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSocket'
    },
    'Prism': {
        icon: 'Prism.svg',
        url: 'https://prismjs.com/'
    },
    'Mousetrap': {
        icon: 'mousetrap.png',
        url: 'https://craig.is/killing/mice'
    },
    'Raven': {
        icon: 'sentry.io',
        url: 'https://docs.sentry.io/platforms/javascript/'
    },
    'qrcode.js': {
        icon: 'qrcode.png',
        url: 'https://github.com/jeromeetienne/jquery-qrcode'
    },
    'AliyunOSS': {
        icon: 'aliyun.png',
        url: 'https://www.alibabacloud.com/product/oss',
    },
    'emoji': {
        icon: 'emoji.png',
    },
    'cloudflare': {
        icon: 'cloudflare.ico',
        url: 'https://www.cloudflare.com/',
    },
    // ==== misc ====
    '': { // default
        icon: 'unknown.jpg',
        url: 'http://google.com/search?q=%s'
    }
};
