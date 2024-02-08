let operation = prompt("Operation:");
let num1 = Number(prompt("First number:"));
let num2 = Number(prompt("Second number:"));

//Arithmatic functions coding starts here//

function add(num1, num2) {
  return `${num1} plus ${num2} is equals to ${num1 + num2}`;
}

function sub(num1, num2) {
  return `${num1} minus ${num2} is equals to ${num1 - num2}`;
}

function multi(num1, num2) {
  return `${num1} multiply by ${num2} is equals to ${num1 * num2}`;
}

function div(num1, num2) {
  return `${num1} devide by ${num2} is equals to ${num1 / num2}`;
}

if (operation == "add") {
  console.log(add(num1, num2));
}
if (operation == "sub") {
  console.log(sub(num1, num2));
}
if (operation == "multi") {
  console.log(multi(num1, num2));
}
if (operation == "div") {
  console.log(div(num1, num2));
}
