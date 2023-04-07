let n = +prompt("Enter a number:");
if (isNaN(n)) {
  alert("Please enter a valid number.");
} else {
    if (n % 3 === 0 && n % 5 === 0) {
      console.log("FizzBuzz");
    } else if (n % 3 === 0) {
      console.log("Fizz");
    } else if (n % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(n);
    }
  }
