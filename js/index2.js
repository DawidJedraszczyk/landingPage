// header background after 1vh -100px scroll

window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > window.innerHeight - 100) {
    navbar.classList.add("GreenGradient");
  } else {
    navbar.classList.remove("GreenGradient");
  }
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
}
let developers = document.getElementById("devsBtn");
let mentors = document.getElementById("mentorsBtn");
mentors.addEventListener("click", showMentors);
developers.addEventListener("click", showDevs);

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
let menuCheckbox = document.getElementById("menu-checkbox");
let contactBtn = document.getElementById("contact-btn");
const menuElement = document.createElement("div");
menuElement.classList.add("menu");
menuElement.innerHTML = `
<ul>
  <li id="home-btn">
    <a href="#hero" class="smooth-scroll">Home</a>
  </li>
  <li id="projects-btn">
    <a href="#projects" class="smooth-scroll">Business cases</a>
  </li>
  <li id="team-btn">
    <a href="#team" class="smooth-scroll">Team</a>
  </li>
  <li id="team-btn">
    <a href="#contact" class="smooth-scroll">Contact us</a>
  </li>
</ul>`;
menuCheckbox.addEventListener("click", function () {
  if (window.innerWidth < 1300) {
    if (menuCheckbox.checked) {
      document.body.appendChild(menuElement);
      contactBtn.style.opacity = "0";
    } else {
      document.body.removeChild(menuElement);
      contactBtn.style.opacity = "1";
    }
  }
});
