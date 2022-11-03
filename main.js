
//preloder //

// window.addEventListener("load", function () {
//     const loader = document.querySelector(".loader");
//     loader.className += " hidden"; // class "loader hidden"
// });


//preloder //

// <!-- Initialize Swiper  start-->

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    991: {
        slidesPerView: 3,
    },
},
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
// <!-- Initialize Swiper end -->




// counting days to new year
const countDownDateTime = new Date(2023, 1, 1, 0, 0, 0).getTime();
const daysValue = document.querySelector("#days");
const hoursValue = document.querySelector("#hours");
const minutesValue = document.querySelector("#minutes");
const secondsValue = document.querySelector("#seconds");
// run this function every 1000 ms or 1 second
let x = setInterval(function () {
 const dateTimeNow = new Date().getTime();
 let difference = countDownDateTime - dateTimeNow;
 // calculating time and assigning values
 daysValue.innerHTML = Math.floor(difference / (1000 * 60 * 60 * 24));
 hoursValue.innerHTML = Math.floor(
 (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
 );
 minutesValue.innerHTML = Math.floor(
 (difference % (1000 * 60 * 60)) / (1000 * 60)
 );
 secondsValue.innerHTML = Math.floor((difference % (1000 * 60)) / 1000);
 if (difference < 0) {
 clearInterval(x);
 }
}, 1000);
// team section //
var swiper = new Swiper(".team-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween:20,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      991: {
          slidesPerView: 4,
      },
  },
});

/* <!-- testmonial section start --> */

var swiper = new Swiper(".testmonial-swiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
/* <!-- testmonial section start --> */
// bvhxvjb//
var swiper = new Swiper(".myautoSwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
0: {
    slidesPerView: 1,
},
768: {
    slidesPerView: 2,
},
991: {
    slidesPerView: 5,
},
},

});