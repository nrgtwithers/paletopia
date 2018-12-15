
const features = ['LABEL_DETECTION', 'TEXT_DETECTION', 'FACE_DETECTION', 'LANDMARK_DETECTION', 'LOGO_DETECTION', 'SAFE_SEARCH_DETECTION', 'IMAGE_PROPERTIES']
const likelyhoodValue = {
    'UNKNOW': null,
    'VERY_UNLIKELY': -2,
    'UNLIKELY': -1,
    'POSSIBLE': 0,
    'LIKELY': 1,
    'VERY_LIKELY': 2
}

//defining function to call google Vision, get image properties, store colors in local memory and display colors in html
var googleVisionImageProperties = (url) => {

    //api request to google vision
    var visionOption = JSON.stringify({ "requests": [{ "image": { "source": { "imageUri": url } }, "features": [{ "type": 'IMAGE_PROPERTIES', "maxResults": 5 }] }] });
    var visionResponse = new XMLHttpRequest;
    visionResponse.open("POST", "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyA9EHeI2lrYJnjfEMhI0rU-J8yyfAOSOAs", !0);
    visionResponse.send(visionOption)

    //doing stuff with the request
    visionResponse.onload = function () {

        //storing colors from vision Response into array.
        colorsArray = JSON.parse(visionResponse.response).responses[0].imagePropertiesAnnotation.dominantColors.colors

        localStorage.setItem("newColorsArray", JSON.stringify(colorsArray))

        //iterating over array of colors
        for (i = 0; i < colorsArray.length; i++) {
            let color = colorsArray[i].color

            //reformat color from googleVision response to css 
            let rgbColor = `rgb(${color.red},${color.green},${color.blue})`

            //displaying css formatted color in the DOM
            $("#display").append($("<div>").text(rgbColor).css(`background-color`,rgbColor).css('min-height','100px'))

            //storing each color from the array into local storage
            localStorage.setItem(`newColor${i}`, rgbColor)
        }
    }
}

//making the submit button call the googleVisionCall with the url from the userInput form, and display image
$("#submitButton").on("click", function () {
    event.preventDefault()
    var userInput = $("#userInput").val()
    //appending request image to display div
    var img = $("<img>").attr("src", userInput)
    $("#display").append(img)
    
    googleVisionImageProperties(userInput)
})