#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { 
    message: "Enter your first number", 
    type: "number", 
    name: "firstNumber" 
  },
  { 
    message: "Enter your second number", 
    type: "number", 
    name: "secondNumber" 
  },
  {
    message: "select one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Add", "Subtract", "Multiply", "Divide"],
  },
]);

// conditional statement

if (answer.operator === "Add") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtract") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiply") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Divide") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("Please select valid operator");
}
console.log ("THE END")