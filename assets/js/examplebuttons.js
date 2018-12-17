
exampleUrlsArr = [
    {
        url: "https://images.unsplash.com/reserve/RNm0KceQ4Gbpb0xldOe7_DSC_0679_2.JPG?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=702&q=80",
        name: "banana"
    },
    {   
        url:"https://images.unsplash.com/photo-1534409039973-740b2b5d82e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1030&q=80",
        name:"strawberry"

    },
    {
        url:"https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        name:"blueberry"
    },
    {
        url:"https://images.unsplash.com/photo-1525423235703-6c285d74010e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        name:"watermelon"
    },
]

$("#example-buttons").append($("<p>").text("Try one of these."))

exampleUrlsArr.forEach((urlname) => {
    console.log(urlname.url)
    let button = $("<button>").text(urlname.name)
    button.on("click", () => {
        event.preventDefault()
        getColors(urlname.url)
    })
    button.addClass("example-buttons")
    $("#example-buttons").append(button)
})