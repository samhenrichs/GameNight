$(document).ready(function() {
	$('.overlay').hide(0);
	$('.info').hide(0);
	$('#ghtrigger').click(function() {
		$('.overlay').fadeIn(250);
		$('.overlay').css('display', 'flex');
		$('.game-helpers').css('display', 'block');
	});
	$('#itrigger').click(function() {
		$('.overlay').fadeIn(250);
		$('.overlay').css('display', 'flex');
		$('.instructions').css('display', 'block');
	});
	$('#ettrigger').click(function() {
		$('.overlay').fadeIn(250);
		$('.overlay').css('display', 'flex');
		$('.tips').css('display', 'block');
	});
	$('#close-trigger').click(function() {
		$('.overlay').fadeOut(250);
		$('.info').css('display', 'none');
	});
});