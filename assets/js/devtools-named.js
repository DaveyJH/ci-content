const btn = document.getElementById("click-me");

btn.addEventListener("click", () => {
  const boxes = document.getElementsByClassName("box");
  for (let box of boxes) {
    // named functions can only be added once to an element
    box.addEventListener("click", addOneSwitchColor);
  }
});

function addOneSwitchColor(e) {
  currentNum = e.target.textContent;
  e.target.textContent = String(Number(currentNum) + 1);
  e.target.classList.toggle("purple");
}
