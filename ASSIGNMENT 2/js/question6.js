// function saveObjectToLocalStorage(key, object) {
//   localStorage.setItem(key, JSON.stringify(object));
// }


// saveObjectToLocalStorage("name" , ali);



// function getObjectFromLocalStorage(key) {
//   const objectString = localStorage.getItem(key);
//   return JSON.parse(objectString);
// }

// getObjectFromLocalStorage("name");


// Define the function to save an object to localStorage
function saveObjectToLocalStorage(key, object) {
  // Convert the object to a JSON string
  const objectString = JSON.stringify(object);
  // Save the JSON string to localStorage using the provided key
  localStorage.setItem(key, objectString);
}

// Call the function with a key and an object to save
const myObject = { name: "John", age: 30 };
saveObjectToLocalStorage("myObjectKey", myObject);
