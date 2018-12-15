//making the submit button call the googleVisionImageProperties with the url from the userInput form, and display image in #display
$("#submitButton").on("click", function () {
    event.preventDefault() //prevent refresh
    $("#current-image").empty
    $("#display").empty

    var userInput = $("#userInput").val()

    //appending request image to display div
    var img = $("<img>").attr("src", userInput).css("max-width", "400px")
    $("#current-image").append(img)
    $("#display").append($("<h1>")).text("loading...")
    //call function that will analize colors, store colors in local storage, and display colors in #display
    googleVisionImageProperties(userInput)
})