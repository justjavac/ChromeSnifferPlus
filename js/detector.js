/**
 * Chrome AppSniffer
 *
 * Detect apps run on current page and send back to background page.
 * Some part of this script was refered from Wappalyzer Firefox Addon.
 *
 * @author Bao Nguyen <contact@nqbao.com>
 * @author justjavac <justjavac@gmail.com>
 * @license GPLv3
 **/

(function() {
    var _apps = {};
    var doc = document.documentElement;
    var name;
    var r;

    // 1: detect by meta tags, the first matching group will be version
    // 根据 meta 信息判断
    var metas = doc.getElementsByTagName("meta");
    var meta_tests = {
        'generator': {
            'Joomla': /joomla!?\s*([\d\.]+)?/i,
            'vBulletin': /vBulletin\s*(.*)/i,
            'Drupal8': /Drupal (8[\d\.]*)/i,    // Drupal 8 logo.
            'Drupal': /Drupal ([1-7][\d\.]*)/i, // Original Drupal logo.
            'WordPress': /WordPress\s*(.*)/i,
            'XOOPS': /xoops/i,
            'Plone': /plone/i,
            'MediaWiki': /MediaWiki/i,
            'CMSMadeSimple': /CMS Made Simple/i,
            'SilverStripe': /SilverStripe/i,
            'Movable Type': /Movable Type/i,
            'Amiro.CMS': /Amiro/i,
            'Koobi': /koobi/i,
            'bbPress': /bbPress/i,
            'DokuWiki': /dokuWiki/i,
            'TYPO3': /TYPO3/i,
            'PHP-Nuke': /PHP-Nuke/i,
            'DotNetNuke': /DotNetNuke/i,
            'Sitefinity': /Sitefinity\s+(.*)/i,
            'WebGUI': /WebGUI/i,
            'ez Publish': /eZ\s*Publish/i,
            'BIGACE': /BIGACE/i,
            'TypePad': /typepad\.com/i,
            'Blogger': /blogger/i,
            'PrestaShop': /PrestaShop/i,
            'SharePoint': /SharePoint/,
            'JaliosJCMS': /Jalios JCMS/i,
            'ZenCart': /zen-cart/i,
            'WPML': /WPML/i,
            'PivotX': /PivotX/i,
            'OpenACS': /OpenACS/i,
            'AlphaCMS': /alphacms\s+(.*)/i,
            'concrete5': /concrete5 -\s*(.*)$/,
            'Webnode': /Webnode/,
            'GetSimple': /GetSimple/,
            'DataLifeEngine': /DataLife Engine/,
            'ClanSphere': /ClanSphere/,
            'Mura CMS': /Mura CMS\s*(.*)/i,
            'Tiki Wiki CMS Groupware': /Tiki/i
        },
        'copyright': {
            'phpBB': /phpBB/i
        },
        'elggrelease': {
            'Elgg': /.+/
        },
        'powered-by': {
            'Serendipity': /Serendipity/i
        },
        'author': {
            'Avactis': /Avactis Team/i
        }
    };

    for (var idx in metas) {
        var m = metas[idx];
        name = m.name ? m.name.toLowerCase() : "";

        if (!meta_tests[name]) continue;

        for (var t in meta_tests[name]) {
            if (t in _apps) continue;

            r = meta_tests[name][t].exec(m.content);
            if (r) {
                _apps[t] = r[1] ? r[1] : -1;
            }
        }
    }

    // 2: detect by script tags
    // 根据 script 标签判断
    var scripts = doc.getElementsByTagName("script");

    var script_tests = {
        '\u767e\u5ea6\u7edf\u8ba1': /hm\.baidu\.com\/hm?\.js/i,
        // 百度统计
        'cnzz': /(w|s\d+)\.cnzz\.com\/(c|stat)\.php/i,
        'bShare': /static\.bshare\.cn\/b/,
        '\u767e\u5ea6\u5206\u4eab': /bdimg\.share\.baidu\.com\/static\/js\//,
        // 百度分享
        '\u591a\u8bf4': /static\.duoshuo\.com\/embed\.js/,
        // 多说
        '\u53cb\u8350': /v\d\.ujian\.cc\/code\/ujian\.js/,
        // 友荐
        '\u53cb\u8a00': /v\d\.uyan\.cc\/(code\/uyan\.js|js\/iframe\.js)/,
        // 友言
        'JiaThis': /v\d\.jiathis\.com\/code(_mini)?\/(jiathis|jia)/,
        '\u65e0\u89c5': /widget\.wumii\.(cn|com)\/ext\/relatedItemsWidget/,
        // 无觅相关文章插件
        'segmentfault': /w\.segmentfault\.com\/card\/\d+\.js/i,

        'Google Analytics': /google-analytics\.com\/(ga|urchin|analytics).js/i,
        'Quantcast': /quantserve\.com\/quant\.js/i,
        'Prototype': /prototype\.js/i,
        'Joomla': /\/components\/com_/,
        'Ubercart': /uc_cart/i,
        'Closure': /\/goog\/base\.js/i,
        'MODx': /\/min\/b=.*f=.*/,
        'MooTools': /mootools/i,
        'Dojo': /dojo(\.xd)?\.js/i,
        'script.aculo.us': /scriptaculous\.js/i,
        'Disqus': /disqus.com/i,
        'GetSatisfaction': /getsatisfaction\.com\/feedback/i,
        'Wibiya': /wibiya\.com\/Loaders\//i,
        'reCaptcha': /(google\.com\/recaptcha|api\.recaptcha\.net\/)/i,
        'Mollom': /mollom\/mollom\.js/i,
        // only work on Drupal now
        'ZenPhoto': /zp-core\/js/i,
        'Gallery2': /main\.php\?.*g2_.*/i,
        'AdSense': /pagead\/show_ads\.js/,
        'XenForo': /js\/xenforo\//i,
        'Cappuccino': /Frameworks\/Objective-J\/Objective-J\.js/,
        'Avactis': /\/avactis-themes\//i,
        'Volusion': /a\/j\/javascripts\.js/,
        'AddThis': /addthis\.com\/js/,

        'BuySellAds': /buysellads.com\/.*bsa\.js/,
        'Weebly': /weebly\.com\/weebly\//,
        'Bootstrap': /bootstrap(-.*)?\.js/,
        'Jigsy': /javascripts\/asterion\.js/,
        // may change later
        'Yola': /analytics\.yola\.net/,
        // may change later
        'Alfresco': /(alfresco)+(-min)?(\/scripts\/menu)?\.js/,
        // both Alfresco Share and Explorer apps
        'Mura CMS': /mura\/js/,
        'Tiki Wiki CMS Groupware': /tiki-js/,
        'OpenTag': /opentag.*\.js/,
        'KISSmetrics': /i.kissmetrics.com\/i.js/,
        'AMP': /cdn\.ampproject\.org/
    };

    for (var idx in scripts) {
        var s = scripts[idx];
        if (!s.src) continue;
        s = s.src;

        for (var t in script_tests) {
            if (t in _apps) continue;
            if (script_tests[t].test(s)) {
                _apps[t] = -1;
            }
        }
    }

    // 3: detect by domains
    // 根据 domain 信息判断
    // 4: detect by regexp
    // 用正则表达式判断
    var text = document.documentElement.outerHTML;
    var text_tests = {
        'SMF': /<script .+\s+var smf_/i,
        'Magento': /var BLANK_URL = '[^>]+js\/blank\.html'/i,
        'Tumblr': /<iframe src=("|')http:\/\/\S+\.tumblr\.com/i,
        'WordPress': /<link rel=("|')stylesheet("|') [^>]+wp-content/i,
        'Closure': /<script[^>]*>.*goog\.require/i,
        'Liferay': /<script[^>]*>.*LifeRay\.currentURL/i,
        'vBulletin': /vbmenu_control/i,
        'MODx': /(<a[^>]+>Powered by MODx<\/a>|var el= \$\('modxhost'\);|<script type=("|')text\/javascript("|')>var MODX_MEDIA_PATH = "media";)/i,
        'miniBB': /<a href=("|')[^>]+minibb.+\s*<!--End of copyright link/i,
        'PHP-Fusion': /(href|src)=["']?infusions\//i,
        // @todo: recheck this pattern again
        'OpenX': /(href|src)=["'].*delivery\/(afr|ajs|avw|ck)\.php[^"']*/,
        'GetSatisfaction': /asset_host\s*\+\s*"javascripts\/feedback.*\.js/igm,
        // better recognization
        'Fatwire': /\/Satellite\?|\/ContentServer\?/,
        'Contao': /powered by (TYPOlight|Contao)/i,
        'Moodle': /<link[^>]*\/theme\/standard\/styles.php".*>|<link[^>]*\/theme\/styles.php\?theme=.*".*>/,
        '1c-bitrix': /<link[^>]*\/bitrix\/.*?>/i,
        'OpenCMS': /<link[^>]*\.opencms\..*?>/i,
        'HumansTxt': /<link[^>]*href=['"]?\S*?humans\.txt.*?['"].*?\>/i,
        'GoogleFontApi': /ref=["']?http:\/\/fonts.googleapis.com\//i,
        'Prostores': /-legacycss\/Asset">/,
        'osCommerce': /(product_info\.php\?products_id|_eof \/\/-->)/,
        'OpenCart': /index.php\?route=product\/product/,
        '\u4e03\u725b\u4e91\u5b58\u50a8\u52a0\u901f': /<(link|script|img)[^>]+(qiniudn\.com|qbox\.me|clouddn\.com|qiniu\.com|qnssl\.com)[^>]+>/i,
        // 七牛云存储加速
        'Shibboleth': /<form action="\/idp\/Authn\/UserPassword" method="post">/,
        'Django': /<input[^>]*name=[\"']csrfmiddlewaretoken[\"'][^>]*>/,
        'React': /<[^>]+data-react/
    };

    for (var t in text_tests) {
        if (t in _apps) continue;
        if (text_tests[t].test(text)) {
            _apps[t] = -1;
        }
    }

    // TODO: merge inline detector with version detector
    // 5: detect by inline javascript
    // 根据 inline javascript 判断
    var js_tests = {
        'Highcharts': function() {
            return window.Highcharts;
        },
        'Zepto.js': function() {
            return window.Zepto && window.Zepto.fn;
        },
        'CodeIgniter': function() {
            return document.cookie.indexOf("cisession") != -1 || document.cookie.indexOf("ci_session") != -1;
        },
        'Java': function() {
            return document.cookie.indexOf("JSESSIONID") != -1;
        },
        'Domino': function() {
            return document.cookie.indexOf("LtpaToken") != -1 || document.cookie.indexOf("DomAuthSessId") != -1;
        },
        'Drupal8': function() {
            // Do not JS test if Drupal was already detected.
            if (_apps.Drupal8 !== undefined || _apps.Drupal !== undefined) return;
            // To ensure that the D8 logo is used, we must execute test here.
            // This way it doesn't test the normal "Drupal" one.
            return 'Drupal' in window && Drupal.throwError !== undefined && '8';
        },
        'Drupal': function() {
            // Do not JS test if Drupal was already detected.
            if (_apps.Drupal8 !== undefined || _apps.Drupal !== undefined) return;
            return window.Drupal;
        },
        'Flarum': function() {
            return window.System && System.has && System.has('flarum/app');
        },
        'TomatoCMS': function() {
            return window.Tomato;
        },
        'MojoMotor': function() {
            return window.Mojo;
        },
        'ErainCart': function() {
            return window.fn_register_hooks;
        },
        'SugarCRM': function() {
            return window.SUGAR;
        },
        'YUI': function() {
            return window.YAHOO;
        },
        'YUI 3': function() {
            return window.YUI;
        },
        'jQuery': function() {
            return window.jQuery;
        },
        "ColorThief": function() {
            return window.ColorThief;
        },
        "jQuery.hotkeys": function() {
            return window.jQuery && jQuery.hotkeys;
        },
        "spin.js": function() {
            return (window.jQuery && jQuery.fn && jQuery.fn.spin) || window.Spinner;
        },
        "babel":function() {
            return window.babelHelpers;
        },
        "FastClick":function() {
            return window.FastClick;
        },
        "twemoji":function() {
            return window.twemoji;
        },
        "Mithril":function() {
            return window.m && typeof window.m.version === 'function';
        },
        "s9e.TextFormatter": function() {
            return window.s9e && s9e.TextFormatter;
        },
        "Pusher": function() {
            return window.Pusher && Pusher.Channel;
        },
        'jQuery UI': function() {
            return window.jQuery && window.jQuery.ui;
        },
        'Typekit': function() {
            return window.Typekit;
        },
        'KindEditor': function() {
            return window.KindEditor;
        },
        'Facebook': function() {
            return window.FB && window.FB.api;
        },
        'ExtJS': function() {
            return window.Ext;
        },
        'Modernizr': function() {
            return window.Modernizr;
        },
        'Raphael': function() {
            return window.Raphael;
        },
        'Cufon': function() {
            return window.Cufon;
        },
        'sIFR': function() {
            return window.sIFR;
        },
        'Xiti': function() {
            return window.xtsite && window.xtpage;
        },
        'Piwik': function() {
            return window.Piwik;
        },
        'IPB': function() {
            return window.IPBoard;
        },
        'MyBB': function() {
            return window.MyBB;
        },
        'Clicky': function() {
            return window.clicky;
        },
        'Woopra': function() {
            return window.woopraTracker;
        },
        'RightJS': function() {
            return window.RightJS;
        },
        'OpenWebAnalytics': function() {
            return window.owa_baseUrl;
        },
        'Prettify': function() {
            return window.prettyPrint;
        },
        'SiteCatalyst': function() {
            return window.s_account;
        },
        'Twitter': function() {
            return window.twttr;
        },
        'Coremetrics': function() {
            return window.cmCreatePageviewTag;
        },
        'Buzz': function() {
            return window.google_buzz__base_url;
        },
        'Plus1': function() {
            return window.gapi && window.gapi.plusone;
        },
        'Google Loader': function() {
            return window.google && window.google.load;
        },
        'GoogleMapApi': function() {
            return window.google && window.google.maps;
        },
        'Head JS': function() {
            return window.head && window.head.js;
        },
        'SWFObject': function() {
            return window.swfobject;
        },
        'Chitika': function() {
            return window.ch_client && window.ch_write_iframe;
        },
        'Jimdo': function() {
            return window.jimdoData;
        },
        'Webs': function() {
            return window.webs;
        },
        'Backbone.js': function() {
            return window.Backbone && typeof(window.Backbone.sync) === 'function';
        },
        'Underscore.js': function() {
            return window._ && typeof(window._.identity) === 'function' && window._.identity('abc') === 'abc' && window._.name === '_';
        },
        'Spine': function() {
            return window.Spine;
        },
        'AngularJs': function() {
            return window.angular;
        },
        'Angular': function() {
            return window.ng;
        },
        'Ionic': function () {
            return window.Ionic || window.ionic;
        },
        'Elm': function () {
            return window.Elm;
        },
        'Ning': function() {
            return window.ning;
        },
        'ektron': function() {
            return window.Ektron;
        },
        'etracker': function() {
            return window.et_params;
        },
        'SPDY': function() {
            if (window.PerformanceNavigationTiming) {
                const ntEntry = performance.getEntriesByType('navigation')[0];
                return ['h2', 'hq'].includes(ntEntry.nextHopProtocol);
            }
            return false;
        },
        'LiveStreet': function() {
            return window.LIVESTREET_SECURITY_KEY;
        },
        'D3': function() {
            return window.d3;
        },
        'moment': function() {
            return window.moment;
        },
        'RxJs': function() {
            return window.Rx;
        },
        'Vue': function() {
            if (window.Vue) {
                return window.Vue;
            }
            const all = document.querySelectorAll('*');
            let el;
            for (let i = 0; i < all.length; i++) {
                if (all[i].__vue__) {
                    el = all[i];
                    break;
                }
            }
            if (el) {
                let Vue = Object.getPrototypeOf(el.__vue__).constructor;
                while (Vue.super) {
                    Vue = Vue.super;
                }
                return Vue;
            }
        },
        'polymer':function () {
            return window.Polymer;
        },
        'avalon':function () {
            return window.avalon;
        },
        'Lo-dash':function () {
            return window._ && window._.name === 'lodash';
        },
        'Webpack':function () {
            return window.webpackJsonp;
        },
        'Ember':function () {
            return window.EmberENV && window.Ember;
        },
        'flowchart': function () {
            return window.flowchart;
        },
        'katex': function () {
            return window.katex;
        },
        'editor.md': function () {
            return window.editormd;
        },
        'highlight.js': function () {
            return window.hljs;
        },
        'sequence-diagrams': function () {
            return window.Diagram && window.Diagram.name === 'Diagram';
        },
        'ace': function () {
            return window.ace && typeof (window.ace.UndoManager) === 'function';
        },
        'WebFont': function () {
            return window.WebFont;
        },
        'WebSocket': function () {
            return window.WebSocket && window.WebSocket.CONNECTING;
        },
        'Prism': function () {
            return window.Prism;
        },
        'Mousetrap': function () {
            return window.Mousetrap;
        },
        'Raven': function () {
            return window.Raven;
        },
        'qrcode.js': function () {
            return window.QRCode && window.QRCode.name === 'QRCode';
        },
        'emoji': function () {
            return window.String.prototype.emoji;
        }
    };

    for (var t in js_tests) {
        if (t in _apps) continue;
        if (js_tests[t]()) {
            _apps[t] = -1;
        }
    }

    // 6: detect some script version when available
    // 判断 javascript 版本
    var js_versions = {
        'Highcharts': function() {
            if ('Highcharts' in window && Highcharts.version !== undefined) return window.Highcharts.version;
        },
        'Prototype': function() {
            if ('Prototype' in window && Prototype.Version !== undefined) return window.Prototype.Version;
        },
        'Drupal': function() {
            // Drupal does not provide detectable versions other than its major (for security purposes).
            // However, major versions can be deduced from methods/properties avilable in Drupal global.
            if ('Drupal' in window && Drupal.detachBehaviors !== undefined) return '7';
            if ('Drupal' in window && Drupal.behaviors !== undefined) return '6';
            if ('Drupal' in window && Drupal.extend !== undefined) return '5';
            // There is nothing in JS DOM parsing that can disquish versions older than 4.7.
            return '4.7 (or older)';
        },
        'script.aculo.us': function() {
            if ('Scriptaculous' in window && Scriptaculous.Version !== undefined) return window.Scriptaculous.Version;
        },
        'jQuery': function() {
            if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) return jQuery.prototype.jquery;
        },
        'jQuery UI': function() {
            if (typeof jQuery === 'function' && jQuery.ui && jQuery.ui.version !== undefined) return jQuery.ui.version;
        },
        'Dojo': function() {
            if (typeof dojo === 'object' && dojo.version.toString() !== undefined) return dojo.version.toString();
        },
        'YUI': function() {
            if (typeof YAHOO === 'object' && YAHOO.VERSION !== undefined) return YAHOO.VERSION;
        },
        'YUI 3': function() {
            if ('YUI' in window && typeof YUI === 'function' && YUI().version !== undefined) return YUI().version;
        },
        "jQuery.hotkeys": function() {
            return window.jQuery && jQuery.hotkeys && jQuery.hotkeys.version;
        },
        "Mithril": function() {
            return window.m && typeof window.m.version ==='function' && window.m.version();
        },
        "Pusher": function() {
            return window.Pusher && Pusher.Channel && Pusher.VERSION;
        },
        'MooTools': function() {
            if (typeof MooTools === 'object' && MooTools.version !== undefined) return MooTools.version;
        },
        'ExtJS': function() {
            if (typeof Ext === 'object' && Ext.version !== undefined) return Ext.version;
        },
        'RightJS': function() {
            if ('RightJS' in window && RightJS.version !== undefined) return RightJS.version;
        },
        'Modernizr': function() {
            if (window.Modernizr && Modernizr._version !== undefined) return Modernizr._version;
        },
        'Raphael': function() {
            if (window.Raphael && Raphael.version !== undefined) return Raphael.version;
        },
        'Backbone.js': function() {
            if (window.Backbone && window.Backbone.VERSION) return window.Backbone.VERSION;
        },
        'Underscore.js': function() {
            if (window._ && window._.VERSION) return window._.VERSION;
        },
        'Spine': function() {
            if (window.Spine && window.Spine.version) return window.Spine.version;
        },
        'AngularJs': function() {
            if (window.angular && window.angular.version && 'full' in window.angular.version) return window.angular.version.full;
        },
        'Angular': function() {
            if (window.ng && window.document.body && window.document.body.children.length > 0) {
                const rootCmp = document.querySelectorAll('*[ng-version]')[0];

                if (rootCmp) {
                    return rootCmp.getAttribute('ng-version');
                }
            }
        },
        'Ionic': function () {
            if(window.Ionic && window.Ionic.version) return window.Ionic.version;
            if(window.ionic && window.ionic.version) return window.ionic.version;
        },
        'D3': function() {
            if (window.d3 && window.d3.version) return window.d3.version;
        },
        'KindEditor': function() {
            return window.KindEditor && window.KindEditor.VERSION;
        },
        'moment': function() {
            if (window.moment && window.moment.version) return window.moment.version;
        },
        'Vue': function() {
            if(window.Vue) return window.Vue.version;
        },
        'polymer':function () {
            if(window.Polymer) return window.Polymer.version;
        },
        'avalon':function () {
            if(window.avalon) return window.avalon.version;
        },
        'Lo-dash':function () {
            if(window._ && window._.name === 'lodash') return window._.VERSION;
        },
        'Ember':function () {
            if (window.Ember) return window.Ember.VERSION;
        },
        'katex': function () {
            if (window.katex) return window.katex.version;
        },
        'editor.md': function () {
            if (window.editormd) return window.editormd.version;
        },
        'ace': function () {
            if (window.ace && typeof (window.ace.UndoManager) === 'function') return window.ace.version;
        },
        'WebSocket': function () {
            if (window.WebSocket && window.WebSocket.CONNECTING) return window.WebSocket.CONNECTING + '[' + window.WebSocket.OPEN + ', ' + window.WebSocket.CLOSED + ']';
        },
        'Raven': function () {
            if (window.Raven) return window.Raven.VERSION;
        }
    };

    for (var a in _apps) {
        if (_apps[a] === -1 && js_versions[a]) {
            r = js_versions[a]();
            _apps[a] = r ? r: -1;
        }
    }

    // 7: detect by header
    // 根据 header 信息判断
    // @todo
    // 8: detect based on built-in database
    // 根据内建的数据库判断
    // @todo
    // 9: detect based on defined css classes
    // 根据 css 类判断
    var cssClasses = {
        'Bootstrap': ['hero-unit', '.carousel-control', '[class^="icon-"]:last-child'],
        'Font Awesome': ['.fa', '.fa-', '.fa-lg']
    };
    for (var t in cssClasses) {
        if (t in _apps) continue;

        var found = true;
        for (var css in cssClasses[t]) {
            var act = false;
            name = cssClasses[t][css];

            /* Iterate through all registered css classes and check for presence */
            for (var cssFile in document.styleSheets) {
                if (!document.styleSheets[cssFile].hasOwnProperty('cssRules')) continue;
                
                for (var cssRule in document.styleSheets[cssFile].cssRules) {
                    var style = document.styleSheets[cssFile].cssRules[cssRule];

                    if (typeof style === "undefined") continue;
                    if (typeof style.selectorText === "undefined") continue;

                    if (style.selectorText.indexOf(name) !== -1) {
                        act = true;
                        break;
                    }
                }
                if (act === true) break;
            }

            found = found && act;
        }

        if (found === true) {
            _apps[t] = -1;
        }
    }

    // 10: 根据引用的css文件的href判断
    var cssLinkName = {
        'Bootstrap': /bootstrap(-theme)?\.(min\.)?css/,
        'Font Awesome': /font-awesome\.(min\.)?css/
    };

    cssLinks = document.styleSheets;
    for (var i = 0; i < cssLinks.length; i++) {
        if (!cssLinks[i].href) continue;
        for (var app in cssLinkName) {
            if (app in _apps) continue;
            if (cssLinkName[app].test(cssLinks[i].href)) {
                _apps[app] = -1;
            }
        }
    }

    // convert to array
    var jsonString = JSON.stringify(_apps);
    // send back to background page
    var meta = document.getElementById('chromesniffer_meta');
    meta.content = jsonString;

    //Notify Background Page
    var done = document.createEvent('Event');
    done.initEvent('ready', true, true);
    meta.dispatchEvent(done);
})();
