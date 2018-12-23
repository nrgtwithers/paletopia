//defining function to call google Vision, get image properties, store colors in local memory and display colors in html div with id #display
var getColors = (url) => {

    //clear displays
    $("#current-image").empty()
    $("#display").empty()



    //appending request image to display div
    var img = $("<img>").attr("src", url).css("max-width", "100%").css("border-radius", "10px");
    $("#current-image").append(img);
    $("#display").append($("<h1>")).text("sploading...");
    var loadingImg = ($("<img>")).attr('src','https://www.blackmores.com.au/App_Themes/AU/images/loading.gif')
    console.log(loadingImg)
    //$("#display").append
    $("img").addClass('animated 5s fadeIn');

    //api request to google vision. This returns the response as visionResponse
    var visionOption = JSON.stringify({ "requests": [{ "image": { "source": { "imageUri": url } }, "features": [{ "type": 'IMAGE_PROPERTIES', "maxResults": 5 }] }] });
    var visionResponse = new XMLHttpRequest;
    visionResponse.open("POST", "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCU-PY2C-94D_yzYQeYvxO-A3SUPrwlNkc", !0);
    visionResponse.send(visionOption)
console.log(visionResponse);
    //doing stuff with the response once the response is loaded
    visionResponse.onload = function () {

        //putting colors from visionResponse into an array colorsArray
        colorsArray = JSON.parse(visionResponse.response).responses[0].imagePropertiesAnnotation.dominantColors.colors

        //storing colorsArray in local storage
        localStorage.setItem("currentColorsArray", JSON.stringify(colorsArray))

        //empty display used to show colors
        $("#display").empty()
        $("#color-info").empty()
        $("#display").addClass('animated forwards fadeIn');
        //iterating over array of colors colorsArray
        for (i = 0; i < colorsArray.length; i++) {
            let color = colorsArray[i].color

            //reformat each color to css format -- rgb(12,50,39) 
            let rgbColor = `rgb(${color.red},${color.green},${color.blue})`
            let hexColor = rgbToHex(rgbColor)
            let colorName = ntc.name(hexColor)
            let brightness = getBrightness(rgbColor)

          
            //storing each color from the array into local storage
            localStorage.setItem(`currentColor${i}`, rgbColor)
            localStorage.setItem(`currentColor${i}hex`, hexColor)
            localStorage.setItem(`currentColor${i}name`, colorName[1])
            localStorage.setItem(`currentColor${i}brightness`, brightness)
        }
        // $("#display").append($("<div>").text('click color pallete to display information'))
        applyColorPallet()
    }
}

//getColors('https://picsum.photos/750/550/?random')