(async function () {
    if (sessionStorage.getItem("doNotTrack") || localStorage.getItem("doNotTrack")) {
        return;
    }
    var id = document.currentScript.getAttribute("data-id");
    var utcoffset = document.currentScript.getAttribute("data-utcoffset");
    var server = document.currentScript.getAttribute("data-server") || "https://t.counter.dev";
	
	fetch(server + "/log_your_visit", {
		method: "POST",
		headers: {
			'Accept': 'application/json',
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			page: window.location.pathname,
			referrer: document.referrer,
			screen: screen.width + "x" + screen.height
		})
	});
	
})();

    // if (!sessionStorage.getItem("_swa") && !document.referrer.startsWith(location.protocol + "//" + location.host)) {
        // setTimeout(function () {
            // sessionStorage.setItem("_swa", "1");
            // fetch(
                // server +
                    // "/track?" +
                    // new URLSearchParams({
                        // referrer: document.referrer,
                        // screen: screen.width + "x" + screen.height,
                        // id: id,
                        // utcoffset: utcoffset,
                    // }),
            // );
        // }, 4500);
    // }
    // navigator.sendBeacon(
        // server + "/trackpage",
        // new URLSearchParams({
            // id: id,
            // page: window.location.pathname,
        // }),
    // );
// })();


