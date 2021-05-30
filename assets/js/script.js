// Current Time
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

var saveBtn = $(".saveBtn");
var finishBtn = $(".finishBtn");
var currentTime = today.format("H");

for (var i = 9; i < 18; i++) {
  console.log("textArea"+i)
  if (i == currentTime) {
    $(".textArea"+i).addClass("present");
  } else if (i > currentTime) {
    $(".textArea"+i).addClass("future");
  } else {
    $(".textArea"+i).addClass("past");
    localStorage.setItem(i+"H", "")
    $("#textArea"+ i).val("")
  }
    }


var renderSchedule = function () {
  for (var i = 9; i < 18; i++){
    $("#textArea"+ i).val(localStorage.getItem(i+"H"));
  }
};
finishBtn.on("click", function (event) {
  var clickBtn = event.target;
  var textArea = $(clickBtn).parent().siblings()[1].id;


  for (var i = 9; i < 18; i++){
    if (textArea == "textArea"+i){
      localStorage.setItem(i+"H", "");
      $("#textArea"+i).val("")
    }
  }

});

saveBtn.on("click", function (event) {
  var clickBtn = event.target;
  var textArea = $(clickBtn).parent().siblings()[1].id;
  var textValue = $(clickBtn).parent().siblings()[1].value;
  for (var i = 9; i < 18; i++) {
    if (textArea == "textArea"+i) {
      localStorage.setItem(i+"H", textValue);
    }
  }
});

renderSchedule();

