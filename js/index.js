const fadersLeft = document.querySelectorAll(".fade-in-left");
const fadersRight = document.querySelectorAll(".fade-in-right");
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
      delay += 100;
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

fadersLeft.forEach((fader) => {
  appearOnScroll.observe(fader);
});
faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
fadersRight.forEach((fader) => {
  appearOnScroll.observe(fader);
});

$(document).ready(function () {
  $("a.smooth-scroll").click(function (e) {
    e.preventDefault();
    const target = $($(this).attr("href"));
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        2000
      );
    }
  });
});

function showMentors() {
  mentors.classList.add("active");
  developers.classList.remove("active");
  const elements = document.querySelectorAll(".participant");
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add("changeVis");
  }
}
function showDevs() {
  mentors.classList.remove("active");
  developers.classList.add("active");
  const elements = document.querySelectorAll(".participant");
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove("changeVis");
  }
}
let developers = document.getElementById("Devs");
let mentors = document.getElementById("Mentors");
mentors.addEventListener("click", showMentors);
developers.addEventListener("click", showDevs);
