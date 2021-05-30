// Current Time
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

var saveBtn = $(".saveBtn");
var finishBtn = $(".finishBtn");
var currentTime = today.format("H");

var textArea9 = $("#textArea9");
var textArea10 = $("#textArea10");
var textArea11 = $("#textArea11");
var textArea12 = $("#textArea12");
var textArea1 = $("#textArea1");
var textArea2 = $("#textArea2");
var textArea3 = $("#textArea3");
var textArea4 = $("#textArea4");
var textArea5 = $("#textArea5");

var textArea = "textArea";

for (var i = 9; i < 18; i++) {
  console.log("textArea"+[i])
  if ([i] == currentTime) {
    $(textArea+[i]).addClass("present");
  } else if ([i] > currentTime) {
    $("textArea"+[i]).addClass("future");
  } else {
    $("textArea"+[i]).addClass("past");
}

}
console.log($("textArea"+[i]))
/*
function update() {
  if (9 == currentTime) {
    $(".nine").addClass("present");
  } else if (9 > currentTime) {
    $(".nine").addClass("future");
  } else {
    $(".nine").addClass("past");
    localStorage.setItem("9AM", "");
    textArea9.val("");
  }
  if (10 == currentTime) {
    $(".ten").addClass("present");
  } else if (10 > currentTime) {
    $(".ten").addClass("future");
  } else {
    $(".ten").addClass("past");
    localStorage.setItem("10AM", "");
    textArea10.val("");
  }
  if (11 == currentTime) {
    $(".eleven").addClass("present");
  } else if (11 > currentTime) {
    $(".eleven").addClass("future");
  } else {
    $(".eleven").addClass("past");
    localStorage.setItem("11AM", "");
    textArea11.val("");
  }
  if (12 == currentTime) {
    $(".twelve").addClass("present");
  } else if (12 > currentTime) {
    $(".twelve").addClass("future");
  } else {
    $(".twelve").addClass("past");
    localStorage.setItem("12PM", "");
    textArea12.val("");
  }
  if (13 == currentTime) {
    $(".one").addClass("present");
  } else if (13 > currentTime) {
    $(".one").addClass("future");
  } else {
    $(".one").addClass("past");
    localStorage.setItem("1PM", "");
    textArea1.val("");
  }
  if (14 == currentTime) {
    $(".two").addClass("present");
  } else if (14 > currentTime) {
    $(".two").addClass("future");
  } else {
    $(".two").addClass("past");
    localStorage.setItem("2PM", "");
    textArea2.val("");
  }
  if (15 == currentTime) {
    $(".three").addClass("present");
  } else if (15 > currentTime) {
    $(".three").addClass("future");
  } else {
    $(".three").addClass("past");
    localStorage.setItem("3PM", "");
    textArea3.val("");
  }
  if (16 == currentTime) {
    $(".four").addClass("present");
  } else if (16 > currentTime) {
    $(".four").addClass("future");
  } else {
    $(".four").addClass("past");
    localStorage.setItem("4PM", "");
    textArea4.val("");
  }
  if (17 == currentTime) {
    $(".five").addClass("present");
  } else if (17 > currentTime) {
    $(".five").addClass("future");
  } else {
    $(".five").addClass("past");
    localStorage.setItem("5PM", "");
    textArea5.val("");
  }
}*/

var renderSchedule = function () {
  var nineAm = localStorage.getItem("9AM");
  var tenAm = localStorage.getItem("10AM");
  var elevenAm = localStorage.getItem("11AM");
  var twelvePm = localStorage.getItem("12PM");
  var onePm = localStorage.getItem("1PM");
  var twoPm = localStorage.getItem("2PM");
  var threePm = localStorage.getItem("3PM");
  var fourPm = localStorage.getItem("4PM");
  var fivePm = localStorage.getItem("5PM");
  textArea9.val(nineAm);
  textArea10.val(tenAm);
  textArea11.val(elevenAm);
  textArea12.val(twelvePm);
  textArea1.val(onePm);
  textArea2.val(twoPm);
  textArea3.val(threePm);
  textArea4.val(fourPm);
  textArea5.val(fivePm);
};
finishBtn.on("click", function (event) {
  var clickBtn = event.target;
  var textArea = $(clickBtn).parent().siblings()[1].id;
  if (textArea == "textArea9") {
    console.log("yes");
    localStorage.setItem("9AM", "");
    textArea9.val("");
  }

  if (textArea == "textArea10") {
    localStorage.setItem("10AM", "");
    textArea10.val("");
  }

  if (textArea == "textArea11") {
    localStorage.setItem("11AM", "");
    textArea11.val("");
  }

  if (textArea == "textArea12") {
    localStorage.setItem("12PM", "");
    textArea12.val("");
  }

  if (textArea == "textArea1") {
    localStorage.setItem("1PM", "");
    textArea1.val("");
  }

  if (textArea == "textArea2") {
    localStorage.setItem("2PM", "");
    textArea2.val("");
  }

  if (textArea == "textArea3") {
    localStorage.setItem("3PM", "");
    textArea3.val("");
  }

  if (textArea == "textArea4") {
    localStorage.setItem("4PM", "");
    textArea4.val("");
  }

  if (textArea == "textArea5") {
    localStorage.setItem("5PM", "");
    textArea5.val("");
  }
});

saveBtn.on("click", function (event) {
  var clickBtn = event.target;
  var textArea = $(clickBtn).parent().siblings()[1].id;
  var textValue = $(clickBtn).parent().siblings()[1].value;
  if (textArea == "textArea9") {
    localStorage.setItem("9AM", textValue);
  }
  if (textArea == "textArea10") {
    localStorage.setItem("10AM", textValue);
  }
  if (textArea == "textArea11") {
    localStorage.setItem("11AM", textValue);
  }
  if (textArea == "textArea12") {
    localStorage.setItem("12PM", textValue);
  }
  if (textArea == "textArea1") {
    localStorage.setItem("1PM", textValue);
  }
  if (textArea == "textArea2") {
    localStorage.setItem("2PM", textValue);
  }
  if (textArea == "textArea3") {
    localStorage.setItem("3PM", textValue);
  }
  if (textArea == "textArea4") {
    localStorage.setItem("4PM", textValue);
  }
  if (textArea == "textArea5") {
    localStorage.setItem("5PM", textValue);
  }
});

renderSchedule();
/*update();*/
