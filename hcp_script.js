"use strict";
//stricco mode

// runs the clock function every second to update the time every few seconds.
runClock();
setInterval("runClock()", 1000);
// upon loading the page, the color generator function will run
window.addEventListener("load", colorGenerator);

function runClock() {
    // Store the current date and time
    var currentDay = new Date();
    var date = currentDay.toLocaleDateString();
    var time = currentDay.toLocaleTimeString();

    // Display current time and date
    document.getElementById("clock").innerHTML = date + "<br />" + time;
}

function colorGenerator() {
    // Generates a random number ranging from 0 to 1, multiplied by 16777215 (which is 256(which is based off the color values for rgb, plus 0.)^3(how many possibilities for 3 color values), minus 1 because the value #000000 is black) to turn it into hexadecimal, and rounded down to a whole number value. There, that number is turned into a string. This allows it to be used to create a string.
    var colorNumber = Math.floor(Math.random() * 16777215).toString(16);
    // this displays the color of the background as a hexidecimal value, using the colornumber as the number.
    document.getElementById("coloredBody").style.backgroundColor = "#" + colorNumber;
    // upon clicking this button, it will run the function again, generating a new color.
    document.getElementById("colorButton").onclick = colorGenerator;
    document.getElementById("colorPicture").onclick = colorGenerator;
}