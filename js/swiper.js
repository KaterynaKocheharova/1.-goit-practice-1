// let ingredientsSwiper;
// let topSellersSwiper;
// let reviewsSwiper;

// if(window.innerWidth <= 375 && window.innerWidth <= 767) {
//   ingredientsSwiper = new Swiper('.ingredients-swiper', {
//     pagination: {
//       el: '.swiper-pagination',
//       dynamicBullets: true,
//     },
//   });

//   topSellersSwiper = new Swiper('.top-sellers-swiper', {
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });

//   reviewsSwiper = new Swiper('.reviews-swiper', {
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });
// }

// if(window.innerWidth >= 768 && window.innerWidth <= 1135) {
//   topSellersSwiper = new Swiper('.top-sellers-swiper', {
//     slidesPerView: 2,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });

//   reviewsSwiper = new Swiper('.reviews-swiper', {
//     slidesPerView: 2,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });
// }

// const swiperPagination = document.querySelector(".swiper-pagination")
let ingredientsSwiper;
let topSellersSwiper;
let reviewsSwiper;

function initializeSwipers() {
  if (window.innerWidth <= 767) {
    ingredientsSwiper = new Swiper('.ingredients-swiper', {
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    });

    topSellersSwiper = new Swiper('.top-sellers-swiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    reviewsSwiper = new Swiper('.reviews-swiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  if (window.innerWidth >= 768 && window.innerWidth <= 1135) {
    topSellersSwiper = new Swiper('.top-sellers-swiper', {
      slidesPerView: 2,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    reviewsSwiper = new Swiper('.reviews-swiper', {
      slidesPerView: 2,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}

// Initial execution
initializeSwipers();

// // Event listener for window resize
// window.addEventListener('resize', function() {
//   // Destroy existing Swiper instances if any
//   if (ingredientsSwiper) {
//     ingredientsSwiper.destroy();
//     swiperPagination.style.display = none;
//     ingredientsSwiper = null;
//   }
//   if (topSellersSwiper) {
//     topSellersSwiper.destroy();
//     swiperPagination.style.display = none;
//     topSellersSwiper = null;
//   }
//   if (reviewsSwiper) {
//     reviewsSwiper.destroy();
//     swiperPagination.style.display = none;
//     reviewsSwiper = null;
//   }
//   // Re-initialize Swipers
//   initializeSwipers();
// });