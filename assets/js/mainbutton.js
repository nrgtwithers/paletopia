//making the submit button call the googleVisionImageProperties with the url from the userInput form, and display image in #display
$("#submitButton").on("click", function () {

    event.preventDefault() //prevent refresh

    //getting user input url from form
    var userInput = $("#userInput").val()

    //storing current img url in local storage
    localStorage.setItem("currentUrl", userInput)

    //clear displays
    $("#current-image").empty()
    $("#display").empty()

    //call function that will analize colors, store colors in local storage, and display colors in #display
    getColors(userInput)
})

