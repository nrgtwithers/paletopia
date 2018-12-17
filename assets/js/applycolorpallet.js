//defining a function that will apply colors currently in local storage to the css properties that color the text and backgrounds of the document
let applyColorPallet = function () {
    $(document).ready(function () {
        //pulling rgb colors from current color pallete
        var sideBar = localStorage.getItem('newColor0');
        var sideBarHeader = localStorage.getItem('newColor3');
        var sideBarTag = localStorage.getItem('newColor4')
        var header = localStorage.getItem('newColor6')
        var footer = localStorage.getItem('newColor8')
        var button = localStorage.getItem('newColor2')
        var buttonText = localStorage.getItem('newColor9')

        //setting css color properties to colors from the current color pallete 
        $('.sidebar').css('background-color', sideBar);
        $('.sidebar').css('color', sideBarHeader);
        $('.brand-tagline').css('color', sideBarTag);
        $('.typewriter h1').css('color', header);
        $('.footer').css('color', footer);
        $('#submitButton').css('background-color', button);
        $('#submitButton').css('color', buttonText);

        //animating background colors
        $("html").animate({ backgroundColor: sideBar }, 2000).delay(1000)
    })
}

// .animate({ backgroundColor: '#FFF' }, 3000);