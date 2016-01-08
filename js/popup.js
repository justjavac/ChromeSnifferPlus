var bg = chrome.extension.getBackgroundPage();

// window.CollecUsage(function(){
//     localStorage.clear();
// });

chrome.tabs.getSelected(null,
function(tab) {
    chrome.extension.sendMessage({
        msg: "get",
        tab: tab.id
    },
    function(response) {
        var display = document.getElementById('app_list');

        var apps = response && response.apps ? response.apps: {};

        var appinfo = bg.appinfo;

        for (var appid in apps) {
            app = appinfo[appid] ? appinfo[appid] : {};

            if (!app.title) app.title = appid;
            if (!app.url) app.url = appinfo[''].url.replace('%s', appid); // it's google one
            // if (!app.icon) app.icon = appinfo[''].icon;

            if (apps[appid] != "-1") {
                app.title = appid + ' <span class="lib_version">' + apps[appid] + '</span>';
            }

            var link = document.createElement('a');
            link.target = "_blank";
            // link.title = app.title;
            link.href = app.url;

            if (app.icon !== undefined) {
                var icon = document.createElement('img');
                icon.width = 16;
                icon.height = 16;
                icon.src = "apps/" + app.icon;
            } else {
                var icon = document.createElement('span');
                icon.className = "icon";
            }

            var text = document.createElement('span');
            text.innerHTML = app.title;

            link.appendChild(icon);
            link.appendChild(text);
            display.appendChild(link);
        }
    });
});