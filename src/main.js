import "./styles/global.css";
import "./styles/main.css";
import foodImg1 from "./images/main-food-1.webp";
import foodImg2 from "./images/main-food-2.webp";
import foodImg3 from "./images/main-food-3.webp";

export default function main() {
  const mainSection = document.createElement("section");
  mainSection.id = "main";

  // Cta container
  const ctaContainer = document.createElement("div");
  ctaContainer.classList.add("cta-container");

  const h1 = document.createElement("h1");
  h1.innerHTML = "The best place <br/> to enjoy your food";

  const p = document.createElement("p");
  p.textContent =
    "Indulge in the perfection of expertly cooked cuisine, crafted from time-honored recipes under the guidance of our seasoned chefs.";

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("cta-buttons");

  const buttonReservate = document.createElement("button");
  buttonReservate.textContent = "Reservate";
  const buttonOrder = document.createElement("button");
  buttonOrder.textContent = "Order online";

  buttonsContainer.appendChild(buttonReservate);
  buttonsContainer.appendChild(buttonOrder);

  ctaContainer.appendChild(h1);
  ctaContainer.appendChild(p);
  ctaContainer.appendChild(buttonsContainer);

  //Gallery
  const gallery = document.createElement("div");
  gallery.id = "gallery";

  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");

  const foodElement1 = document.createElement("img");
  foodElement1.src = foodImg1;

  const foodElement2 = document.createElement("img");
  foodElement2.src = foodImg2;

  const foodElement3 = document.createElement("img");
  foodElement3.src = foodImg3;

  const backside = document.createElement("div");
  backside.classList.add("img-backside");

  gallery.appendChild(gridContainer);

  gridContainer.appendChild(foodElement1);
  gridContainer.appendChild(foodElement2);
  gridContainer.appendChild(foodElement3);
  gridContainer.appendChild(backside);

  mainSection.appendChild(ctaContainer);
  mainSection.appendChild(gallery);

  // Scroll event for middle image to appear
  const handleEntryScroll = () => {
    const img = document.querySelector(".grid-container > img:nth-child(2)");
    if (window.scrollY >= 200 && img) {
      img.classList.add("visible");
      window.removeEventListener("scroll", handleEntryScroll);
    }
  };

  window.addEventListener("scroll", handleEntryScroll);

  return mainSection;
}
