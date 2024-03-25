import "./styles/global.css";
import "./styles/about.css";
import aboutImg from "./images/about-chef.webp";

export default function about() {
  const aboutSection = document.createElement("div");
  aboutSection.id = "about";

  //  About-container
  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");

  //   About content
  const h1 = document.createElement("h1");
  h1.textContent = "About us";
  const aboutContent = document.createElement("div");
  aboutContent.classList.add("about-content");
  aboutContainer.appendChild(h1);
  aboutContainer.appendChild(aboutContent);

  const article = document.createElement("article");

  const p = document.createElement("p");
  p.innerHTML =
    '<span class="japanese-text">料理に心</span> Cooking with heart';
  const div = document.createElement("div");
  div.innerHTML =
    "<p> Since 2005, we've been dedicated to offering something that many have overlooked or disregarded—the art of cooking, honed through traditions and history.</p> <br /> <p>At our core, we believe the most meaningful dishes are thosesavored and enjoyed. Our menu features high-quality Japanesecuisine paired with classic beverages, all served with acommitment to excellence and a nod to the past.</p>";
  const img = document.createElement("img");
  img.src = aboutImg;

  article.appendChild(p);
  article.appendChild(div);
  aboutContent.appendChild(article);
  aboutContent.appendChild(img);

  const aboutFooter = document.createElement("div");
  aboutFooter.classList.add("about-footer");

  aboutSection.appendChild(aboutContainer);
  aboutSection.appendChild(aboutFooter);

  return aboutSection;
}
