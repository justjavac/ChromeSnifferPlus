/**
 * Chrome AppSniffer
 *
 * Detect apps run on current page and send back to background page.
 * Some part of this script was refered from Wappalyzer Firefox Addon.
 *
 * @author Bao Nguyen <contact@nqbao.com>
 * @license GPLv3
 **/

(function () {
  var head = document.getElementsByTagName('head')[0];

  if (head) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = chrome.extension.getURL('detector.js');

    var meta = document.createElement('meta');
    meta.name = 'chromesniffer';
    meta.id = 'chromesniffer_meta';
    head.appendChild(meta);
    head.appendChild(script);

    meta.addEventListener('ready', function () {
      var apps = JSON.parse(meta.content);

      if (Object.keys(apps).length > 0) {
        chrome.extension.sendMessage({msg: "result", apps: apps});
      }
    });
  }
})();