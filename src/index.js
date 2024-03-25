import main from "./main.js";
import about from "./about.js";
import menu from "./menu.js";
import loadNavImages from "./nav.js";
import handleLinks from "./handleNav.js";

loadNavImages();
const mainLinks = document.querySelectorAll(".main");

mainLinks.forEach((link) => {
  link.addEventListener("click", () => handleLinks(main));
});

const aboutLink = document.querySelector(".about");
const menuLink = document.querySelector(".menu");

aboutLink.addEventListener("click", () => handleLinks(about));
menuLink.addEventListener("click", () => handleLinks(menu));

handleLinks(main);
