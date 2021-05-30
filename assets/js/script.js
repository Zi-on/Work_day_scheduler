// Current Time
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

var saveBtn = $(".saveBtn");
var finishBtn = $(".finishBtn");
var currentTime = today.format("H");

// this for loop adds the appropriate class to schedule box based on the current time
for (var i = 9; i < 18; i++) {
  console.log("textArea" + i);
  if (i == currentTime) {
    $(".textArea" + i).addClass("present");
  } else if (i > currentTime) {
    $(".textArea" + i).addClass("future");
  } else {
    $(".textArea" + i).addClass("past");
    localStorage.setItem(i + "H", "");
    $("#textArea" + i).val("");
  }
}

// renderSchedule runs when the page is loaded up and gets items from the local storage and displays them in their appropriate text area
var renderSchedule = function () {
  for (var i = 9; i < 18; i++) {
    $("#textArea" + i).val(localStorage.getItem(i + "H"));
  }
};

// when the finish button is clicked a for loop is ran that checks what text area the finish button belongs to, then it saves a blank string to the local 
// storage and replaces the text area content with a blank string
finishBtn.on("click", function (event) {
  var clickBtn = event.target;
  var textArea = $(clickBtn).parent().siblings()[1].id;

  for (var i = 9; i < 18; i++) {
    if (textArea == "textArea" + i) {
      localStorage.setItem(i + "H", "");
      $("#textArea" + i).val("");
    }
  }
});

// when the save button is clicked a for loop is ran that stores the textvalue to the local storage and sets its value to i + 
saveBtn.on("click", function (event) {
  var clickBtn = event.target;
  var textArea = $(clickBtn).parent().siblings()[1].id;
  var textValue = $(clickBtn).parent().siblings()[1].value;
  for (var i = 9; i < 18; i++) {
    if (textArea == "textArea" + i) {
      localStorage.setItem(i + "H", textValue);
    }
  }
});

renderSchedule();
