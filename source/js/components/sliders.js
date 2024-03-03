import Swiper from "../vendor/swiper";
import vars from "../_vars";

const {
  quizSliders,
  reviewsSliders,
  servicesSwiper,
  consultantSlider
} = vars;

if (reviewsSliders) {
  reviewsSliders.forEach((reviewsSlider)=> {
    const slider = reviewsSlider.querySelector('.swiper-container');
    const items = reviewsSlider.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)');
    const sliderPrev = reviewsSlider.querySelector('.swiper-button-prev');
    const sliderNext = reviewsSlider.querySelector('.swiper-button-next');

    items.length && new Swiper(slider, {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      watchSlidesProgress: true,
      slidesPerView: 3,
      slidesPerColumn: 3,

      navigation: {
        nextEl: sliderNext && sliderNext,
        prevEl: sliderPrev && sliderPrev,
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },

        576: {
          slidesPerView: 2,
          slidesPerColumn: 3,
        },

        1240: {
          slidesPerView: 3,
          slidesPerColumn: 3,
        }
      }

    });
  })
}

if (quizSliders) {
  quizSliders.forEach((quizSlider)=> {
    const slider = quizSlider.querySelector('.swiper-container');
    const items = quizSlider.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)');
    const sliderPrev = quizSlider.querySelector('.swiper-button-prev');
    const sliderNext = quizSlider.querySelector('.swiper-button-next');

    let slideToShow = 5;
    let loopFlag = true;
    let centeredSlides = true;

    if (items.length <= 5) {
      loopFlag = false;
      centeredSlides = false;
      slideToShow = items.length
    }


    items.length && new Swiper(slider, {
      slidesPerView: slideToShow,
      loop: loopFlag,
      speed: 1000,
      spaceBetween: 0,
      centeredSlides: centeredSlides,
      observer: true,
      observeParents: true,
      watchOverflow: true,
      watchSlidesProgress: true,


      navigation: {
        nextEl: sliderNext && sliderNext,
        prevEl: sliderPrev && sliderPrev,
      },

      breakpoints: {
        0: {
          slidesPerView: 1.2,
          centeredSlides: centeredSlides,
        },

        415: {
          slidesPerView: 1.5,
        },

        577: {
          slidesPerView: 2,
          centeredSlides: false,
        },

        768: {
          slidesPerView: 2.5,
          centeredSlides: centeredSlides,
        },

        1024: {
          slidesPerView: 3.5,
        },

        1240: {
          slidesPerView: 4,
        },

        1440: {
          slidesPerView: slideToShow,
        }
      }

    });
  })
}

if (servicesSwiper) {
  servicesSwiper.forEach((services)=> {
    const slider = services.querySelector('.swiper-container');
    const items = services.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)');
    const sliderPrev = services.querySelector('.swiper-button-prev');
    const sliderNext = services.querySelector('.swiper-button-next');

    items.length && new Swiper(slider, {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      watchSlidesProgress: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 75,
      initialSlide: 1,
      loop: true,
      autoHeight: true,

      navigation: {
        nextEl: sliderNext && sliderNext,
        prevEl: sliderPrev && sliderPrev,
      },

      breakpoints: {
        0: {
          spaceBetween: 10,
        },

        576: {
          spaceBetween: 20,
        },

        1240: {
          spaceBetween: 75,
        }
      }

    });
  })
}

if (consultantSlider) {
  consultantSlider.forEach((sliderBox)=> {
    const slider = sliderBox.querySelector('.swiper-container');
    const items = sliderBox.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)');
    const sliderPrev = sliderBox.querySelector('.swiper-button-prev');
    const sliderNext = sliderBox.querySelector('.swiper-button-next');

    new Swiper(slider, {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      watchSlidesVisibility: true,
      slidesPerView: 5,
      centeredSlides: true,
      spaceBetween: 20,
      slideVisibleClass: 'swiper-slide-visible',
      loop: true,

      navigation: {
        nextEl: sliderNext && sliderNext,
        prevEl: sliderPrev && sliderPrev,
      },
      breakpoints: {
        0: {
          slidesPerView: 1.4,
        },

        576: {
          slidesPerView: 2,
        },

        1025: {
          spaceBetween: 20,
          slidesPerView: 3.5,
        },

        1240: {
          slidesPerView: 5,
        }
      },
      on: {
        click: function () {
          let clickedIndex = this.clickedIndex;
          if (typeof clickedIndex !== 'undefined') {
            this.slideTo(clickedIndex);
          }
        }
      }
    });

  })
}













