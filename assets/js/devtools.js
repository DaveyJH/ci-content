const btn = document.getElementById("click-me");

function addEvent() {
  const boxes = document.getElementsByClassName("box");
  for (let box of boxes) {
    // arrow and anonymous functions can be repeatedly added to the same element
    box.addEventListener("click", (e) => {
      currentNum = e.target.textContent;
      e.target.textContent = String(Number(currentNum) + 1);
      e.target.classList.toggle("purple");
    });
  }
}

// demonstrates that named functions appear with name in event listener tab
btn.addEventListener("click", addEvent);
