import "$styles/index.css";
import "$styles/syntax-highlighting.css";

// Import all JavaScript & CSS files from src/_components
import components from "$components/**/*.{js,jsx,js.rb,css}";

console.info("Bridgetown is loaded!");

const navbar = document.querySelector(".nav-container");
const observer = new IntersectionObserver(
  ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
  { threshold: [1] }
);

observer.observe(navbar);
