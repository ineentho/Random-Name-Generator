chrome.contextMenus.create({
	"title" : "Generate random name",
	"contexts" : [ "editable" ],
	"onclick" : genName
});
function genName(info, tab) {
	name = getName();
	chrome.tabs.executeScript(null, {
		code : "document.activeElement.value+='" + name + "';"
	})
}
function getName() {
	//Commit test
	if (getOpt("names.type") == "predefinedOptions") {
		// Built in names
		if (getOpt("names.predefined.type") == "random")
			name = genNameRandom();
		else if (getOpt("names.predefined.type") == "popular")
			name = genNamePopular();
		else
			name = genNameClassic();
	}
	return name;
}
