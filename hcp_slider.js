"use strict";
//stricco mode

var i = 0; //start point
var images = []; //image array
var time = 2000; //time (seconds in 1000 milliseconds)

// image list
// creates an array with each picture as a value, starting at zero (because arrays start at zero).
images[0] = "ctso1.jpg"
images[1] = "ctso2.jpg"
images[2] = "ctso3.jpg"

// function to change the images
function slider() {
    document.slide.src = images[i];

    // as the array has three items but the array starts at 2, it will check to ensure that the i value is in the range to display a photo. if it is not in that range, it sets it to the first value again, 0.
    if(i < images.length -1){
        //adds one to the index
        i++
    } else {
        //sets the index back to 0
        i = 0;
    }

    // runs the function upon reaching the time set at the time variable.
    setTimeout("slider()", time);
}

window.onload = slider;