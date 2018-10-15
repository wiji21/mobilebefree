$('.owl-one').owlCarousel({
	loop: true,
	margin: 10,
	autoplay: true,
	autoplayHoverPause: true,
	autoplayTimeout: 3000,
	Item_Width: 100,
	navigation : true,
	dots: true,
	animateIn: true,
	navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	responsive: {
		0: {
			items: 1,
			nav: true,
		},
		600: {
			items: 2,
			nav: true,
		},
		1000: {
			items: 3,
			nav: true,
		}
	}
})

$('.owl-full').owlCarousel({
	loop: true,
	margin: 0,
	autoplay: true,
	autoplayHoverPause: true,
	autoplayTimeout: 3000,
	Item_Width: 100,
	navigation : true,
	dots: true,
	animateIn: true,
	navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	items: 1,
})
