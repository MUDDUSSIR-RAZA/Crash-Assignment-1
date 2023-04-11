function saveObjectToLocalStorage(key, object) {


  const objectString = JSON.stringify(object);


  localStorage.setItem(key, objectString);
}

let myObject = {
  name: "Muddussir",
  age: 18,
};
saveObjectToLocalStorage("myObjectKey", myObject);
