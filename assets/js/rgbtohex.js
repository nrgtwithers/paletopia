//this function is a dependency of rgbToHex()
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

//rgbToHex() takes in three parameters, the red green and blue values of a color, and changes them to a hexidecimal version of the same color
function rgbToHex(rgbColor) {

let regExpred = /\((\d+),/
let regExpgreen =/,(\d+),/
let regExpblue =/,(\d+)\)/

let red = parseInt(regExpred.exec(rgbColor)[1])
let green = parseInt(regExpgreen.exec(rgbColor)[1])
let blue = parseInt(regExpblue.exec(rgbColor)[1])

return "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);
}

//test
//console.log( rgbToHex("rgb(0,51,255)")); // #0033ff