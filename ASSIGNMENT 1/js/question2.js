let num = +prompt("Enter a number:");
if (isNaN(num)) {
  alert("Please enter a valid number.");
} else if (num > 0) {
  alert("The sign is +");
} else if (num < 0) {
  alert("The sign is -");
} else {
  alert("The number is zero.");
}
