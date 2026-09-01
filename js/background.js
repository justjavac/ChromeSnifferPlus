/**
 * Background logic running in the Manifest V3 service worker.
 */

var dd = function(msg) {
    console.log(msg);
};

var tabinfo = {};

// initial list of header detection.  will move this to a separate file later.
var knownHeaders = {
    'x-powered-by': {
        // 'Ruby on Rails': /Phusion Passenger/,
        'Express.js': /Express/,
        'PHP': /PHP\/?(.*)/,
        'ASP.NET': /ASP\.NET/,
        'Nette': /Nette Framework/
    },
    'server': {
        'Tengine': /Tengine(.*)/,
        'Apache': /Apache[^-]?\/?(.*)/,
        'Tomcat': /Apache-Coyote\/?.*/,
        'GitHub': /GitHub.com/,
        'Domino': /Lotus-Domino/,
        'Play': /Play\/?(.*)/,
        'nginx': /nginx\/?(.*)/,
        'IIS': /Microsoft-IIS\/?(.*)/,
        'AliyunOSS': /AliyunOSS\/?(.*)/,
        'cloudflare': /cloudflare\/?(.*)/,
    },
    'via': {
        'Varnish': /(.*) varnish/
    }
};

// Scans through the headers finding matches, and returning the val from appinfo (apps.js)
var headerDetector = function(headers) {
    var appsFound = [];

    // loop through all the headers received
    for (var i = headers.length - 1; i >= 0; i--) {
        var apps = knownHeaders[headers[i].name.toLowerCase()];
        if (!apps) {
            continue;
        }
        for (var app in apps) {
            var matches = headers[i].value.match(apps[app]);
            if (matches) {
                var version = matches[1] || -1;
                appsFound[app] = version;
            }
        }
    }

    return appsFound;
};

// collect apps from header information:
chrome.webRequest.onHeadersReceived.addListener(function(details) {
    var appsFound = headerDetector(details.responseHeaders);
    tabinfo[details.tabId] = tabinfo[details.tabId] || {};
    tabinfo[details.tabId]['headers'] = appsFound;
},
{
    urls: ['<all_urls>'],
    types: ['main_frame']
},
['responseHeaders']);

chrome.tabs.onRemoved.addListener(function(tabId) {
    // free memory
    delete tabinfo[tabId];
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // 'result' event issued by main.js once app identification is complete
    if (request.msg == 'result') {
        var thisTab = tabinfo[sender.tab.id];

        if (!thisTab) {
            sendResponse({});
            return true;
        }

        thisTab['apps'] = request.apps;

        // load in any apps we discovered from headers:
        for (var header in thisTab['headers']) {
            thisTab['apps'][header] = thisTab['headers'][header];
        }

        // change the tab icon
        var mainApp = null;
        var count = 0;

        for (var app in request.apps) {
            count++;

            if (mainApp === null) {
                mainApp = app;
                continue;
            }
        }

        if (count > 0) {
            var mainAppInfo = appinfo[mainApp];
            if (mainAppInfo) { // lazy bug
                var appTitle = mainAppInfo.title ? mainAppInfo.title : mainApp;

                if (request.apps[mainApp] != "-1") {
                    appTitle = mainApp + ' ' + request.apps[mainApp];
                }

                chrome.action.setIcon({
                    tabId: sender.tab.id,
                    path: 'apps/' + mainAppInfo.icon
                });
                chrome.action.setTitle({
                    tabId: sender.tab.id,
                    title: appTitle
                });
            }

            chrome.action.show(sender.tab.id);
        }
        sendResponse({});
    } else if (request.msg == 'get') {
        // Request for 'get' comes from the popup page, asking for the list of apps
        var apps = tabinfo[request.tab];
        sendResponse(apps);
    }

    return true;
});
