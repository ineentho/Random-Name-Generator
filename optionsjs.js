$(function() {
	nType = getOpt("names.type");
	inputChange("f", nType)
	pntc("f", getOpt("names.predefined.type"))
	$("#tabs").tabs();
	$("input[name='hn']").change(inputChange);
	function inputChange(f, v) {
		$("#predefinedOptions").slideUp();
		$("#nameOptions").slideUp();
		$("#customOptions").slideUp();
		if (f == "f") {
			$("#" + v).slideDown();
			$("input[value='" + v + "'][name='hn']").attr("checked", "checked");
		} else {
			$("#" + $(this).val()).slideDown();
			setOpt("names.type", $(this).val());
		}
	}
	$("#predefinedNameType").change(pntc);
	function pntc(f, v) {
		if (f == "f")
			$("#predefinedNameType").val(v);
		else {
			v = $(this).val();
			setOpt("names.predefined.type", v);
		}
		if (v == "popular")
			$("#popularInfo").slideDown();
		else
			$("#popularInfo").slideUp();
	}
});