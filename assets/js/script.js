// Current Time
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));


var textArea = $(".description");
var saveBtn = $(".saveBtn");
var currentTime = today.format("H");


function update(){
if (9 == currentTime) {
  $(".nine").addClass("present");
} else if (9 > currentTime) {
  $(".nine").addClass("future");
} else {
  $(".nine").addClass("past");
}
if (10 == currentTime) {
  $(".ten").addClass("present");
} else if (10 > currentTime) {
  $(".ten").addClass("future");
} else if (10 < currentTime) {
  $(".ten").addClass("past");
}
if (11 == currentTime) {
  $(".eleven").addClass("present");
} else if (11 > currentTime) {
  $(".eleven").addClass("future");
} else {
  $(".eleven").addClass("past");
}
if (12 == currentTime) {
  $(".twelve").addClass("present");
} else if (12 > currentTime) {
  $(".twelve").addClass("future");
} else {
  $(".twelve").addClass("past");
}
if (13 == currentTime) {
  $(".one").addClass("present");
} else if (13 > currentTime) {
  $(".one").addClass("future");
} else {
  $(".one").addClass("past");
}
if (14 == currentTime) {
  $(".two").addClass("present");
} else if (14 > currentTime) {
  $(".two").addClass("future");
} else {
  $(".two").addClass("past");
}
if (15 == currentTime) {
  $(".three").addClass("present");
} else if (15 > currentTime) {
  $(".three").addClass("future");
} else {
  $(".three").addClass("past");
}
if (16 == currentTime) {
 $(".four").addClass("present");
} else if (16 > currentTime) {
  $(".four").addClass("future");
} else {
  $(".four").addClass("past");
}
if (17 == currentTime) {
  $(".five").addClass("present");
} else if (17 > currentTime) {
  $(".five").addClass("future");
} else {
  $(".five").addClass("past");
}
}

 var lastSchedule = localStorage.getItem("text");
 $("#textArea9").val().innerHTML = lastSchedule;
 console.log(lastSchedule);

var saveSchedule = function(){
 var text = $('#textArea9').val();

 localStorage.setItem("text", text);

}

saveBtn.on("click", function(){
  saveSchedule();
  var hourSaved = $(this).attr("hour");
  
})




update();





