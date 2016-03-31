

function countdownArcs() { 

	$("canvas")
		.drawArc({
			layer: true,
			name: "days",
			strokeStyle: "rgba(101,127,129,0.2)",
			strokeWidth: 17,
			x: 71, 
			y: 100,
			radius: 63,
			start: 0,
			end:10
		})
		.drawArc({
			layer: true,
			name: "hours",
			strokeStyle: "rgba(101,127,129,0.2)",
			strokeWidth: 17,
			x: 257, 
			y: 100,
			radius: 63,
			start: 0,
			end:10
		})
		.drawArc({
			layer: true,
			name: "minutes",
			strokeStyle: "rgba(101,127,129,0.2)",
			strokeWidth: 17,
			x: 437, 
			y: 100,
			radius: 63,
			start: 0,
			end:10
		})
		.drawArc({
			layer: true,
			name: "seconds",
			strokeStyle: "rgba(101,127,129,0.2)",
			strokeWidth: 17,
			x: 617, 
			y: 100,
			radius: 63,
			start: 0,
			end:10
		})
				
}



function countdownAnimation() { 

	$("canvas")
		.animateLayer("days", {
			end:$('#countdown_timer ul li.days em').text() * 0.9863
		}, "fast", "swing")
		.animateLayer("hours", {
			end:$('#countdown_timer ul li.hours em').text() * 15
		}, "fast", "swing")
		.animateLayer("minutes", {
			end:$('#countdown_timer ul li.minutes em').text() * 6
		}, "fast", "swing")
		.animateLayer("seconds", {
			end:$('#countdown_timer ul li.seconds em').text() * 6
		}, "fast", "swing")
				
}



function countdownTimer() { 

	$('#countdown_timer').countdown({
		// new Date(year, mth - 1 (april = 4 - 1 = 3), day, hr, min, sec) - date/time to count down to 
		// or numeric for seconds offset, or string for unit offset(s): 
		until: new Date(2016, 7, 26, 17), 
		timezone: 1,
		layout: 
			'<ul id="counter_first">' +
			'{d<}<li class="days"><em>{dn}</em> Days</li>{d>}' +
			'{h<}<li class="hours"><em>{hn}</em> Hours</li>{h>}' +
			'</ul><ul id="counter_second">' + 
			'{m<}<li class="minutes"><em>{mn}</em> Minutes</li>{m>}' +
			'{s<}<li class="seconds"><em>{sn}</em> Seconds</li>{s>}' +
			'</ul>',
		onTick: function() {
			countdownAnimation();		
		}

	});
	if(($('#countdown_timer ul li.days em').text()) == 0){
		$('#countdown_clock, #countdown_timer').css('margin-left', '-86px');
	}
				
}



function barGraphs() { 

	arrayOfData = new Array(
		 [90,'Design','#d4d9da'],
		 [55,'Coding','#c2c9ca'],
		 [70,'Print','#afb9bb'],
		 [80,'Logo','#9da9ab']
	);
	$('#graph').jqBarGraph({
		data: arrayOfData, // array of data for your graph
		title: false, // title of your graph, accept HTML
		barSpace: 15, // this is default space between bars in pixels
		width: 'auto', // default width of your graph
		height: 215, //default height of your graph
		position: 'bottom', // position of your bars, can be 'bottom' or 'top'. 'top' doesn't work for multi type
		prefix: '', // text that will be shown before every label
		postfix: '%', // text that will be shown after every label
		animate: false, // if you don't need animated appearance change to false
	}); 
				
}



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



function contactForm() { 

	$.fn.cleardefault = function() {
		return this.focus(function() {
			if( this.value == this.defaultValue ) {
				this.value = "";
			}
		}).blur(function() {
			if( !this.value.length ) {
				this.value = this.defaultValue;
			}
		});
	};
	$("#newsletter_email, #name, #email").cleardefault();
	
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
//					if(data.match('success') != null) $('#contactform').slideUp('slow');
				}
			);
		});
		return false; 
		
	});

}



function googleMap() { 

        $('#map').gmap3({
          marker:{
            address: "37 place Louis Lépine 75004 Paris"
          },
          map:{
            options:{
              zoom: 14
            }
          }
        });

}



$(document).ready(function() {


	countdownArcs();
	countdownTimer();
	barGraphs();
	newsletter();
	contactForm();
	googleMap();
	$("#tabs").organicTabs();


});


