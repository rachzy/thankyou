const loadingText = document.querySelector(".loading-text");
const loadingContainer = document.querySelector(".loading-container");
const container = document.querySelector(".container");

const allImages = document.querySelectorAll("img");

const loadingLabel = "Carregando";
let amountOfDots = 1;

const imagesAsPromises = Array.from(allImages).map((image) => {
  return new Promise((resolve) => {
    image.addEventListener("load", () => {
      resolve(image);
    });
  });
});

const loadingAnimation = setInterval(() => {
  amountOfDots++;
  if (amountOfDots > 3) {
    amountOfDots = 1;
  }
  loadingText.textContent = loadingLabel + ".".repeat(amountOfDots);
}, 250);

function displayContent() {
  clearInterval(loadingAnimation);
  loadingContainer.style.display = "none";
}

Promise.all(imagesAsPromises).then(() => {
  console.log("Loadig finished");
  clearInterval(loadingAnimation);
  displayContent();
});
