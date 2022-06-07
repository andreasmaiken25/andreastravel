//JavaScript of responsive navagition menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

// JavaScriot for Image Slider navigation
var btns = document.querySelectorAll(".nav-btn");
var slides = document.querySelectorAll(".image-slider");
var contents = document.querySelectorAll(".content");
let currentSlide = 1;

var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

// Javascript for image slider autoplay navigation
var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });

      slides[i].classList.add("active");
      btns[i].classList.add("active");
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 10000);
  };
  repeater();
};
repeat();

// Filterable Search Gallery
let searchBox = document.querySelector("#search-box");
let images = document.querySelectorAll(".container .row .col-md-3");

searchBox.oninput = () => {
  images.forEach((hide) => (hide.style.display = "none"));
  let value = searchBox.value;
  images.forEach((filter) => {
    let title = filter.getAttribute("data-title");
    if (value == title) {
      filter.style.display = "block";
    }
    if (searchBox.value == "") {
      filter.style.display = "block";
    }
  });
};
