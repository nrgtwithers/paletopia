//defining a function that will apply colors currently in local storage to the css properties that color the text and backgrounds of the document
let applyColorPallet = function () {
    $(document).ready(function () {
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
        $("html").animate({ backgroundColor: sideBar }, 2000).delay(1000).animate({ backgroundColor: '#FFF' }, 3000);
    })
}