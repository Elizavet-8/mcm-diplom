document.addEventListener("DOMContentLoaded", function () {

	const swiperIMG = new Swiper('.slider-img', {
		direction: 'vertical',
		loop: false,
		speed: 2400,
		parallax: true,
	});

	const swiperTxt = new Swiper('.slider-txt', {
		direction: 'vertical',
		loop: false,
		speed: 2400,
		// mousewheel: {
		// 	invert: false,
		// },
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		}
	});

	swiperIMG.controller.control = swiperTxt
	swiperTxt.controller.control = swiperIMG

	const swiper = new Swiper('.sro-cooperation__list', {
		slidesPerView: 3,
		speed: 400,
		spaceBetween: 16,
		breakpoints: {
			310: {
				slidesPerView: 1,
			},
			640: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			1240: {
				slidesPerView: 3,
			},
			1650: {
				slidesPerView: 3,
			},
		}
	});


	var menu = ['1', '2', '3', '4']
	var mySwiper = new Swiper ('.addservices-slider', {
		 // If we need pagination
		 pagination: {
			el: '.swiper-pagination',
				clickable: true,
			  renderBullet: function (index, className) {
				 return '<span class="' + className + '">' + (menu[index]) + '</span>';
			  },
		 },
		 speed: 2400,
		 // Navigation arrows
		 navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		 },
	  })


	const swiperSamples = new Swiper('.samples-slider', {
		slidesPerView: 3,
		speed: 1000,
		spaceBetween: 33,
		navigation: {
			nextEl: '.swiper-button-next-unique',
			prevEl: '.swiper-button-prev-unique'
		 },
		breakpoints: {
			310: {
				slidesPerView: 1,
			},
			640: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			1240: {
				slidesPerView: 3,
			},
			1650: {
				slidesPerView: 3,
			},
		}
	});

	/*Dropdown Menu*/
	$('.dropdown').click(function () {
		$(this).attr('tabindex', 1).focus();
		$(this).toggleClass('active');
		$(this).find('.dropdown-menu').slideToggle(300);
	});
	$('.dropdown').focusout(function () {
		$(this).removeClass('active');
		$(this).find('.dropdown-menu').slideUp(300);
	});
	$('.dropdown .dropdown-menu li').click(function () {
		$(this).parents('.dropdown').find('span').text($(this).text());
		$(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
	});
	/*End Dropdown Menu*/


	$(document).ready(function () {
		$("#btn").on("click", "a", function (event) {
			event.preventDefault();
			var id = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({ scrollTop: top }, 1500);
		});
	});
	$(document).ready(function () {
		$("#btn-first").on("click", "a", function (event) {
			event.preventDefault();
			var id = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({ scrollTop: top }, 1500);
		});
	});


})


