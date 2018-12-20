//defining a function that will apply colors currently in local storage to the css properties that color the text and backgrounds of the document
let applyColorPallet = function () {
    $(document).ready(function () {

        //creating an array of colors with brightnessess stored in current colors local storage
        let colorsBrightnessArray = []
        for (let i = 0; i < 10; i++) {

            let newObj = {}
            newObj.color = localStorage.getItem(`currentColor${i}`)

            //displaying css formatted color in the color pallete to the right of image
            let newDiv = ($("<div>").text(' ').css(`background-color`, newObj.color).css('min-height', '64px').attr('id', `colorDisplay${i}`))

            $("#display").append(newDiv)

            newObj.brightness = localStorage.getItem(`currentColor${i}brightness`)
            colorsBrightnessArray.push(newObj)
        }

        //make button for displaying info on pallete for each color
        let displayInfoButton = $('<button>').text("click to display palette info").addClass('color-button').attr('width', '100%')

        displayInfoButton.on("click", () => {
            displayPaletteInfo()
        })

        $("#display").prepend(displayInfoButton)

        let sortedColors = colorsBrightnessArray.sort(function (a, b) {
            return b.brightness - a.brightness;
        })

        //make border around palette
        $(".palette").css('border-style', 'solid').css('border-color', sortedColors[2].color)

        localStorage.setItem(`currentColorLight`, sortedColors[0].color)
        localStorage.setItem(`currentColorDark`, sortedColors[9].color)

        sortedColors.forEach((obj) => {
            //   console.log(obj)
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

        //setting css color properties to colors from the current color pallete 
        // $('.sidebar').css(background-color, sortedColors[5].color);
        $('.brand-title').animate(function (now, fx) { $(this).css('-webkit-transform', rotate('+now+deg)')) });
        $('.sidebar').animate({ backgroundColor: sortedColors[5].color }, 300);
        $('.sidebar').animate({ color: sortedColors[1].color }, 300);
        $('.brand-tagline').css('color', sortedColors[9].color);
        $('#contact-us').css('color', sortedColors[1].color);
        $('.color-button').css('background-color', sortedColors[8].color);
        $('.color-button').css('color', sortedColors[4].color);
        $('.example-buttons').css('background-color', sortedColors[7].color);
        $('.example-buttons').css('color', sortedColors[3].color);
        $('#directions').css('color', sortedColors[6].color);
        $('#example-buttons').css('color', sortedColors[5].color);
        $("input").css('background-color', sortedColors[0].color);
        $("input").css('color', sortedColors[2].color);
        $("a").css('color', sortedColors[7].color);
        $("i").css('color', sortedColors[0].color);
        $(".xyz").hover(function(){
            $(this).css("background-color", sortedColors[6].color).css("color",sortedColors[2].color);
            }, function(){
            $(this).css("background-color", sortedColors[7].color).css("color",sortedColors[3].color);
          });
          $(".color-button").hover(function(){
            $(this).css("background-color", sortedColors[6].color);
            }, function(){
            $(this).css("background-color", sortedColors[8].color);
          });
          $("#display").addClass('animated 3s fadeIn');
          
        
        //animating background colors
        $("html").animate();
        $("html").animate({ backgroundColor: sortedColors[0].color }, 300);
    })
}