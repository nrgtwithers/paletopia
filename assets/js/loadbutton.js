$("#loadButton").on("click", function () {

    console.log('pong')
    $("#display").empty()
    $("#display").append($("<h1>").text("Current Color Pallete"))

    for (i = 0; i < 10; i++) {
        let color = localStorage.getItem(`savedColor${i}`)
        localStorage.setItem(`newColor${i}`, color)

        //displaying css formatted color in the DOM
        $("#display").append($("<div>").text(color).css(`background-color`, color).css('min-height', '75px'))
    }

    //appending request image to display div
    $("#current-image").empty()
    var img = $("<img>").attr("src", localStorage.getItem('savedUrl')).css("max-width", "100%")
    $("#current-image").append(img)

    applyColorPallet()
})

