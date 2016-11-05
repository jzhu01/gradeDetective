var config = {
  apiKey: "AIzaSyDYIz9QKWYBu0Rw0KPFNZCdB_BgnQ5oelY",
  authDomain: "gradedetective.firebaseapp.com",
  databaseURL: "https://gradedetective.firebaseio.com",
  storageBucket: "gradedetective.appspot.com",
  messagingSenderId: "690886237455"
};
firebase.initializeApp(config);
var db = new Firebase("https://gradedetective.firebaseio.com");

var gradeDetective = {
  course: "Calculus",
  assignmentType: "homework",
  grade: 0.92
};

$(document).ready(function(){
  var myEl = document.getElementById('submitButton');
  myEl.addEventListener('click', function() {
        var currCourse = $("#course").val();
        var currAssignment = $("#assignment").val();

        var points1 = $("#points1").val();
        var pointsOutOf1 = $("#pointsOutOf1").val();

        var grade1 = points1/pointsOutOf1;
        console.log(currCourse + " " + currAssignment + " " + grade1);

        writeUserData(currCourse, currAssignment, grade1);
    });
});



function writeUserData(currCourse, currAssignment, grade1) {
  var child = db.child('course1');
  child.push({
    course: currCourse,
    assignmentType: currAssignment,
    grade: grade1
  })
//     firebaseref.set({
//     Course: currCourse,
//     AssignmentType: currAssignment,
//     Grade: grade1
//   });
}
