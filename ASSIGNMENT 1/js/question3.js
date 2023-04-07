let num2 = +prompt("Enter First number:");
let num3 = +prompt("Enter Second number:");
let num1 = +prompt("Enter Third number:");
let num4 = +prompt("Enter Fourth number:");
let num5 = +prompt("Enter Fifth number:");

if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
  alert("Please enter valid numbers.");
} else {

  let largest = num1;
  if (num2 > largest) {
    largest = num2;
  }
  if (num3 > largest) {
    largest = num3;
  }
  if (num4 > largest) {
    largest = num4;
  }
  if (num5 > largest) {
    largest = num5;
  }

  console.log("The largest number is " + largest);
}
