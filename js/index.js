/*  SCROLL TO DIV  */
$(document).ready(function () {
  $("a.smooth-scroll").click(function (e) {
    e.preventDefault();
    const target = $($(this).attr("href"));
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });
});

/* menu */
const menuCheckbox = document.getElementById("menu-checkbox");
const contactBtn = document.getElementById("contact-btn");
const menuElement = document.createElement("div");
menuElement.classList.add("menu");
menuElement.innerHTML = `
<ul id="menu-list">
  <li id="home-btn">
    <a href="#hero" class="smooth-scroll">Home</a>
  </li>
  <li id="projects-btn">
    <a href="#projects" class="smooth-scroll">Business cases</a>
  </li>
  <li id="team-btn">
    <a href="#team" class="smooth-scroll">Team</a>
  </li>
  <li id="contact-btn-menu">
    <a href="#contact" class="smooth-scroll">Contact us</a>
  </li>
</ul>`;
menuCheckbox.addEventListener("click", function () {
  window.innerWidth < 850 && menuCheckbox.checked
    ? document.body.appendChild(menuElement)
    : document.body.removeChild(menuElement);
  menuEventListener();
});

// hide menu after click href

const hideMenu = () => {
  menuElement.parentNode === document.body &&
    document.body.removeChild(menuElement);
};
const menuEventListener = () => {
  menuElement.parentNode === document.body &&
    menuElement.addEventListener("click", hideMenuAndUncheckCheckbox);
};

const hideMenuAndUncheckCheckbox = () => {
  hideMenu();
  menuCheckbox.checked = false;
};

// header background after 1vh -100px scroll

window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  const scrollHeight = window.pageYOffset;
  scrollHeight > window.innerHeight - 100
    ? navbar.classList.add("GreenGradient")
    : navbar.classList.remove("GreenGradient");
});

//team slider 

var swiper = new Swiper(".developers-slide-container", {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination-developers', 
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' custom-pagination-bullet"></span>';
    },
  },
  breakpoints:{
    0: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

var swiper2 = new Swiper(".mentors-slide-container", {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination-mentors',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' custom-pagination-bullet"></span>';
    },
  },
  breakpoints:{
    0: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  speed: 6000,
  grabCursor: true,
  mousewheelControl: true,
  keyboardControl: true,
})

var swiper = new Swiper(".hero-swiper", {
  effect: "cube",
  cubeEffect: {
    shadow: false,
    slideShadows: false,
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  grabCursor: true,
});

// form and captcha

function onSubmit(token) {
     document.getElementById("demo-form").submit();
}