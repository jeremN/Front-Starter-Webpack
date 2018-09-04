console.log('webpack running')

//require('../sass/style.scss')

import '../img/favicon/apple-icon.png'
import '../sass/style.scss'
import $script from '../scripts/vendors/script.js'
import initSlide from '../scripts/modules/sliders.js'

document.addEventListener('DOMContentLoaded', () => {

	/***
	Sliders
	***/

	//Sliders parameters
	const articleSlider = {

		container: '.sliceNewArticles-slider',
		slides: 'sliceNewArticles-slide',
		min: 3,
		nextBtn: '.sliceNewArticles-slider > .btn-next',
		prevBtn: '.sliceNewArticles-slider > .btn-prev',
		breakpoints: {
			992: {
				slidesPerView: 3
			},
			768: {
				slidesPerView: 2
			},
			520: {
				slidesPerView: 1
			},
			320: {
				slidesPerView: 1
			}
		}

	};
	const jobsSlider = {

		container: '.sliceJobOffers-slider',
		slides: 'sliceJobOffers-slide',
		min: 4,
		nextBtn: '.sliceJobOffers-slider > .btn-next',
		prevBtn: '.sliceJobOffers-slider > .btn-prev',
		breakpoints: {
			1200: {
				slidesPerView: 4
			},
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

	let sliders = [articleSlider, jobsSlider];

	//Display sliders

	const initSwiper = async function() {

		await $script('https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.2.6/js/swiper.min.js', () => {

			for (let slider of sliders) {

				initSlide(slider);
			}
		});
	}

	let slider = document.querySelector('.swiper-container');
	if(slider) { initSwiper(); }
})

