let obatinedMarks = +prompt("Please Enter your Total Obtained marks:");

let totalMarks = +prompt("Please Enter your Total marks :");

let percentage = (obatinedMarks / totalMarks) * 100;

if (obatinedMarks <= totalMarks && obatinedMarks >= 0) {

  if (isNaN(obatinedMarks) || isNaN(totalMarks)) {
    alert("Please enter valid marks.");
  } else {

    let grade;
    if (percentage < 60) {
      grade = "F";
    } else if (percentage < 70) {
      grade = "D";
    } else if (percentage < 80) {
      grade = "C";
    } else if (percentage < 90) {
      grade = "B";
    } else {
      grade = "A";
    }

    console.log("The average marks are " + percentage + "%" + ", and the corresponding grade is " + grade);
  }
}

else if (obatinedMarks < 0) {
  alert("Please Enter a positive number");
}

else if (obatinedMarks > totalMarks) {
  alert("Total Marks should be greater than Obtained Marks");
}

