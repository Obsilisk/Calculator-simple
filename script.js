const output = document.getElementById("output");
const buttons = document.querySelectorAll(".button-grid button");
const clearButton = document.getElementById("clear");

// Append button text to the output
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "=") {
      try {
        output.textContent = eval(output.textContent);
      } catch (error) {
        output.textContent = "Error";
      }
    } else {
      if (output.textContent === "0" || output.textContent === "Error") {
        output.textContent = button.textContent;
      } else {
        output.textContent += button.textContent;
      }
    }
  });
});

// Clear the output
clearButton.addEventListener("click", () => {
  output.textContent = "0";
});
