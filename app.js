var swiper = new Swiper(".mySwiper", {
    slidesPerView: 10,
    spaceBetween: 0,
    freeMode: true,
    breakpoints: {
        700: {
          slidesPerView: 5,
          spaceBetween: 0
        },
      }
  });