//Welcome

console.log("Welcome to the Magic Calculator!");

//Loop for repetitive execution
let continueCalculating = true;
while (continueCalculating) {
  let operation = prompt(
    "Choose and operation: add, sub, multi, div, magic or exit"
  );
  if (operation == "exit") {
    console.log("Good bye");
    break;
  }
  let num1 = Number(prompt("First number:"));
  let num2 = Number(prompt("Second number:"));

  switch (operation) {
    case "add":
      console.log(add(num1, num2));
      break;
    case "sub":
      console.log(sub(num1, num2));
      break;
    case "multi":
      console.log(multi(num1, num2));
      break;
    case "div":
      console.log(div(num1, num2));
      break;
    case "exit":
      console.log("Aborting. Goodbye!");
      continueCalculating = false;
      break;
    default:
      console.log("Invalid operation. Please try again.");
  }
}

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
