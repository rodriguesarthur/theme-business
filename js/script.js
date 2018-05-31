$(document).ready(function(){

	$('#link-about').click(function(){
		$('html, body').animate({
			scrollTop: $('div#about').offset().top
		}, 1000);
	});

	$('#link-works').click(function(){
		$('html, body').animate({
			scrollTop: $('div#works').offset().top
		}, 1000);
	});

	$('#link-contact').click(function(){
		$('html, body').animate({
			scrollTop: $('div#contact').offset().top
		}, 1000);
	});

});