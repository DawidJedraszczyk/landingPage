/* FADE ANIMATION */
const faders = document.querySelectorAll(".fade-in");
appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -30px 0px",
};

let delay = 50;

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

function handleFullWidthSizing() {
  const scrollbarWidth = window.innerWidth - document.body.clientWidth;

  document.style.width = `calc(100vw - ${scrollbarWidth}px)`;
}

/* // 3D CHART

const plotDiv = document.getElementById("plot");
fetch("../json/chart.json")
  .then((response) => response.json())
  .then((data) => {
    // grupuj dane według typu
    const groups = {};
    data.forEach((item) => {
      if (!groups[item.type]) {
        groups[item.type] = {
          x: [],
          y: [],
          z: [],
          type: "scatter3d",
          mode: "markers",
          name: item.type,
          marker: {
            size: 5,
          },
        };
      }
      groups[item.type].x.push(item.TSNE_3d_0);
      groups[item.type].y.push(item.TSNE_3d_1);
      groups[item.type].z.push(item.TSNE_3d_2);
    }); */

/* // stwórz tablicę z danymi
    const plotData = Object.values(groups);

    // przypisz każdemu typowi unikalny kolor
    const colors = Plotly.d3.scale.category10().range();
    plotData.forEach((trace, i) => {
      trace.marker.color = colors[i % colors.length];
    });

    // ustaw layout wykresu
    const layout = {
      margin: { l: 0, r: 0, b: 0, t: 0 },
      scene: {
        xaxis: { title: "TSNE_3d_0", color: "white" },
        yaxis: { title: "TSNE_3d_1", color: "white" },
        zaxis: { title: "TSNE_3d_2", color: "white" },
      },
      paper_bgcolor: "#21211f",
      plot_bgcolor: "white",
      bgcolor: "#21211f",
      font: {
        color: "white",
      },
      legend: {
        x: 1,
        xanchor: "right",
        y: 1,
      },
    };

    // utwórz wykres w elemencie HTML o klasie 'chart'
    Plotly.newPlot(plotDiv, plotData, layout, { responsive: true });
  }); */

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
