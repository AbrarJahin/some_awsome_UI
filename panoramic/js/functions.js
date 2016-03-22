function scrollSections() {
	$('a.scrollitem').click(function () {
		$('a.scrollitem').removeClass('selected');
		$(this).addClass('selected');
		$('.toggle').css({'display':'none'});
		$('#wrapper').scrollTo($(this).attr('href'), 1200, function(){
			$('.toggle').css({'display':'block'});
		});
		return false;
	});
}  

function resizePanel() {
	// What happens if we resize the window...
	// Get dimensions
	width = $(window).width();
	height = $(window).height();
	mask_width = width * $('.item').length;
	// Resize the content
	$('#wrapper, .item').css({width: width, height: height});
	$('#mask').css({width: mask_width, height: height});
	// Keep the current section visible (and don't jump back)
	$('#wrapper').scrollTo($('a.selected').attr('href'), 0);
}  

function toggleContent() {
	// When we click on a toggle button (the '+' and '-')
	$('.toggle_button').click(function () {
		// The content hides or show
		$('.container').toggle(300);
		// The buttons class is updated
		$('.toggle_button').toggleClass("active"); 
		return false;
	})
} 

function dropdownMenu() {
	// Hiding all drop downs
	$('#menu .dropdown ul').hide();
	// When hovering the menu
	$('#menu .dropdown').hover(function() {
		// Fading the drop down
		$(this).children('ul').stop().fadeTo(400, 1);
		}, function () { 
		// And hide once the mouse is out
		$(this).children('ul').hide();
	});
} 

function filterableGallery() {
	$('.selecter').mobilyselect({
		collection: 'all',
		animation: 'absolute',
		duration: 500,
		listClass: 'selecterContent',
		btnsClass: 'selecterBtns',
		btnActiveClass: 'active',
		elements: 'li',
		onChange: function(){},
		onComplete: function(){}
	});
}  

function twitterFeed() {
	$(".tweet").tweet({
		username: "keliahdesign", // Enter your username
		join_text: "auto", // If you want texts, see below
		avatar_size: 38, // In pixels
		count: 2, // How many tweets
		auto_join_text_default: "",
		auto_join_text_ed: "",
		auto_join_text_ing: "",
		auto_join_text_reply: "",
		auto_join_text_url: "",
		loading_text: "Loading tweets..."
	});
}  

function flickrFeed() {
	$('#flickrfeed').jflickrfeed({
		limit: 6, // Number of pictures to display
		qstrings: {
			id: '99771506@N00' // Your ID comes here
		},
		// Each image is wrapped with the Colorbox plugin and open the lightbox on click
		itemTemplate: '<div>'+
						'<a rel="flickr" href="{{image}}" title="{{title}}">' +
							'<img src="{{image_s}}" alt="{{title}}" />' +
						'</a>' +
					  '</div>'
	}, function(data) {
		$('#flickrfeed a').colorbox();
	}); 
}  

function colorBox() {
	// For the Colorbox effects and usage, see the portfolio, gallery and typography sections
	// Single Images (with the rel='nofollow')
	$("a[rel='single']").colorbox({rel:'nofollow'});
	// Elastic Effect (use rel='elastic')
	$("a[rel='elastic']").colorbox();
	// Grouping Flickr stream Images with the fade effect (use rel='flickr')
	$("a[rel='flickr']").colorbox({transition:"fade"});
	// Fade Effect (use rel='fade')
	$("a[rel='fade']").colorbox({transition:"fade"});
	// Slideshow Effect (use rel='slideshow')
	$("a[rel='slideshow']").colorbox({slideshow:true});
}  


$(document).ready(function () {

	// Easing style
	jQuery.easing.def = "easeInOutQuart";
	// Hiding the scrollbars (so they are visible if JS is disabled
	$('.container').css({'overflow': 'hidden'});
	// Calling Functions
	toggleContent();
	dropdownMenu();
	filterableGallery();
	twitterFeed();
	flickrFeed();
	colorBox();
	scrollSections();
	// Resize the containers on window resize
    $(window).resize(function() {
		resizePanel();
    }); 


});


