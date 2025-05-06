import { fetchShoeById, deleteShoeById } from "../utils/fetch.js";

const currentUrl = new URL(window.location.href);
const shoesId = currentUrl.searchParams.get("id");

const shoesTitle = document.getElementById("title");
const shoesPrice = document.getElementById("price");
const shoesDescription = document.getElementById("description");
const shoesImageLink = document.getElementById("imageLink");
const removeBtn = document.getElementById("removeBtn");
const userMessage = document.getElementById("userMessage");

const displayShoeDetails = (shoes) => {
  shoesTitle.textContent = shoes.title;
  shoesPrice.textContent = `€${shoes.price}`;
  shoesDescription.textContent = shoes.description;
  shoesImageLink.src = shoes.imageLink;
};

const initPage = async () => {
  try {
    const shoesData = await fetchShoeById(shoesId);
    if (shoesData) {
      displayShoeDetails(shoesData);
    }
  } catch (error) {
    console.error("Failed to load shoe information", error);
  }
};

initPage();

removeBtn.addEventListener("click", async () => {
  try {
    const removed = await deleteShoeById(shoesId);
    if (removed) {
      userMessage.textContent = "Shoe has been successfully removed.";

      setTimeout(() => {
        window.location.href = "../Item Page/index.html";
      }, 3000);
    }
  } catch (error) {
    console.error("Error removing the shoe", error);
  }
});
