/*woooooooooooooow*/
wow = new WOW({
	animateClass: 'animated',
	offset: 100,
	callback: function (box) {
		console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
	}
});
wow.init();

/******************swiper***************************/
var swiper = new Swiper('.swiper-container', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	coverflowEffect: {
		rotate: 60,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true,

	},
	pagination: {
		el: '.swiper-pagination',
	},
});
/****************owl-carousel*******************/

$('.owl-carousel').owlCarousel({
	items: 5,
	autoplay: true,
	loop: true,
	margin: 18,
	merge: true,
	responsive: {

		0: {
			items: 1
		}

		,

		600: {
			items: 2
		},

		1000: {
			items: 3
		}


	}


});