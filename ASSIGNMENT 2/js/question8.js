let myObject = [{
    name: "School A",
    location: "New York",
    students: 500,
    teachers: 30,
},
{
    name: "School B",
    location: "Los Angeles",
    students: 750,
    teachers: 45,
}
]

saveObject(myObject);


function saveObject(object) {
    let stringify = JSON.stringify(object);
    localStorage.setItem("myobject", stringify);
    let allObjects = localStorage.getItem("myobject");
    let getAllobjects = JSON.parse(allObjects);
    console.log(getAllobjects);
}

console.log(getAllobjects);

// let allObjects = localStorage.getItem("students");
// let students = allObjects ? JSON.parse(allObjects) : [];
// function saveObject() {
//     let std = {
//         name: prompt("Enter your name :"),
//         fatherName: prompt("Enter your father name :"),
//         age: +prompt("Enter your age :"),
//         DOB: prompt("Enter your date of birth"),
//         rollNo: +prompt("Enter your roll no :"),
//     }
//     students.push(std);
//     let stringify = JSON.stringify(students);
//     localStorage.setItem("students", stringify);
// }




