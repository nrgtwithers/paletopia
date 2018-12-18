$("#loadButton").on("click", function () {

    //clear displays
    $("#current-image").empty()
    $("#display").empty()
    $("#display-saved").empty()
    $("#color-info").empty()

    //display saved image in #current-image
    var img = $("<img>").attr("src", localStorage.getItem('savedUrl')).css("max-width", "100%")
    $("#current-image").append(img)

    //print display headers
    $("#display").append($("<h1>").text("Current Color Pallete"))

    //iterating through colors in local storage
    for (i = 0; i < 10; i++) {
        let color = localStorage.getItem(`savedColor${i}`)
        //putting colors in storage as current color pallete
        localStorage.setItem(`newColor${i}`, color)

        //reformat each color to css format -- rgb(12,50,39) 
        let rgbColor = color

        //displaying css formatted color in the DOM
        $("#display").append($("<div>").text(``).css(`background-color`, rgbColor).css('min-height', '200px').css('max-width', '10%').css('min-width', '10%').css('float', 'left'))

        let hexColor = rgbToHex(rgbColor)
        let colorName = ntc.name(hexColor)

        $("#color-info").append($("<p>").text(`Color${i}: ${hexColor} ${rgbColor} ${colorName[1]}`))
    }

    //apply color pallet from local storage to css
    applyColorPallet()
})