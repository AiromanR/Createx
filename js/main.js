$(function () {

   var mixer = mixitup('.directions__list');

   $('.directions__filter-btn').on('click', function () {
      $('.directions__filter-btn').removeClass('directions__filter-btn--active')
      $(this).addClass('directions__filter-btn--active')
   })

   $('.team__slider').slick({
      arrows: false,
      slidesToShow: 4,
      infinite: true,
      draggable: false,
      responsive: [
         {
            breakpoint: 1100,
            settings: {
               slidesToShow:3,
            },
         },
         {
            breakpoint: 750,
            settings: {
               slidesToShow:2,
            },
         },
         {
            breakpoint: 550,
            settings: {
               slidesToShow:1,
               draggable: true,
            },
         },
      ],

      dots: true,
      appendDots: $('.team__slider-dots'),
      customPaging: function (slider, i) {
         return '<a href="#"><img src="/images/icons/dot.svg" /><img src="/images/icons/dot-circle.svg" /></a>';
      },
   })
   $('.team__slider-dots').on('click', function (e) {
      e.preventDefault()
   })

   $('.team__slider-prev').on('click', function (e) {
      e.preventDefault()
      $('.team__slider').slick('slickPrev')
   })

   $('.team__slider-next').on('click', function (e) {
      e.preventDefault()
      $('.team__slider').slick('slickNext')
   })


   
   $('.testimonials__slider').slick({
      arrows: false,
      dots: true,
      appendDots: $('.testimonials__dots'),
   })

   $('.testimonials__prev').on('click', function (e) {
      e.preventDefault()
      $('.testimonials__slider').slick('slickPrev')
   })

   $('.testimonials__next').on('click', function (e) {
      e.preventDefault()
      $('.testimonials__slider').slick('slickNext')
   })

   // $(this).children('.program__acc-text').slideToggle()

   $('.program__acc-link').on('click', function (e) {
      e.preventDefault()
      if ($(this).hasClass('program__acc-link--active')) {
         $(this).removeClass('program__acc-link--active')
         $('.program__acc-text').slideUp()
      }
      else {
         $('.program__acc-link').removeClass('program__acc-link--active')
         $('.program__acc-text').slideUp()
         $(this).children('.program__acc-text').slideDown()
         $(this).toggleClass('program__acc-link--active')
      }
   })
   $('.header__nav-list a, .header__btn-box a, .footer__bottom-inner a').on("click", function (e) {
      //отменяeм стандартную обработку нажатия по ссылке
      e.preventDefault();
      //забираем идентификатор бока с атрибута href
      var id = $(this).attr('href'),
         //узнаем высоту от начала страницы до блока на который ссылается якорь
         top = $(id).offset().top;
      //анимируем переход на расстояние - top за 800 мс
      $('body,html').animate({ scrollTop: top }, 800);
   });

   setInterval(() => {
      if ($(window).scrollTop() > 0 && !$('.header__top').hasClass('header__top--open')) {
         $('.burger').addClass('burger--follow')
      } else {
         $('.burger').removeClass('burger--follow')
      }
   }, 0);

   setInterval(() => {
      if ($(window).width()> 550) {
         $('.footer__top-title--open').addClass('footer__top-title--visible')
         $('.footer__top-list').css('display', 'block');
      } else {
         $('.footer__top-title--open').removeClass('footer__top-title--visible')
      }
   }, 0);


   $('.burger, .overlay, .header__nav-list a').on('click', function (e) {
      e.preventDefault()
      $('.header__top').toggleClass('header__top--open')
      $('.burger').toggleClass('burger--active')
      $('.overlay').toggleClass('overlay--show')
   })

   $('.footer__top-title--open').on('click', function () {
      $(this).next().slideToggle();
   })
})