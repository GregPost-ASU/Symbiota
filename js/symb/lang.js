function setLanguage(selObj){
	var langVal = selObj.value;
	var d = new Date();
	d.setMonth( d.getMonth() + 1 );
	document.cookie = "lang="+langVal+"; path=/ ; expires="+ d.toUTCString();
	location.reload(true);
}

function setLanguageDiv(){
	var activeLang = readLangCookie();
	if(activeLang){
		const langs = document.querySelectorAll(".lang");
		for (const l of langs) {
			if(l.getAttribute('class') != "lang " + activeLang){
				l.style.display = "none";
			}
		}
	}
}

function readLangCookie() {
	var cookieName = "lang=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
    	var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(cookieName) == 0) return c.substring(cookieName.length, c.length);
	}
	return null;
}