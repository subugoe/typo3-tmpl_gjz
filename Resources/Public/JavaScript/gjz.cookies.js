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
	var isSetCookie = getCookie(toggleBlock);
	if ( (isSetCookie !== "") && (isSetCookie !== "undefined") ) {
		if (isSetCookie === "true") {
			jQuery(slider).addClass("active");
			jQuery(slideControl).prop("checked", true);
			jQuery(subsections).show();
			jQuery(subsections).css("display", "block");
			jQuery(message).html("Vollansicht");
		} else {
			jQuery(slider).removeClass("active");
			jQuery(slideControl).prop("checked", false);
			jQuery(subsections).hide();
			jQuery(message).html("Kurzansicht");
		}
	} else {
		setCookie(toggleBlock, "false", 365);
	}
}
