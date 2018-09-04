const defaultOptions = {

	container: '.swiper-container',
	slides: 'swiper-slide',
	min: 3,
	nextBtn: '.swiper-container > .btn-next',
	prevBtn: '.swiper-container > .btn-prev',
	breakpoints: {
		992: {
			slidesPerView: 3
		},
		768: {
			slidesPerView: 2
		},
		320: {
			slidesPerView: 1
		}
	}
};

function initSlide(options) {

	options = !options ? defaultOptions : options;

	if( document.getElementsByClassName(options.slides).length > options.min ) {

		document.querySelector(options.container).classList.remove('no-swiper');

		let homeJobSlider = new Swiper( options.container, {

			slidesPerView: options.min,
			navigation: {
				nextEl: options.nextBtn,
				prevEl: options.prevBtn
			},
			breakpoints: options.breakpoints,

		});
	}
}

export default initSlide;

/*
$(".swiper-container").each(function(index, element){
    var $this = $(this);
    $this.addClass("instance-" + index);
    $this.find(".swiper-button-prev").addClass("btn-prev-" + index);
    $this.find(".swiper-button-next").addClass("btn-next-" + index);
    var swiper = new Swiper(".instance-" + index, {
        // your settings ...
        nextButton: ".btn-next-" + index,
        prevButton: ".btn-prev-" + index
    });
});
*/