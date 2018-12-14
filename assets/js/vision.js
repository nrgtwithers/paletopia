//THIS DATA IS FOR USE WITH OTHER FEATURES OF GOOGLE VISION API 
// const features = ['LABEL_DETECTION', 'TEXT_DETECTION', 'FACE_DETECTION', 'LANDMARK_DETECTION', 'LOGO_DETECTION', 'SAFE_SEARCH_DETECTION', 'IMAGE_PROPERTIES']
// const likelyhoodValue = {
//     'UNKNOW':null,
// 'VERY_UNLIKELY':-2,
// 'UNLIKELY':-1,
// 'POSSIBLE':0, 
// 'LIKELY':1,
//  'VERY_LIKELY':2 }

//defining function for the call to the Google Vision API
var googleVisionCall = (url) => {

    //api request to google vision
    var visionOption = JSON.stringify({ "requests": [{ "image": { "source": { "imageUri": url } }, "features": [{ "type": "IMAGE_PROPERTIES", "maxResults": 5 }] }] });
    var visionResponse = new XMLHttpRequest;
    visionResponse.open("POST", "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyA9EHeI2lrYJnjfEMhI0rU-J8yyfAOSOAs", !0);
    visionResponse.send(visionOption)

    //doing stuff with the request
    visionResponse.onload = function () {

        //storing colors from vision Response into array.
        colorsArray = JSON.parse(visionResponse.response).responses[0].imagePropertiesAnnotation.dominantColors.colors

        //iterating over array of colors
        for (i = 0; i < colorsArray.length; i++) {
            let color = colorsArray[i].color    
            console.log(color)

            //storing each color from the array into local storage
            localStorage.setItem(`newColor${i}`, JSON.stringify(color))
        }
    }
}

//making the submit but run the googleVisionCall with the url from the userInput form
$("#submitButton").on("click", function () {
    var userInput = $("#userInput").val()
    event.preventDefault()
    googleVisionCall(userInput)
})