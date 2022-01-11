const boxes = document.getElementsByClassName("box");

// adding the event globally does not produce the desired function as it negates
// the need to press the first button
for (let box of boxes) {
  box.addEventListener("click", (e) => {
    currentNum = e.target.textContent;
    e.target.textContent = String(Number(currentNum) + 1);
    e.target.classList.toggle("purple");
  });
}

// button event listener omitted as demonstration does not require it
