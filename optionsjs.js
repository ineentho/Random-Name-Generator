$(function() {
	$( "#tabs" ).tabs();
	$("input[name='hn']").change(function(){
		$("#predefinedOptions").slideUp();
		$("#nameOptions").slideUp();
		$("#customOptions").slideUp();
		$("#"+$(this).val()).slideDown();
	});
	$("#predefinedNameType").change(function(){
		if($(this).val()=="popular")
			$("#popularInfo").slideDown();
		else
			$("#popularInfo").slideUp();
	})
});