document.addEventListener("DOMContentLoaded", function () {
  // Basic Swiper
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".mySwiper .swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  // Navigation Swiper
  var swiperNav = new Swiper(".navigationSwiper", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".navigationSwiper .swiper-pagination",
      dynamicBullets: true,
    },
  });

  // Responsive Swiper
  var swiperResponsive = new Swiper(".responsiveSwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: ".responsiveSwiper .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  });

  // Effect Coverflow Swiper
  var swiperEffect = new Swiper(".effectSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".effectSwiper .swiper-pagination",
    },
    initialSlide: 2,
  });

  // Cube Effect Swiper
  var swiperCube = new Swiper(".cubeSwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".cubeSwiper .swiper-pagination",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  // Cards Effect Swiper
  var swiperCards = new Swiper(".cardsSwiper", {
    effect: "cards",
    grabCursor: true,
    cardsEffect: {
      perSlideOffset: 10,
      perSlideRotate: 2,
      rotate: true,
      slideShadows: true,
    },
  });
});
