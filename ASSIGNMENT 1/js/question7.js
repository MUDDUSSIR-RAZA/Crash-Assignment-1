let n = +prompt("Enter the number of lines to print:");
if (isNaN(n)) {
  alert("Please enter a valid number.");
} else {
  let pattern = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += '* ';
    }
    pattern += '\n';
  }
  console.log(pattern);
}
