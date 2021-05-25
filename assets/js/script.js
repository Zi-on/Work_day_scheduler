// Current Time
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

console.log(today);

var currentTime = today.format("h a")

var nineAm = moment("9 am", "h a").format("h a");

if (nineAm == currentTime){
   var nine = $('.nine').addClass('present')
}else if (nineAm > currentTime) {
    var nine = $('.nine').addClass('future')
}
else {
    var nine = $('.nine').addClass('past')
}


console.log(currentTime)
console.log(nineAm)