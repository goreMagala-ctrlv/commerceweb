import { insertShoe } from "../utils/fetch.js";

const titleInput = document.getElementById("title");
const priceInput = document.getElementById("price");
const ratingInput = document.getElementById("rating");
const imageLinkInput = document.getElementById("imageLink");
const descriptionInput = document.getElementById("description");
const saveBtn = document.getElementById("save-btn");
const goodResponse = document.getElementById("goodResponse");

const validateInsert = (data) => {
  if (
    !data.title ||
    !data.imageLink ||
    !data.price ||
    !data.description ||
    !data.rating
  ) {
    return true;
  }
  return false;
};

saveBtn.addEventListener("click", async () => {
  const data = {
    title: titleInput.value,
    price: priceInput.value,
    rating: ratingInput.value,
    imageLink: imageLinkInput.value,
    description: descriptionInput.value,
  };

  if (validateInsert(data)) {
    console.warn("Validation Error: Please check the if inputs are filled.");
    return;
  }

  try {
    const shoe = await insertShoe(data);
    if (shoe) {
      goodResponse.textContent = "Shoe was added";

      // setTimeout(() => {
      //   window.location.replace("../Item Page/index.html");
      // }, 3000);
    }
  } catch (error) {
    console.error("Failed to add:", error);
  }
});
