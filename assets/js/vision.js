
const features = ['LABEL_DETECTION', 'TEXT_DETECTION', 'FACE_DETECTION', 'LANDMARK_DETECTION', 'LOGO_DETECTION', 'SAFE_SEARCH_DETECTION', 'IMAGE_PROPERTIES']
const likelyhoodValue = {
    'UNKNOW': null,
    'VERY_UNLIKELY': -2,
    'UNLIKELY': -1,
    'POSSIBLE': 0,
    'LIKELY': 1,
    'VERY_LIKELY': 2
}

//defining function to call google Vision, get image properties, store colors in local memory and display colors in html div with id #display
var googleVisionImageProperties = (url) => {

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

        $("#display").append($("<h1>").text("Current Color Pallete"))
        //iterating over array of colors colorsArray
        for (i = 0; i < colorsArray.length; i++) {
            let color = colorsArray[i].color

            //reformat each color to css format -- rgb(12,50,39) 
            let rgbColor = `rgb(${color.red},${color.green},${color.blue})`

            //displaying css formatted color in the DOM
            $("#display").append($("<div>").text(rgbColor).css(`background-color`, rgbColor).css('min-height', '75px'))

            //storing each color from the array into local storage
            localStorage.setItem(`newColor${i}`, rgbColor)
        }
    }

    $(document).ready(function () {
        //pulling rgb colors from current color pallete
        var sideBar = localStorage.getItem('newColor0');
        var sideBarHeader = localStorage.getItem('newColor3');
        var sideBarTag = localStorage.getItem('newColor4')
        var header = localStorage.getItem('newColor6')
        var footer = localStorage.getItem('newColor8')
        var button = localStorage.getItem('newColor2')
        var buttonText = localStorage.getItem('newColor9')

        //setting css color properties to colors from the current color pallete 
        $('.sidebar').css('background-color', sideBar);
        $('.sidebar').css('color', sideBarHeader);
        $('.brand-tagline').css('color', sideBarTag);
        $('.typewriter h1').css('color', header);
        $('.footer').css('color', footer);
        $('#submitButton').css('background-color', button);
        $('#submitButton').css('color', buttonText);

        //animating background colors
        $("html").animate({ backgroundColor: sideBar }, 2000).delay(1000).animate({ backgroundColor: '#FFF' }, 3000);
    })
}