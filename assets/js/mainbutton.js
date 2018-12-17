//making the submit button call the googleVisionImageProperties with the url from the userInput form, and display image in #display
$("#submitButton").on("click", function () {

    event.preventDefault() //prevent refresh

    //getting user input url from form
    var userInput = $("#userInput").val()

    //storing current img url in local storage
    localStorage.setItem("newUrl", userInput)

    //clear displays
    $("#current-image").empty()
    $("#display").empty()

    //call function that will analize colors, store colors in local storage, and display colors in #display
    getColors(userInput)

    //call function that will apply the color palllet from local storage to the css properties. Waits 3.5 seconds to make sure the colors from the most recent call are in local storage when this function is run. 
   // setTimeout(function(){applyColorPallet()}, 2100)
})

