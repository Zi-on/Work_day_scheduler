// Current Time
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));



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

 
 

var renderSchedule = function(){
var nineAmSchedule = localStorage.getItem("9AM").value;
console.log(nineAmSchedule);
console.log($("#textArea9"))

} 



saveBtn.on("click", function(event){
  var clickBtn = event.target;
  var textArea = $(clickBtn).parent().siblings()[1].id;
  var textValue = $(clickBtn).parent().siblings()[1].value;

 
  var string = []

  console.log(textArea)

  if (textArea == "textArea9"){
    console.log("yes9");
    string.push(textValue);
    console.log(string);
    localStorage.setItem("9AM", string);
  }
  
  if (textArea == "textArea10"){
    console.log("yes10");
    string.push(textValue);
    console.log(string);
    localStorage.setItem("10AM", string);
  }
 
  if (textArea == "textArea11"){
    console.log("yes11");
    string.push(textValue);
    console.log(string);
    localStorage.setItem("11AM", string);
  }

  if (textArea == "textArea12"){
    console.log("yes12");
    string.push(textValue);
    console.log(string);
    localStorage.setItem("12PM", string);
  }

  if (textArea == "textArea1"){
    console.log("yes1");
    string.push(textValue);
    console.log(string);
    localStorage.setItem("1PM", string);
  }

  if (textArea == "textArea2"){
    console.log("yes2");
    string.push(textValue);
    console.log(string);
    localStorage.setItem("2PM", string);
  }

  if (textArea == "textArea3"){
    console.log("yes3");
    string.push(textValue);
    console.log(string);
    localStorage.setItem("3PM", string);
  }

  if (textArea == "textArea4"){
    console.log("yes4");
    string.push(textValue);
    console.log(string);
    localStorage.setItem("4PM", string);
  }
  
  if (textArea == "textArea5"){
    console.log("yes5");
    string.push(textValue);
    console.log(string);
    localStorage.setItem("5PM", string);
  }
  
})

renderSchedule();


update();





