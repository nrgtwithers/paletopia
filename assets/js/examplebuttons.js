
exampleUrlsArr = ["http://www.accudata.com/smartdata/wp-content/uploads/2013/10/img-7-1.jpg", "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225358/Pug-On-White-01.jpg","https://images.unsplash.com/photo-1504629071068-039f93c3959a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1592&q=80","https://www.incimages.com/uploaded_files/image/1940x900/getty_90504814_366517.jpg"]

$("#example-buttons").append($("<p>").text("Try an example image by clicking on it, or paste an image url."))

exampleUrlsArr.forEach((url) => {
    console.log("ping")
    let img = $("<img>").attr("src", url).css("width", "300px")
    img.on("click",()=>{
        googleVisionImageProperties(url)
    })
    $("#example-buttons").append(img)
})