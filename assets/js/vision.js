//defining function to call google Vision, get image properties, store colors in local memory and display colors in html div with id #display
var getColors = (url) => {

    //clear displays
    $("#current-image").empty()
    $("#display").empty()

    //appending request image to display div
    var img = $("<img>").attr("src", url).css("max-width", "100%")
    $("#current-image").append(img)
    $("#display").append($("<h1>")).text("loading...")

    //api request to google vision. This returns the response as visionResponse
    var visionOption = JSON.stringify({ "requests": [{ "image": { "source": { "imageUri": url } }, "features": [{ "type": 'IMAGE_PROPERTIES', "maxResults": 5 }] }] });
    var visionResponse = new XMLHttpRequest;
    visionResponse.open("POST", "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyA9EHeI2lrYJnjfEMhI0rU-J8yyfAOSOAs", !0);
    visionResponse.send(visionOption)

    //doing stuff with the response once the response is loaded
    visionResponse.onload = function () {

        //putting colors from visionResponse into an array colorsArray
        colorsArray = JSON.parse(visionResponse.response).responses[0].imagePropertiesAnnotation.dominantColors.colors

        //storing colorsArray in local storage
        localStorage.setItem("newColorsArray", JSON.stringify(colorsArray))

        //empty display used to show colors
        $("#display").empty()
        $("#color-info").empty()

        //iterating over array of colors colorsArray
        for (i = 0; i < colorsArray.length; i++) {
            let color = colorsArray[i].color

            //reformat each color to css format -- rgb(12,50,39) 
            let rgbColor = `rgb(${color.red},${color.green},${color.blue})`

            //displaying css formatted color in the DOM
            $("#display").append($("<div>").text(``).css(`background-color`, rgbColor).css('min-height', '200px').css('max-width','10%').css('min-width','10%').css('float','left').css('animation', 'rollIn 2s forwards'))

            let hexColor = rgbToHex(rgbColor)
            let colorName = ntc.name(hexColor)
            let brightness = getBrightness(color.red, color.green, color.blue)

            $("#color-info").append($("<p>").text(`Color${i}: ${hexColor} ${rgbColor} ${colorName[1]} brightness:${brightness}`))

            //storing each color from the array into local storage
            localStorage.setItem(`newColor${i}`, rgbColor)
        }
        applyColorPallet()
    }
}