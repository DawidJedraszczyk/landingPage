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
