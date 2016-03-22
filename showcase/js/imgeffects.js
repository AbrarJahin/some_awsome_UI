
// Sliding Doors Effect


$(document).ready(function() {
	  $('.box_container').hover(function(){
		  var distance = $(this).outerWidth();
		  $(this).find('.box_image').animate({ left : distance },{queue:false,duration:500});
	  }, function(){
		  $(this).find('.box_image').animate({ left : '0px' },{queue:false,duration:500});
	  });      
	  
	  $('.box_container2').hover(function(){
		  var distance = $(this).outerWidth();
		  $(this).find('.box_image2').animate({ left : '-'+distance },{queue:false,duration:500});
	  }, function(){
		  $(this).find('.box_image2').animate({ left : '0px' },{queue:false,duration:500});
	  });      
	  
	  $('.box_container3').hover(function(){
		  var distance = $(this).outerHeight();
		  $(this).find('.box_image3').animate({ top : distance },{queue:false,duration:500});
	  }, function(){
		  $(this).find('.box_image3').animate({ top : '0px' },{queue:false,duration:500});
	  });      
	  
	  $('.box_container4').hover(function(){
		  var distance = $(this).outerWidth();
		  $(this).find('.box_image4').animate({ top : '-' + distance },{queue:false,duration:500});
	  }, function(){
		  $(this).find('.box_image4').animate({ top : '0px' },{queue:false,duration:500});
	  });      
	  
	  $('.box_container5').hover(function(){
		  var distance = $(this).outerWidth();
		  $(this).find('.box_image5').animate({ top : '-' + distance, left : '-'+distance },{queue:false,duration:500});
	  }, function(){
		  $(this).find('.box_image5').animate({ top : '0px', left : '0px' },{queue:false,duration:500});
	  });      
	  
	  $('.box_container6').hover(function(){
		  var distance = $(this).outerWidth();
		  $(this).find('.box_image6').animate({ top : '-' + distance, left : distance },{queue:false,duration:500});
	  }, function(){
		  $(this).find('.box_image6').animate({ top : '0px', left : '0px' },{queue:false,duration:500});
	  });      
	  
	  $('.box_container7').hover(function(){
		  var distance = $(this).outerWidth();
		  $(this).find('.box_image7').animate({ top : distance, left : '-'+distance },{queue:false,duration:500});
	  }, function(){
		  $(this).find('.box_image7').animate({ top : '0px', left : '0px' },{queue:false,duration:500});
	  });      
	  
	  $('.box_container8').hover(function(){
		  var distance = $(this).outerWidth();
		  $(this).find('.box_image8').animate({ top : distance, left : distance },{queue:false,duration:500});
	  }, function(){
		  $(this).find('.box_image8').animate({ top : '0px', left : '0px' },{queue:false,duration:500});
	  });      
});



// Simple Fading Effect


$(document).ready(function(){
	$(".fade_top").hover(
		function() {
		$(this).stop().animate({"opacity": "0"}, "slow");
	},
		function() {
		$(this).stop().animate({"opacity": "1"}, "slow");
	});
});



// Full Caption Effect


$(document).ready(function() {
	//move the image in pixel
	var move = -15;
	//zoom percentage, 1.2 =120%
	var zoom = 1.2;
	//On mouse over those thumbnail
	$('.full_caption').hover(function() {
		//Set the width and height according to the zoom percentage
		width = $('.full_caption').width() * zoom;
		height = $('.full_caption').height() * zoom;
		//Move and zoom the image
		$(this).find('img').stop(false,true).animate({'width':width, 'height':height, 'top':move, 'left':move}, {duration:200});
		//Display the caption
		$(this).find('div.caption_text').stop(false,true).fadeIn(200);
	},
	function() {
		//Reset the image
		$(this).find('img').stop(false,true).animate({'width':$('.full_caption').width(), 'height':$('.full_caption').height(), 'top':'0', 'left':'0'}, {duration:100});	
		//Hide the caption
		$(this).find('div.caption_text').stop(false,true).fadeOut(200);
	});
});



// Other Caption Effects


(function($) {
	$.fn.capslide = function(options) {
		var opts = $.extend({}, $.fn.capslide.defaults, options);
		return this.each(function() {
			$this = $(this);
			var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
			
			if(!o.showcaption)	$this.find('.img_caption').css('display','none');
			else $this.find('.text_caption').css('display','none');
				
			var _img = $this.find('img:first');
			var w = _img.css('width');
			var h = _img.css('height');
			$('.img_caption',$this).css({'color':o.caption_color,'background-color':o.caption_bgcolor,'bottom':'0px','width':w});
			$('.overlay',$this).css('background-color',o.overlay_bgcolor);
			$this.css({'width':w , 'height':h, 'border':o.border});
			$this.hover(
				function () {
					if((navigator.appVersion).indexOf('MSIE 7.0') > 0)
					$('.overlay',$(this)).show();
					else
					$('.overlay',$(this)).fadeIn();
					if(!o.showcaption)
						$(this).find('.img_caption').slideDown(500);
					else
						$('.text_caption',$(this)).slideDown(500);	
				},
				function () {
					if((navigator.appVersion).indexOf('MSIE 7.0') > 0)
					$('.overlay',$(this)).hide();
					else
					$('.overlay',$(this)).fadeOut();
					if(!o.showcaption)
						$(this).find('.img_caption').slideUp(200);
					else
						$('.text_caption',$(this)).slideUp(200);
				}
			);
		});
	};
	$.fn.capslide.defaults = {
		caption_color	: 'white',
		caption_bgcolor	: 'black',
		overlay_bgcolor : 'blue',
		border			: '1px solid #fff',
		showcaption	    : true
	};
})(jQuery);


$(function() {
	$("#capslide1").capslide({
		caption_color	: 'white',
		caption_bgcolor	: 'black',
		overlay_bgcolor : 'black',
		showcaption	    : false
	});
	$("#capslide2").capslide({
		caption_color	: 'black',
		caption_bgcolor	: '#f68a21',
		overlay_bgcolor : '#f68a21',
		border			: '',
		showcaption	    : false
	});
	$("#capslide3").capslide({
		caption_color	: 'black',
		caption_bgcolor	: 'white',
		overlay_bgcolor : '#832EA5',
		showcaption	    : true
	});
});
