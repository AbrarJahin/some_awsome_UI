// Kwicks Menu

$(document).ready(function(){
	lastBlock = $(".opened");
    maxWidth = 230;
	minWidth = 80;	
    $("#kwicksmenu li a, .opened").hover(	
		function(){			
			$(lastBlock).animate({width: minWidth+"px"}, { queue:false, duration:400 });
			$(this).animate({width: maxWidth+"px"}, { queue:false, duration:400});
			currentBlock = this;				
			lastBlock = this;			
	    }
	);
});



// Update gallery menu

$(document).ready(function(){
$('.control ul li').find('a').click(menu);function menu(){$(this).parents('ul:first').find('a').removeClass('activegallery').end().end().addClass('activegallery');}
function trigger(data){var el=$('.control ul li').find('a[href$="'+data.id+'"]').get(0);menu.call(el);}
if(!window.location.hash){$('.control ul li a:first').click();}});



// Triggers

$(document).ready(function(){
	$(".trigger").click(function(){
		$(".panel").toggle("fast");
		$(this).toggleClass("active");
		return false;
	});
});
$(document).ready(function(){
	$(".trigger_right, .close").click(function(){
		$(".panel_right").toggle();
		$(this).toggleClass("active");
		return false;
	});
});
