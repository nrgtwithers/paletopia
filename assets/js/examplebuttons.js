
exampleUrlsArr = [

    {   
        url:"https://images.unsplash.com/photo-1534409039973-740b2b5d82e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1030&q=80",
        name:"strawberry"

    },
    {
        url:"https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        name:"blueberry"
    },
    // {
    //     url: "https://images.unsplash.com/reserve/RNm0KceQ4Gbpb0xldOe7_DSC_0679_2.JPG?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    //     name: "banana"
    // },
    // {
    //     url:"https://images.unsplash.com/photo-1525423235703-6c285d74010e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    //     name:"watermelon"
    // },
    // {
    //     url:"https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    //     name:"coffee"
    // },
    {
        url:"https://images.unsplash.com/photo-1533017232161-9e487b18e41d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        name:"pug"
    },
    {
        url:"https://images.unsplash.com/photo-1526452765549-517b13adb4f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        name:"calico"
    },
    // {
    //     url:"http://www.accudata.com/smartdata/wp-content/uploads/2013/10/img-7-1.jpg",
    //     name:"city"
    // },
    {
        url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/402px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
        name:"monalisa"
    },
    // {
    //     url:"https://thumbs-prod.si-cdn.com/1eeRoJjAO2R7690lA67-uGUIQ3c=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/The-Creation-of-Adam-Michelangelo-631.jpg",
    //     name:"sisteen"
    // }
]


$("#example-buttons").append($("<p>").text("Or try one of these."))

exampleUrlsArr.forEach((urlname) => {
    let button = $("<button>").addClass('xyz pure-u-1-5').text(urlname.name)
    button.on("click", () => {
        $("#display").removeClass('animated forwards fadeIn');
        event.preventDefault()
        localStorage.setItem("currentUrl", urlname.url)
        getColors(urlname.url)
    })
    button.addClass("example-buttons")
    $("#example-buttons").append(button)
})