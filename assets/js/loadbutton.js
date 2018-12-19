$("#loadButton").on("click", function () {

    //clear displays
    $("#current-image").empty()
    $("#display").empty()
    $("#display-saved").empty()
    $("#color-info").empty()

    //display saved image in #current-image
    var img = $("<img>").attr("src", localStorage.getItem('savedUrl')).css("max-width", "100%")
    $("#current-image").append(img)

    //iterating through colors in local storage
    for (i = 0; i < 10; i++) {
        let color = localStorage.getItem(`savedColor${i}`)
        //putting colors in storage as current color pallete
        localStorage.setItem(`currentColor${i}`, color)

        //reformat each color to css format -- rgb(12,50,39) 
        let rgbColor = color

 let hexColor = rgbToHex(rgbColor)
 let colorName = ntc.name(hexColor)
 let brightness = getBrightness(rgbColor)

 //storing each color from the array into local storage
 localStorage.setItem(`currentColor${i}`, rgbColor)
 localStorage.setItem(`currentColor${i}hex`, hexColor)
 localStorage.setItem(`currentColor${i}name`, colorName[1])
 localStorage.setItem(`currentColor${i}brightness`, brightness)
}
applyColorPallet()
//$("#display").append($("<div>").text('click color pallete to display information'))
})