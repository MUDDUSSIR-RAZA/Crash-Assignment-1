let num1 = +prompt("Enter first number:");
let num2 = +prompt("Enter second number:");

if (isNaN(num1) || isNaN(num2)) {
  alert("Please enter valid numbers.");
} else {
  if (num1 > num2) {
    console.log(num1 + " is larger than " + num2);
  } else if (num2 > num1) {
    console.log(num2 + " is larger than " + num1);
  } else {
    console.log(num1 + " and " + num2 + " are equal.");
  }
}
