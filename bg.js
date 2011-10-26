chrome.contextMenus.create({"title": "Generate random name", "contexts":["editable"], "onclick": genName});
function genName(){
	alert("Gen name");
}