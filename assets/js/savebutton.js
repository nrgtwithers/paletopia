$("#saveButton").on("click", function () {

    for (i = 0; i < colorsArray.length; i++) {
        let color = colorsArray[i].color

        //reformat each color to css format -- rgb(12,50,39) 
        let rgbColor = `rgb(${color.red},${color.green},${color.blue})`


        //storing each color from the array into local storage
        localStorage.setItem(`savedColor${i}`, rgbColor)

        let currentUrl = localStorage.getItem('currentUrl')
        localStorage.setItem('savedUrl', currentUrl)
    }
})

