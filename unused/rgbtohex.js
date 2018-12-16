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

return "#" + componentToHex(parseInt(regExpred.exec(rgbColor)[1])) + componentToHex(parseInt(regExpgreen.exec(rgbColor)[1])) + componentToHex(parseInt(regExpblue.exec(rgbColor)[1]));
}

//test
//console.log( rgbToHex("rgb(0,51,255)")); // #0033ff