// script.js

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById("navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});

// ===== Mobile Menu Toggle =====
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// ===== Scroll Animations =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.querySelectorAll(".animate-on-scroll").forEach((el) => {
  observer.observe(el);
});

// ===== Counter Animation =====
function animateCounter(element) {
  const target = parseInt(element.getAttribute("data-target"));
  const duration = 2000;
  const increment = target / (duration / 16);
  let current = 0;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target + "+";
    }
  };
  updateCounter();
}

// Inicia cada contador una sola vez, cuando su tarjeta entra en pantalla
const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const statNumber = entry.target.querySelector(".stat-number");
      if (statNumber && !statNumber.classList.contains("counted")) {
        statNumber.classList.add("counted");
        animateCounter(statNumber);
      }
      statObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.5 },
);

document.querySelectorAll(".hero-stat-item").forEach((stat) => {
  statObserver.observe(stat);
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// ===== Active Nav Link on Scroll =====
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ===== Parallax Effect on Hero =====
// Solo se desplaza la capa de imagen (.hero::before) via --parallax-offset.
// Mover el .hero completo lo hacia invadir la seccion siguiente al hacer scroll.
const hero = document.querySelector(".hero");
let parallaxTicking = false;

function updateParallax() {
  parallaxTicking = false;
  const scrolled = window.pageYOffset;
  // Fuera del hero no hace falta seguir calculando.
  if (scrolled > hero.offsetHeight) return;
  hero.style.setProperty("--parallax-offset", scrolled * 0.3 + "px");
}

if (hero) {
  window.addEventListener("scroll", () => {
    if (!parallaxTicking) {
      parallaxTicking = true;
      requestAnimationFrame(updateParallax);
    }
  });
}

// ===== Loading Animation =====
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
