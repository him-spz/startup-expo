const arrowBtnLeft = document.querySelector(".btn-arrow-left");
const arrowBtnRight = document.querySelector(".btn-arrow-right");

const slides = document.querySelectorAll(".container .slide");
const dotsContainer = document.querySelector(".dots");

let curSlide = 0;

// functions
// const goToSlide = (slide) => {
//   slides.forEach((s, i) => {
//     s.style.transform = `translateX(${100 * (i - slide)}%)`;
//   });
// };

// const nextSlide = function () {
//   curSlide === slides.length - 1 ? (curSlide = 0) : curSlide++;
//   goToSlide(curSlide);
//   activateDot(curSlide);
// };

// const prevSlide = function () {
//   curSlide === 0 ? (curSlide = slides.length - 1) : curSlide--;
//   goToSlide(curSlide);
//   activateDot(curSlide);
// };

// const createDots = () => {
//   slides.forEach((_, i) =>
//     dotsContainer.insertAdjacentHTML(
//       "beforeend",
//       `<button class='dot' data-slide='${i}'></button>`
//     )
//   );
// };

// const activateDot = (slide) => {
//   document
//     .querySelectorAll(".dot")
//     .forEach((dot) => dot.classList.remove("dot--active"));
//   document
//     .querySelectorAll(`.dot[data-slide="${slide}"]`)
//     .forEach((dot) => dot.classList.add("dot--active"));
// };

// // inital
// const init = () => {
//   goToSlide(0);
//   createDots();
//   activateDot(0);
// };
// init();

// $(".counter").counterUp({
//   delay: 10,
//   time: 2000,
// });

// // event listeners
// arrowBtnLeft.addEventListener("click", prevSlide);
// arrowBtnRight.addEventListener("click", nextSlide);

// dotsContainer.addEventListener("click", function (e) {
//   // if needed to work only on dots and not on dot container
//   if (e.target.classList.contains("dot")) {
//     const { slide } = e.target.dataset;
//     goToSlide(slide);
//     activateDot(slide);
//   }
// });

(function ($) {
  /*---------------------------------------------------- */
  /* Preloader
	------------------------------------------------------ */
  $(window).load(function () {
    // will first fade out the loading animation
    $("#loader").fadeOut("slow", function () {
      // will fade out the whole DIV that covers the website.
      $("#preloader").delay(300).fadeOut("slow");
    });
  });

  $(window).load(function () {
    "use strict";

    $.get("eventPopup.html", function (data) {
      $("#event-popup-container").html(data);
      /*----------------------------------------------------*/
      /*	Modal Popup
    ------------------------------------------------------*/
      $(".item-wrap a").magnificPopup({
        type: "inline",
        fixedContentPos: false,
        removalDelay: 300,
        showCloseBtn: false,
        mainClass: "mfp-fade",
      });

      $(document).on("click", ".popup-modal-dismiss", function (e) {
        e.preventDefault();
        $.magnificPopup.close();
      });
    });

    /*----------------------------------------------------*/
    /* Smooth Scrolling
      ------------------------------------------------------ */
    $(".smoothscroll").on("click", function (e) {
      e.preventDefault();

      var target = this.hash,
        $target = $(target);

      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $target.offset().top,
          },
          800,
          "swing",
          function () {
            window.location.hash = target;
          }
        );
    });
  });

  const burger = document.querySelector(".burger");
  const navbar = document.querySelector(".navbar");
  const rightdiv = document.querySelector(".rightdiv");
  const navlist = document.querySelector(".navlist");

  burger.addEventListener("click", () => {
    rightdiv.classList.toggle("vclassresp");
    navlist.classList.toggle("vclassresp");
    navbar.classList.toggle("hnavresp");
  });

  // Responsive navigation menu toggle

  const menubtn = document.querySelector(".burger");
  const closebtn = document.querySelector(".nav-close-btn");
  const navigation = document.querySelector(".mobile-list");
  const navItem = document.querySelectorAll(".mobile-list ul li");

  menubtn.addEventListener("click", () => {
    navigation.classList.add("active");
    $(".dull").addClass("active");
  });

  closebtn.addEventListener("click", () => {
    navigation.classList.remove("active");
  });

  navItem.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      navigation.classList.remove("active");
      $(".dull").removeClass("active");
    });
  });

  // Navigation bar effect on scroll
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  // Navigation effect on Scrolling

  $(document).click(function (event) {
    var $target = $(event.target);
    if (
      !$target.closest(".mobile-list").length &&
      !$target.closest(".burger").length &&
      $(".mobile-list").hasClass("active")
    ) {
      $(".mobile-list").removeClass("active");
      $(".dull").removeClass("active");
    }
  });

  // window.addEventListener("scroll", () => {
  //   const sections = document.querySelectorAll("section");
  //   const scrollY = window.pageYOffset;

  //   sections.forEach((current) => {
  //     let sectionHeight = current.offsetHeight;
  //     let sectionTop = current.offsetTop - 50;
  //     let id = current.getAttribute("id");

  //     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
  //       document
  //         .querySelector(".navlinks ul li a[href*=" + id + "]")
  //         .classList.add("active");
  //     } else {
  //       document
  //         .querySelector(".navlinks ul li a[href*=" + id + "]")
  //         .classList.remove("active");
  //     }
  //   });
  // });
})(jQuery);
