import main from "./main.js";
import about from "./about.js";
import loadNavImages from "./nav.js";
import handleLinks from "./handleNav.js";

loadNavImages();
const content = document.getElementById("content");
const homeLink = document.querySelector(".main");
const aboutLink = document.querySelector(".about");
const menuLink = document.querySelector(".menu");
const contactLink = document.querySelector(".contact");

homeLink.addEventListener("click", () => handleLinks(main));
aboutLink.addEventListener("click", () => handleLinks(about));
menuLink.addEventListener("click", () => handleLinks(menu));
contactLink.addEventListener("click", () => handleLinks(contact));

// About.js
// import aboutImg from "./images/about-chef.webp";
// const chefImg = document.querySelector(".about-content > img");
// chefImg.src = aboutImg;

handleLinks(main);
