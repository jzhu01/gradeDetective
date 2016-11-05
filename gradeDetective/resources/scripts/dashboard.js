//$(document).ready(function(){
//    $("#submit").onclick(function(){
window.onload = function(){
  document.getElementById("submit").onclick = function(){
        var currCourse = $("#course").val();
        var currAssignment = $("#assignment").val();

        var points1 = $("#points1").val();
        var pointsOutOf1 = $("#pointsOutOf1").val();

        var grade1 = points1/pointsOutOf1;
        console.log(currCourse + " " + currAssignment + " " + grade1);

        //writeUserData(currCourse, currAssignment, grade1); 
    }
}


function writeUserData(currCourse, currAssignment, grade1) {
//     firebase.database().ref().set({
//     Course: currCourse,
//     AssignmentType: currAssignment,
//     Grade: grade1
//   });
}
