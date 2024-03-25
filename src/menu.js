import "./styles/global.css";
import "./styles/menu.css";
import menuItem1 from "./images/menu-item-1.webp";
import menuItem2 from "./images/menu-item-2.webp";
import menuItem3 from "./images/menu-item-3.webp";
import menuItem4 from "./images/menu-item-4.webp";

export default function menu() {
  const menuSection = document.createElement("section");
  menuSection.id = "menu";

  const menuContent = document.createElement("div");
  menuContent.classList.add("menu-content");

  menuSection.appendChild(menuContent);

  const h1 = document.createElement("h1");
  h1.textContent = "Featured Menu";

  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-photo");

  menuContent.appendChild(h1);
  menuContent.appendChild(gridContainer);

  const menuImg1 = document.createElement("img");
  menuImg1.classList.add("food-img-1");
  menuImg1.src = menuItem1;

  const menuImg2 = document.createElement("img");
  menuImg2.classList.add("food-img-2");
  menuImg2.src = menuItem2;

  const menuImg3 = document.createElement("img");
  menuImg3.classList.add("food-img-3");
  menuImg3.src = menuItem3;

  const menuImg4 = document.createElement("img");
  menuImg4.classList.add("food-img-4");
  menuImg4.src = menuItem4;

  gridContainer.appendChild(menuImg1);
  gridContainer.appendChild(menuImg2);
  gridContainer.appendChild(menuImg3);
  gridContainer.appendChild(menuImg4);

  const aboutFooter = document.createElement("div");
  aboutFooter.classList.add("about-footer");

  menuSection.appendChild(aboutFooter);

  return menuSection;
}
