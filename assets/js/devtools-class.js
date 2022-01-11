const btn = document.getElementById("click-me");

btn.addEventListener("click", () => {
  const boxes = document.getElementsByClassName("box");
  for (let box of boxes) {
    // we check for a class that specifies the event has already been added
    if (!box.classList.contains("event-added")) {
      /* we add a class to specify the event has been added. If this was added
      inside the element's event listener (the box) it would only apply if we
      clicked the box, this is not the intended functionality for this case. */
      box.classList.add("event-added");
      box.addEventListener("click", (e) => {
        currentNum = e.target.textContent;
        e.target.textContent = String(Number(currentNum) + 1);
        e.target.classList.toggle("purple");
      });
    }
  }
});
