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


// team move right/leftconst MAX_LEFT = 350;
const MAX_LEFT = 350; //px
const MIN_LEFT = -350; //px

class SectionMover {
  constructor(section) {
    this.Left = 0;
    this.section = Array.from(section);
    this.participantClass = "participant";
    this.activeParticipantClass = "active-participant";
    this.prevArrow = this.section[0].parentElement.querySelector('.arrow-prev');
    this.nextArrow = this.section[0].parentElement.querySelector('.arrow-next');
    this.initTransition();
  }
  initTransition(){
    setTimeout(() => {
      this.show()
    }, 10);
  }
  calculateLeft(side) {
    this.Left += side === 'right' ? -350 : 350;
    this.Left = Math.min(Math.max(this.Left, MIN_LEFT), MAX_LEFT);
    return this;
  }
  show(){
    this.section.forEach(element => {
      element.style.left = `${this.Left}px`;
    });
    return this;
  }
  changeActiveParticipant(){
    this.section.forEach((element, index) => {
      element.classList.remove(this.activeParticipantClass)
      if ((this.Left === MAX_LEFT) && (index === 0)) element.classList.add(this.activeParticipantClass)
      else if ((this.Left === 0) && (index === 1)) element.classList.add(this.activeParticipantClass)
      else if ((this.Left === MIN_LEFT) && (index === 2)) element.classList.add(this.activeParticipantClass)
    })
    return this;
  }
  hideArrow(){
    if (this.Left === MAX_LEFT) this.prevArrow.style.display="none";
    else if (this.Left === MIN_LEFT) (this.nextArrow.style.display="none")
    else {
      this.prevArrow.style.display="block";
      this.nextArrow.style.display="block";
    }
    return this;
  }
  move(side){
    this.calculateLeft(side).changeActiveParticipant().hideArrow().show();
    return this;
  }

}

const developersMover = new SectionMover(document.getElementsByClassName("developer"));
const mentorsMover = new SectionMover(document.getElementsByClassName("mentor"));

document.getElementById("arrow-next-developers").addEventListener("click", () => developersMover.move('right'));;
document.getElementById("arrow-prev-developers").addEventListener("click", () => developersMover.move('left'));

document.getElementById("arrow-next-mentors").addEventListener("click", () => mentorsMover.move('right'));
document.getElementById("arrow-prev-mentors").addEventListener("click", () => mentorsMover.move('left'));


