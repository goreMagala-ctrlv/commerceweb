import { fetchShoes } from "../utils/fetch.js";

const shoesWrap = document.getElementById("shoes-wrap");

const buildCards = (shoes) => {
  shoes.forEach((shoe) => {
    const card = document.createElement("a");
    card.href = `./Item Page/index.html?id=$(shoe.id)`;
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = shoe.title;

    const img = document.createElement("img");
    img.src = shoe.imageLink;

    card.append(img, title);
    shoesWrap.append(card);
  });
};

const buildScreen = async () => {
  try {
    const shoes = await fetchShoes();
    buildCards(shoes);
  } catch (error) {
    console.error("Error loading shoes:", error);
  }
};

buildScreen();
