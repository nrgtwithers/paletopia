$("#loadButton").on("click", function () {

    //clear displays
    $("#display").empty()
    $("#display-saved").empty()

    //print display headers
    $("#display").append($("<h1>").text("Current Color Pallete"))
    $("#display-saved").append($("<h1>").text("Saved Color Pallete"))

    //iterating through colors in local storage
    for (i = 0; i < 10; i++) {
        let color = localStorage.getItem(`savedColor${i}`)
        localStorage.setItem(`newColor${i}`, color)

        //displaying css formatted color in the DOM
        $("#display").append($("<div>").text(color).css(`background-color`, color).css('min-height', '75px'))
        $("#display-saved").append($("<div>").text(color).css(`background-color`, color).css('min-height', '10px'))
    }

    //clear current image
    $("#current-image").empty()
    
    //display saved image in #current-image
    var img = $("<img>").attr("src", localStorage.getItem('savedUrl')).css("max-width", "100%")
    $("#current-image").append(img)

    //apply color pallet from local storage to css
    applyColorPallet()
})