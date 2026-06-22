// Elements

const paragraph = document.getElementById("paragraph");

const textInput = document.getElementById("textInput");
const changeTextButton = document.getElementById("changeTextButton");

const colorInput = document.getElementById("colorInput");
const changeColorButton = document.getElementById("changeColorButton");

const uppercaseButton = document.getElementById("uppercaseButton");
const lowercaseButton = document.getElementById("lowercaseButton");
const resetButton = document.getElementById("resetButton");
const randomColor = document.getElementById("randomColorButton");

// Original state

const defaultText = "This is Paragraph";
const defaultColor = "#000000";

// Change text

changeTextButton.addEventListener("click", () => {
  const userText = textInput.value.trim();

  if (userText !== "") {
    paragraph.textContent = userText;
  }
});

// Press Enter to change text

textInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const userText = textInput.value.trim();

    if (userText !== "") {
      paragraph.textContent = userText;
    }
  }
});

// Change color

changeColorButton.addEventListener("click", () => {
  paragraph.style.color = colorInput.value;
});

// Uppercase

uppercaseButton.addEventListener("click", () => {
  paragraph.textContent = paragraph.textContent.toUpperCase();
});

// Lowercase

lowercaseButton.addEventListener("click", () => {
  paragraph.textContent = paragraph.textContent.toLowerCase();
});

// Reset

resetButton.addEventListener("click", () => {
  paragraph.textContent = defaultText;

  paragraph.style.color = defaultColor;

  textInput.value = "";

  colorInput.value = "#000000";
});

// Random color

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

randomColor.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  paragraph.style.color = rndCol;
});
