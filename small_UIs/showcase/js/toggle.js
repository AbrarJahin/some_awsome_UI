// TOGGLE SCRIPT

$(document).ready(function(){
	$(".toggle_container, .toggle_container_dark").hide();
	$("h4.trigger, h4.trigger_dark").click(function(){
		$(this).toggleClass("active").next().slideToggle("slow");
	});
});



// ACCORDION SCRIPT

$(document).ready(function(){
	
//Set default open/close settings
$('.acc_container, .acc_container_dark').hide(); //Hide/close all containers
$('.acc_trigger:first, .acc_trigger_dark:first').addClass('active').next().show(); //Add "active" class to first trigger, then show/open the immediate next container

//On Click
$('.acc_trigger').click(function(){
	if( $(this).next().is(':hidden') ) { //If immediate next container is closed...
		$('.acc_trigger').removeClass('active').next().slideUp(); //Remove all .acc_trigger classes and slide up the immediate next container
		$(this).toggleClass('active').next().slideDown(); //Add .acc_trigger class to clicked trigger and slide down the immediate next container
	}
	return false; //Prevent the browser jump to the link anchor
});
//On Click
$('.acc_trigger_dark').click(function(){
	if( $(this).next().is(':hidden') ) { //If immediate next container is closed...
		$('.acc_trigger_dark').removeClass('active').next().slideUp(); //Remove all .acc_trigger classes and slide up the immediate next container
		$(this).toggleClass('active').next().slideDown(); //Add .acc_trigger class to clicked trigger and slide down the immediate next container
	}
	return false; //Prevent the browser jump to the link anchor
});

});
