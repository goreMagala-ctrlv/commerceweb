export const isValidProduct = (shoes) => {
  let hasError = false;

  const requiredFields = [
    "title",
    "imageLink",
    "price",
    "description",
    "rating",
  ];
  const missingFields = requiredFields.filter((field) => !shoes[field]);

  if (missingFields.length > 0) {
    console.log("All fields must be filled out.");
    hasError = true;
  }

  if (isNaN(Number(shoes.price)) || isNaN(Number(shoes.rating))) {
    console.log("Both price and rating must be valid numbers.");
    hasError = true;
  }

  const validImagePattern =
    /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp|bmp|svg)(\?.*)?$/i;
  if (!validImagePattern.test(shoes.imageLink)) {
    console.log("The image URL is incorrect.");
    hasError = true;
  }

  return hasError;
};
