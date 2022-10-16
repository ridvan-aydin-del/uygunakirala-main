var swiper = new Swiper(".mySwiper1", { 
    spaceBetween: 0,
    centeredSlides: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
          
      },
      700:{
        slidesPerView: 2,
      },
      991:{
        slidesPerView: 4,
      },
      }, 
  }); 