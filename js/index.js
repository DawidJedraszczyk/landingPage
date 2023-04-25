const lazyLoadingIMGs = document.querySelectorAll("img");

const lazyLoad = (target) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute("data-lazy");
        img.setAttribute("src", src);
        img.classList.add("fade-in");

        observer.disconnect();
      }
    });
  });
};

lazyLoadingIMGs.forEach(lazyLoad);

/* FADE ANIMATION */
const faders = document.querySelectorAll(".fade-in");
appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -30px 0px",
};

let delay = 100;

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

/*  SCROLL DO DIVA  */

$(document).ready(function () {
  $("a.smooth-scroll").click(function (e) {
    e.preventDefault();
    const target = $($(this).attr("href"));
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        2500
      );
    }
  });
});

/*  ANIMATION FOR #TEAM */

function showMentors() {
  document.getElementById("first-mentor").style.opacity = "1";
  document.getElementById("second-mentor").style.opacity = "1";
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

/*    NAVBAR BACKGROUND ON SCROLL

 window.addEventListener("scroll", function () {
  const navbar = document.querySelector("header");
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > window.innerHeight - 100) {
    navbar.classList.add("header-scrolled");
  } else {
    navbar.classList.remove("header-scrolled");
  }
}); */
