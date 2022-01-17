function addFive(num) {
  num = num + 5;
  console.log(`The number add five is: ${num}`);
  return num;
}

function multiplyByFive(num) {
  num = num * 5;
  console.log(`The result multiplied by five is: ${num}`);
  return num;
}

function divideByTwo(num) {
  num = num / 2;
  console.log(`The result divided by two is: ${num}`);
  return num;
}

function logFinal(num) {
  console.log(`The final number is: ${num}`);
  return num;
}

function runFunctions(num) {
  console.warn("Sequential functions with no assignment:");
  addFive(num);
  multiplyByFive(num);
  divideByTwo(num);
  logFinal(num);
}

runFunctions(5);

let globalNum = 0;

document.getElementsByTagName("button")[0].addEventListener("click", () => {
  console.warn("localNum assignment functions:");
  let localNum = logFinal(divideByTwo(multiplyByFive(addFive(5))));
  console.warn("globalNum assignment functions:");
  globalNum = logFinal(divideByTwo(multiplyByFive(addFive(5))));
  console.warn("=================================");
  console.log(`globalNum: ${globalNum}`);
  console.log(`localNum: ${localNum}`);
  console.warn("=================================");
});

document.getElementsByTagName("button")[1].addEventListener("click", () => {
  console.log(`globalNum: ${globalNum}`);
  console.log(`localNum: ${localNum}`);
});