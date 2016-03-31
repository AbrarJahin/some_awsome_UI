// Page Scroll

function scrollSections() {
	$('a.scrollsection').click(function () {
		$('#wrapper').scrollTo($(this).attr('href'), 900, {queue:false});
		return false;
	});
} 

// Fade on Mouse Hover

function elementsHover() {
	$('.gallery img, .social_icons li a').css('opacity', '0.5');
	$('.gallery img, .social_icons li a').hover(function() {
		$(this).fadeTo(400, 1);
		}, function () { 
		$(this).stop().fadeTo(200, 0.5);
	});
} 

// Top Navigation Highlight

function navigateSections() {
	$('.navigationmap li:first a, #menu li:first a').addClass('selected');
	$('a.scrollsection').click(function(){
		$('.navigationmap, #menu').find('a').removeClass('selected');
		var fragment = this.getAttribute('href');
		$('.navigationmap a[href=' + fragment + ']').parentsUntil('.navigationmap').children('li > a').toggleClass('selected');
		$('#menu a[href=' + fragment + ']').parentsUntil('#menu').children('li > a').toggleClass('selected');
	});
} 

// Browser resizing

function resizePanel() {
	// What happens if we resize the window...
	// Get dimensions
	width = $(window).width();
	height = $(window).height();
	mask_width = width * $('.section_holder').length;
	// Resize the content
	$('#wrapper, .section_holder').css({width: width, height: height});
	$('#mask').css({width: mask_width, height: height});
	// Keep the current section visible (and don't jump back)
	$('#wrapper').scrollTo($('a.selected').attr('href'), 0);
}  

// Countdown

function countdown() {
	
	var endDay = new Date();
	// To set the end date, the below example adds 5 years (4 with the current one), 7 months and 24 days from the current date
	endDay = new Date(endDay.getFullYear() + 5, 7, 24);
	// Set your own scheme, in the example YODHMS means that we display Years, months, days, hours, minutes and seconds remaining.
	// If you don't want to display the years, replace YODHMS by ODHMS
	$('.datecountdown').countdown({until: endDay, format: 'YODHMS', layout: 
		'<ul>' + 
		'{y<}<li class="countdowndata">{yn} Years</li><li class="countdowngraph"><span class="countdownyear" style="width:{ya}%"></span></li>{y>}' + 
		'{o<}<li class="countdowndata">{on} Months</li><li class="countdowngraph"><span class="countdownmonth" style="width:{oa}%"></span></li>{o>}' + 
		'{w<}<li class="countdowndata">{wn} Weeks</li><li class="countdowngraph"><span class="countdownweek" style="width:{wa}%"></span></li>{w>}' + 
		'{d<}<li class="countdowndata">{dn} Days</li><li class="countdowngraph"><span class="countdownday" style="width:{da}%"></span></li>{d>}' + 
		'{h<}<li class="countdowndata">{hn} Hours</li><li class="countdowngraph"><span class="countdownhours" style="width:{ha}%"></span></li>{h>}' + 
		'{m<}<li class="countdowndata">{mn} Minutes</li><li class="countdowngraph"><span class="countdownminutes" style="width:{ma}%"></span></li>{m>}' + 
		'{s<}<li class="countdowndata">{sn} Seconds</li><li class="countdowngraph"><span class="countdownseconds" style="width:{sa}%"></span></li>{s>}' + 
		'</ul>'
	});

}  

// Contact Form

function contactform() {
	
	$('#contactform').submit(function(){
		
		var action = $(this).attr('action');
		$("#message").slideUp(750,function() {
			$('#message').hide();
			$('#submit')
				.after('<img src="img/icons/loader.gif" class="loader" />')
				.attr('disabled','disabled');
			$.post(action, { 
				name: $('#name').val(),
				email: $('#email').val(),
				comments: $('#comments').val(),
				verify: $('#verify').val()
			},
				function(data){
					document.getElementById('message').innerHTML = data;
					$('#message').slideDown('slow');
					$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
					$('#submit').removeAttr('disabled'); 
					if(data.match('success') != null) $('#contactform').slideUp('slow');
				}
			);
		});
		return false; 
		
	});
}  

// Newsletter

function newsletter() {
	
	$('#newsletter_signup').submit(function(){

		if($(this).data('formstatus') !== 'submitting'){

			var form = $(this),
				formData = form.serialize(),
				formUrl = form.attr('action'),
				formMethod = form.attr('method'), 
				responseMsg = $('#newsletter_response');

			form.data('formstatus','submitting');

			responseMsg.hide()
					   .addClass('newsletter_waiting')  
                  	   .text('')  
					   .fadeIn(200);

			$.ajax({
				url: formUrl,
				type: formMethod,
				data: formData,
				success:function(data){
					
					var responseData = jQuery.parseJSON(data), 
						klass = '';
					
					switch(responseData.status){
						case 'error':
							klass = 'newsletter_error';
						break;
						case 'success':
							klass = 'newsletter_success';
						break;	
					}
					
					responseMsg.fadeOut(200,function(){
						$(this).addClass(klass)
							   .text(responseData.message)
							   .fadeIn(200,function(){
								   //set timeout to hide response message
								   setTimeout(function(){
									   responseMsg.fadeOut(200,function(){
									       $(this).removeClass(klass);
										   form.data('formstatus','idle');
									   });
								   },3000)
								});
					});
				}
			});
		}
		
		return false;
	});
	
}  



$(document).ready(function() {

	// Easing style
	jQuery.easing.def = "easeOutQuad";
	// Focus on the home section
	$('#wrapper').scrollTo($('#section_home'), 0);
	// Scroll Bars
	$('.scrollpane').jScrollPane({
		verticalDragMinHeight: 11,
		verticalDragMaxHeight: 11,
		autoReinitialise: true
	});
	// Fade on Mouse Hover
	elementsHover();
	// Countdown
	countdown();
	// Contact Form
	contactform();
	// Newsletter
	newsletter();
	// Colorbox
	$(".gallery1").colorbox({rel:'gallery1', transition:"fade"});
	// Page Scroller
	scrollSections();
	// Top Navigation Highlight
	navigateSections();
	// Resize the containers on window resize
    $(window).resize(function() {
		resizePanel();
    }); 
	// Demo Only
	$(".trigger").click(function(){
		$(".panel").toggle("fast");
		return false;
	});

});

