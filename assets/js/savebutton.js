$("#saveButton").on("click", function () {
    $("#display-saved").empty()

    $("#display-saved").append($("<h1>").text("Saved Pallete"))

    for (i = 0; i < colorsArray.length; i++) {
        let color = colorsArray[i].color

        //reformat each color to css format -- rgb(12,50,39) 
        let rgbColor = `rgb(${color.red},${color.green},${color.blue})`

        //displaying css formatted color in the DOM
        $("#display-saved").append($("<div>").text(rgbColor).css(`background-color`, rgbColor).css('min-height', '10px'))

        //storing each color from the array into local storage
        localStorage.setItem(`savedColor${i}`, rgbColor)

        let currentUrl = localStorage.getItem('newUrl')
        localStorage.setItem('savedUrl', currentUrl)
    }
})

