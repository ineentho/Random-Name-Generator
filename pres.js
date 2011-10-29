function getOpt(opt) {
	if (localStorage[opt] != undefined)
		return localStorage[opt];
	else {
		switch (opt) {
		case "names.predefined.type":
			return "random";
			break;
		case "names.type":
			return "predefinedOptions";
			break;
		}
	}
}
function setOpt(opt, val) {
	localStorage[opt] = val;
}