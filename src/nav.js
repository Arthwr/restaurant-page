import fireIcon from "./images/fire-icon.svg";
import cartIcon from "./images/cart-icon.svg";

export default function loadNavImages() {
  const fireImg = document.querySelector("#fire-icon");
  fireImg.src = fireIcon;

  const cartImg = document.querySelector("#cart-icon");
  cartImg.src = cartIcon;
}
