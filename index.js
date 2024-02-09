//Welcome

console.log("Welcome to the Magic Calculator!");

//Loop for repetitive execution

let continueCalculating = true;
while (continueCalculating) {
  let operation = prompt(
    "Choose and operation: add, subtract, multiply, divide, magic or exit"
  );
  if (operation == "exit") {
    console.log("Good bye");
    break;
  }

  //Data input for number 1 and number 2

  let num1 = Number(prompt("First number:"));
  let num2 = Number(prompt("Second number:"));

  // Check NaN

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Not a number");
    continue;
  }

  //Switch operation for operations

  switch (operation) {
    case "add":
      console.log(add(num1, num2));
      break;
    case "subtract":
      console.log(sub(num1, num2));
      break;
    case "multiply":
      console.log(multi(num1, num2));
      break;
    case "divide":
      if (num2 === 0 && operation === "divide") {
        console.log("Cannot divide by zero. Try another operation.");
        break;
      }
      console.log(div(num1, num2));
      break;
    case "magic":
      console.log(magicOperation(num1));
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

function magicOperation(num) {
  switch (true) {
    case num < 10:
      return "Magic dust makes the number grow:" + num * 10;
    case num >= 10 && num <= 100:
      return "A magic gnome doubles the number:" + num * 2;
    default:
      return "The number is too mighty for magic and remains unchanged.";
  }
}
