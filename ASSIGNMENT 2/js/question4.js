function addListItem() {
  var text = document.getElementById("newItemText").value;
  var newListItem = document.createElement("li");
  newListItem.textContent = text;
  var list = document.getElementById("myList");
  list.appendChild(newListItem);
}
