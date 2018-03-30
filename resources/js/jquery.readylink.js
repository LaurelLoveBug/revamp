$( document ).ready(function() {
	jQuery("#gallery").unitegallery({
		gallery_theme: "tiles",
		tiles_type: "nested",
		tile_as_link: true
	});
	$('.slider').sss({
		slideShow: false,
		startOn: 0,
		transition: 600,
		speed: 4000,
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