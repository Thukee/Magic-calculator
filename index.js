let operation = prompt("Operation:");
let num1 = Number(prompt("First number:"));
let num2 = Number(prompt("Second number:"));

function add(num1, num2) {
  return `${num1} plus ${num2} is equals to ${num1 + num2}`;
}

if (operation == "add") {
  console.log(add(num1, num2));
}
