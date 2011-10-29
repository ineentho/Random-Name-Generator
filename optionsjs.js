$(function() {
	nType=getOpt("names.type");
	inputChange("f",nType)
	$( "#tabs" ).tabs();
	$("input[name='hn']").change(inputChange);
	function inputChange(f,v){
		$("#predefinedOptions").slideUp();
		$("#nameOptions").slideUp();
		$("#customOptions").slideUp();
		if(f=="f"){
			$("#"+v).slideDown();
			$("input[value='"+v+"'][name='hn']").attr("checked","checked");
		}
		else{
			$("#"+$(this).val()).slideDown();
			setOpt("names.type",$(this).val());
		}
	}
	$("#predefinedNameType").change(function(){
		if($(this).val()=="popular")
			$("#popularInfo").slideDown();
		else
			$("#popularInfo").slideUp();
	})
});