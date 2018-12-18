//defining a function that will apply colors currently in local storage to the css properties that color the text and backgrounds of the document
let applyColorPallet = function () {
    $(document).ready(function () {

        //creating an array of colors with brightnessess stored in current colors local storage
        let colorsBrightnessArray = []
        for (let i = 0; i < 10; i++) {

            let newObj = {}
            newObj.color = localStorage.getItem(`currentColor${i}`)
            newObj.brightness = localStorage.getItem(`currentColor${i}brightness`)
            colorsBrightnessArray.push(newObj)
        }

        let sortedColors = colorsBrightnessArray.sort(function (a, b) {
            return b.brightness - a.brightness;
        })

        sortedColors.forEach((obj) => {
            console.log(obj)
        }
        )

        /*
        darkest - sortedColors[9].color
        darker
        dark
        mediumdarker
        mediumdark
        mediumlight
        mediumlighter
        light
        lighter
        lightest - sortedColors[0].color
        */





        //pulling rgb colors from current color pallete
        var sideBar = localStorage.getItem('currentColor0');
        var sideBarHeader = localStorage.getItem('currentColor3');
        var sideBarTag = localStorage.getItem('currentColor4')
        var header = localStorage.getItem('currentColor6')
        var subheader = localStorage.getItem('currentColor1')
        var footer = localStorage.getItem('currentColor8')
        var button = localStorage.getItem('currentColor2')
        var buttonText = localStorage.getItem('currentColor9')
        var button2 = localStorage.getItem('currentColor5')
        var buttonText2 = localStorage.getItem('currentColor7')


        //setting css color properties to colors from the current color pallete 
        $('.sidebar').css('background-color', sortedColors[5].color);
        $('.sidebar').css('color', sortedColors[1].color);
        $('.brand-tagline').css('color', sortedColors[9].color);
        $('.typewriter h1').css('color', 'red');
        $('.footer').css('color', sortedColors[6].color);
        $('.color-button').css('background-color', sortedColors[8].color);
        $('.color-button').css('color', sortedColors[4].color);
   
        $('.example-buttons').css('background-color', sortedColors[7].color);
        $('.example-buttons').css('color', sortedColors[3].color);
        $('.subheader').css('color', 'red');
        $('#directions').css('color', sortedColors[5].color);
        $('#example-buttons').css('color', sortedColors[5].color);
        $("#userInput").css('background-color', sortedColors[0].color)
        $("#userInput").css('color', sortedColors[2].color)
        $("a").css('color', sortedColors[7].color)
        // $("<button>").hover(function(){
        //     $(this).css("background-color", sideBarTag);
        //     },

        //animating background colors
        $("html").animate()
        $("html").animate({ backgroundColor: sortedColors[5].color}, 1000).delay(150).animate({ backgroundColor: sortedColors[0].color }, 1500);
    })
}