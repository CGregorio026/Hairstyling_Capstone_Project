"use strict";
//stricco mode

// runs the clock function every second to update the time every few seconds.
runClock();
setInterval("runClock()", 1000);

function runClock() {
    // Store the current date and time
    var currentDay = new Date();
    var date = currentDay.toLocaleDateString();
    var time = currentDay.toLocaleTimeString();

    // Display current time and date
    document.getElementById("clock").innerHTML = date + "<br />" + time;
}