
setInterval(function () {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  
  let pElement = document.getElementById("question");
  
  changeBackgroundColor(pElement, "#" + randomColor);
}, 500);


function changeBackgroundColor(element, newColor) {
  element.style.backgroundColor = newColor;
}



















// const randomColor = Math.floor(Math.random()*16777215).toString(16);
// console.log(randomColor);