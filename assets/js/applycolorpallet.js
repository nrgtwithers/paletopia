//defining a function that will apply colors currently in local storage to the css properties that color the text and backgrounds of the document
let applyColorPallet = function () {
    $(document).ready(function () {
       
        let colorsBrightnessObjectArray = []

       for (i=0;i<10;i++){
           let newObj = {}
           newObj.color = localStorage.getItem(`newColor${i}`)
           console.log(newObj.color)
           newObj.brightness = getBrightness(newObj.color)
           colorsBrightnessObjectArray.push(newObj)
       }
       console.log(colorsBrightnessObjectArray)
       
        //pulling rgb colors from current color pallete
        var sideBar = localStorage.getItem('newColor0');
        var sideBarHeader = localStorage.getItem('newColor3');
        var sideBarTag = localStorage.getItem('newColor4')
        var header = localStorage.getItem('newColor6')
        var subheader = localStorage.getItem('newColor1')
        var footer = localStorage.getItem('newColor8')
        var button = localStorage.getItem('newColor2')
        var buttonText = localStorage.getItem('newColor9')
        var button2 = localStorage.getItem('newColor5')
        var buttonText2 = localStorage.getItem('newColor7')


// Color0: #4a5375 rgb(74,83,117) Fiord brightness:84.185           4

// Color1: #070810 rgb(7,8,16) Ebony brightness:8.613                     0

// Color2: #2c3350 rgb(44,51,80) Pickled Bluewood brightness:52.213         2

// Color3: #687296 rgb(104,114,150) Lynch brightness:115.114            7

// Color4: #11162a rgb(17,22,42) Ebony brightness:22.785            1

// Color5: #8d98be rgb(141,152,190) Nepal brightness:153.043            9

// Color6: #534f75 rgb(83,79,117) Mulled Wine brightness:84.528             5

// Color7: #4a5285 rgb(74,82,133) East Bay brightness:85.422            6

// Color8: #353559 rgb(53,53,89) Martinique brightness:57.104           3

// Color9: #6274a2 rgb(98,116,162) Waikawa Gray brightness:115.862          8

        //setting css color properties to colors from the current color pallete 
        $('.sidebar').css('background-color', sideBar);
        $('.sidebar').css('color', sideBarHeader);
        $('.brand-tagline').css('color', sideBarTag);
        $('.typewriter h1').css('color', header);
        $('.footer').css('color', footer);
        $('#submitButton').css('background-color', button);
        $('#submitButton').css('color', buttonText);
        $('#saveButton').css('background-color', button);
        $('#saveButton').css('color', buttonText);
        $('#loadButton').css('background-color', button);
        $('#loadButton').css('color', buttonText);
        $('.example-buttons').css('background-color', button2);
        $('.example-buttons').css('color', buttonText2);
        $('.subheader').css('color', subheader);
        $('#directions').css('color', header);
        $('#example-buttons').css('color', header);
        // $("<button>").hover(function(){
        //     $(this).css("background-color", sideBarTag);
        //     },

        //animating background colors
        $("html").animate()
        $("html").animate({ backgroundColor: sideBar }, 2000).delay(1000).animate({ backgroundColor: button2 }, 3000);
    })
}