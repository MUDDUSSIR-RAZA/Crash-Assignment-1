function saveObject(enterName, enterFatherName, enterAge, enterDOB, enterRollno) {
    return {
        name: enterName,
        fatherName: enterFatherName,
        age: enterAge,
        DOB: enterDOB,
        rollNo: enterRollno,
    };
}

let students = [
    saveObject("Muddussir Raza" , "Rashid Mehmood" , 18 ,"10-01-2005" , 1043232),
    saveObject("Mubashir Raza" , "Rashid Mehmood" , 14 ,"23-02-2008" , 1896422),
];

console.log(students);