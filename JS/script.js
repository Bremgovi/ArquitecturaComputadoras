/* Se tienen 4 condicionales para checar en que punto de navegación esta el usuario, 
de forma que no haya conflicto entre las variables usadas y valores nulos.
Además, se pone la configuración para particles.js para la pagina de inicio (index.html) y 
la pagina final (animes.html)*/

//////////////////////// 1) index.HTML ////////////////////////////////////////
if (window.location.pathname.endsWith("/") || document.getElementById("inicio") != null) {
  //////////////////////// Config particlesJS ///////////////////////////////////
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
  //////////////////////// My code ////////////////////////////////////////
  var buttonBegin = document.getElementById("start");
  var welcomeMessage = document.getElementById("welcome");
  var linkToIntro = document.getElementById("intro");
  buttonBegin.addEventListener("click", function () {
    welcomeMessage.innerHTML = "¡Bienvenido!";
    welcomeMessage.classList.add("fade-in-animation");
    buttonBegin.disabled = true;
    linkToIntro.style.display = "flex";
    linkToIntro.classList.add("fade-in-animation");
  });
}

/************************************** NAVIGATION BAR CODE *********************************/
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const toggleButton2 = document.getElementsByClassName("toggle-button")[1];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const navbarLinks2 = document.getElementsByClassName("navbar-links")[1];

// If toggle button is clicked, assigns 'active' class to the toggleButton and navBarLinks
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});

toggleButton2.addEventListener("click", () => {
  toggleButton2.classList.toggle("active");
  navbarLinks2.classList.toggle("active");
});

//If a link is clicked, the previously assigned 'active' class is removed
document.querySelectorAll(".navbar-links").forEach((n) =>
  n.addEventListener("click", () => {
    toggleButton.classList.remove("active");
    navbarLinks.classList.remove("active");
    toggleButton2.classList.remove("active");
    navbarLinks2.classList.remove("active");
  })
);
