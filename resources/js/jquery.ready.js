$( document ).ready(function() {
	jQuery("#gallery").unitegallery({
		gallery_theme: "tiles",
		tiles_type: "nested"					
	});
	$('.slider').sss({
		slideShow: true,
		startOn: 0,
		transition: 900,
		speed: 6000,
		showNav: true
	});
	//$('.top.child').on('mouseenter', function () {
//		$(this).children().slideDown();
//	});
//	$('.dropdown, .top.child').on('mouseleave', function () {
//		$('.dropdown', this).stop(true).slideUp();
//	});
//	$('.top.child').on('tap', function () {
//		$(this).children().slideDown();
//	});
	$('.mobiletoggle').on('click', function () {
		$('nav').toggleClass('active');
	});
	$('.mobiletoggle').on('tap', function () {
		$('nav').toggleClass('active');
	});
	$('.mobiletoggle').on('click', function () {
		$('.mobiletoggle').toggleClass('toggle');
	});
});