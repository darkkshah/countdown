var sec = +prompt("Enter Seconds");
var min = +prompt("Enter Minutes");
var hour = +prompt("Enter Hours");

var secVal = document.getElementById("Sec");
var minVal = document.getElementById("Min");
var hourVal = document.getElementById("Hour");

var interval;
var startBtn = document.getElementById("startBtn");

function renderVal() {
    secVal.innerHTML = sec;
    minVal.innerHTML = min;
    hourVal.innerHTML = hour;
}

function timeStart() {
    startBtn.disabled = true;
    if (sec == 0 && min == 0 && hour == 0) {
        stopTime();
        return;
    }

    sec--;
    if (sec < 0) {
        sec = 59;
        min--;
        if (min < 0) {
            min = 59;
            hour--;
            if (hour < 0) {
                hour = 0;
            }
        }
    }
    renderVal();
}

function timer() {
    interval = setInterval(function () {
        timeStart();
    }, 1000);
}

function stopTime() {
    startBtn.disabled = false;
    clearInterval(interval);
}

function clearTime() {
    startBtn.disabled = false;
    sec = 0;
    min = 0;
    hour = 0;
    stopTime();
    renderVal();
}
