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
    firebaseref.set({
    Course: currCourse,
    AssignmentType: currAssignment,
    Grade: grade1
  });
}
