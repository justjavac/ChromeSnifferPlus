var bg = chrome.extension.getBackgroundPage();

chrome.tabs.getSelected(null,
function(tab) {
    chrome.extension.sendMessage({
        msg: "get",
        tab: tab.id
    },
    function(response) {
        var display = document.getElementById('app_list');

        var apps = response && response.apps ? response.apps: {};
        var html = '';

        var appinfo = bg.appinfo;
        var count = 0;

        for (var appid in apps) {
            app = appinfo[appid] ? appinfo[appid] : {};

            // i'm lazy to fill all kind of the information :(
            if (!app.title) app.title = appid;
            if (!app.url) app.url = appinfo[''].url.replace('%s', appid); // it's google one
            if (!app.icon) app.icon = appinfo[''].icon;

            if (apps[appid] != "-1") {
                app.title = appid + ' ' + apps[appid]
            }

            // use DOM to avoid error
            var link = document.createElement('a');
            var icon = document.createElement('img');

            link.target = "_blank";
            link.title = app.title;
            link.href = app.url;

            icon.alt = app.title;
            icon.width = 16;
            icon.height = 16;
            icon.src = "apps/" + app.icon;

            link.appendChild(icon);
            display.appendChild(link);

            count++;
        }

        if (count < 8) // correct the width for better view
        {
            display.style.width = (count * 20) + "px";
        } else {
            display.style.width = "160px";
        }

    });
});