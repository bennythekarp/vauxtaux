$(document).ready(function() {

$('#chris').hover(
	function() {
		$('#chris1').hide().fadeOut();
		$('#chris2').show().fadeIn();
	},
	function() {
		$('#chris2').hide();
		$('#chris1').show();
	});

});