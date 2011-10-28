$(function() {
	$( "#accordion" ).accordion({
		autoHeight: false,
		navigation: true});
	$( "#slider" ).slider({
		value:1,
		min: 1,
		max: 3,
		step: 1,
		slide: function( event, ui ) {
			if(ui.value==1)
				$( "#amount" ).val( "Simple");
			if(ui.value==2)
				$( "#amount" ).val( "Moderate");
			if(ui.value==3)
				$( "#amount" ).val( "Advanced");
		}
	});
	$( "#amount" ).val( "Simple" );
});