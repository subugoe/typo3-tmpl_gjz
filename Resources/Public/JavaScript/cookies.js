/** Der Button wird mit JavaScript erzeugt und vor dem Ende des body eingebunden. **/

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(";");
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) === " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function checkCookie(toggleBlock, slideControl, slider, subsections, message) {
	var block = getCookie(toggleBlock);
	if ( (block !== "") && (block !== "undefined") ) {
		if (block === "true") {
			$(slider).addClass("active");
			$(slideControl).prop("checked", true);
			$(subsections).show();
			$(message).html("Vollansicht");
		} else {
			$(slider).removeClass("active");
			$(slideControl).prop("checked", false);
			$(subsections).hide();
			$(message).html("Kurzansicht");
		}
	} else {
		setCookie(toggleBlock, "false", 1);
	}
}
