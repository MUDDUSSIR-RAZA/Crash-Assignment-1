// function addParagraph() {
//   let text = prompt("Enter a paragraph");

//   var newPara = document.createElement("p");

//   newPara.textContent = text;

//   var addPara = document.getElementById("addPara");


//   addPara.appendChild(newPara);
// }
// addParagraph();


function addParagraph() {
  let text = document.getElementById("newParaText").value;
  let newPara = document.createElement("p");
  newPara.textContent = text;
  let div = document.getElementById("container");
  div.appendChild(newPara);
  let button = document.getElementById("button");
  button.style.display = "none";
  let input = document.getElementById("newParaText")
  input.style.display = "none";
  document.getElementById("inputButton").innerHTML = "  <h1>Paragraph</h1>";
}
// addParagraph();

// function addListItem() {
//   var text = document.getElementById("newItemText").value;
//   var newListItem = document.createElement("li");
//   newListItem.textContent = text;
//   var list = document.getElementById("myList");
//   list.appendChild(newListItem);
// }



