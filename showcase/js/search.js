$(function() {
	var $ui 		= $('#ui_element');
	$ui.find('.sb_input').bind('focus click',function(){
		$ui.find('.sb_dropdown')
		   .show();
	});
	$ui.bind('mouseleave',function(){
		$ui.find('.sb_dropdown')
		   .hide();
	});
	$ui.find('.sb_dropdown').find('label[for="all"]').prev().bind('click',function(){
		$(this).parent().siblings().find(':checkbox').attr('checked',this.checked).attr('disabled',this.checked);
	});
});
