chrome.contextMenus.create({"title": "Generate random name", "contexts":["editable"], "onclick": genName});
function genName(info, tab){
	name=getName();
	chrome.tabs.executeScript(null,{code:"document.activeElement.value+='"+name+"';"})
}
function getName(){
	name = "Ineentho";
	return name;
}