var swiper = new Swiper(".mySwiper", { 
    spaceBetween: 0,
    centeredSlides: false,
    breakpoints: {
        0: {
          slidesPerView: 1,
          
        },
        700:{
            slidesPerView: 5,
        },
        991:{
            slidesPerView: 10,
        },
      },
       
    
  }); 
  var swiper1 = new Swiper1(".mySwiper s1", { 
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