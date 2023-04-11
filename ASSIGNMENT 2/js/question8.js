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



