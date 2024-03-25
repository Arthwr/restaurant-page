import main from "./main.js";
import about from "./about.js";
import loadNavImages from "./nav.js";
import handleLinks from "./handleNav.js";

loadNavImages();
const mainLinks = document.querySelectorAll(".main");

mainLinks.forEach((link) => {
  link.addEventListener("click", () => handleLinks(main));
});

const aboutLink = document.querySelector(".about");
const menuLink = document.querySelector(".menu");
const contactLink = document.querySelector(".contact");

aboutLink.addEventListener("click", () => handleLinks(about));
menuLink.addEventListener("click", () => handleLinks(menu));
contactLink.addEventListener("click", () => handleLinks(contact));

handleLinks(main);
