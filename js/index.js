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

function scrollToDiv(divName) {
  var div = document.getElementById(divName);
  div.scrollIntoView();
}
