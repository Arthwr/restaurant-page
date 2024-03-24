import main from "./main.js";
import loadNavImages from "./nav.js";

loadNavImages();
const content = document.getElementById("content");
content.appendChild(main());

// About.js
// import aboutImg from "./images/about-chef.webp";
// const chefImg = document.querySelector(".about-content > img");
// chefImg.src = aboutImg;
