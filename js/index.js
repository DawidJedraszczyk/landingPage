/* FADE ANIMATION */
const faders = document.querySelectorAll(".fade-in");
appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -10px 0px",
};

let delay = 0;

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      setTimeout(function () {
        entry.target.classList.add("appear");
      }, delay);
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

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

/*  ANIMATION FOR #TEAM */

function showMentors() {
  document.getElementById("first-mentor").style.opacity = "1";
  mentors.classList.add("active");
  developers.classList.remove("active");
  const elements = document.querySelectorAll(".participant");
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove("fade-in");
    elements[i].classList.add("changeVis");
  }
  document.getElementById("first-dev").style.opacity = "0";
  document.getElementById("second-dev").style.opacity = "0";
  document.getElementById("third-dev").style.opacity = "0";
}
function showDevs() {
  document.getElementById("first-dev").style.opacity = "1";
  document.getElementById("second-dev").style.opacity = "1";
  document.getElementById("third-dev").style.opacity = "1";
  mentors.classList.remove("active");
  developers.classList.add("active");
  const elements = document.querySelectorAll(".participant");
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove("fade-in");
    elements[i].classList.remove("changeVis");
  }
  document.getElementById("first-mentor").style.opacity = "0";
  document.getElementById("second-mentor").style.opacity = "0";
}
let developers = document.getElementById("Devs");
let mentors = document.getElementById("Mentors");
mentors.addEventListener("click", showMentors);
developers.addEventListener("click", showDevs);

function handleFullWidthSizing() {
  const scrollbarWidth = window.innerWidth - document.body.clientWidth;

  document.style.width = `calc(100vw - ${scrollbarWidth}px)`;
}

// Menu

let menuCheckbox = document.getElementById("menu-checkbox");
let menu = document.getElementById("menu");
let contactBtn = document.getElementById("contact-btn");
menuCheckbox.addEventListener("click", function () {
  if (window.innerWidth < 1300) {
    if (menuCheckbox.checked) {
      menu.classList.add("menu-opened");
      contactBtn.style.opacity = "0";
    } else {
      menu.classList.remove("menu-opened");
      contactBtn.style.opacity = "1";
    }
  }
});

// header background after 1vh -100px scroll

window.addEventListener("scroll", function () {
  const navbar = document.querySelector("header");
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > window.innerHeight - 100) {
    navbar.classList.add("header-scrolled");
  } else {
    navbar.classList.remove("header-scrolled");
  }
});

// team animation to show details

const showDetails = (prop) => {
  prop.addEventListener("click", () => {
    prop.classList.contains("participantDetailsShown")
      ? prop.classList.remove("participantDetailsShown")
      : prop.classList.add("participantDetailsShown");
  });
};
let participants = document.querySelectorAll(".participant");
participants.forEach((element) => showDetails(element));
