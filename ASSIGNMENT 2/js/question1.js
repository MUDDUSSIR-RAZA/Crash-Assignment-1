function closure(firstNum) {
  return function (secondNum) {
    return firstNum + secondNum;
  }
}

let innerfunction = closure(5);
let addition = innerfunction(5);
console.log(addition);