
let displayPaletteInfo = () => {
    for (let i = 0; i < 10; i++) {

        let div = $(`#colorDisplay${i}`)
        div.empty()

        if (!div.hasClass('displayon')) {
            let rgbColor = localStorage.getItem(`currentColor${i}`)
            let hexColor = localStorage.getItem(`currentColor${i}hex`)
            let colorName = localStorage.getItem(`currentColor${i}name`)
            let brightness = localStorage.getItem(`currentColor${i}brightness`)

            let dark = localStorage.getItem(`currentColorDark`)
            let light = localStorage.getItem(`currentColorLight`)

            div.addClass('displayon')

            if (brightness > 123) {
                div.css('color', dark )
            }

            if (brightness <= 123) {
                div.css('color', light)
            }

            div.css('padding', '0.4em')

            div.append(`${colorName} <br> ${rgbColor} ${hexColor} brightness:${brightness}`)
        }
        else {
            div.empty()
            div.removeClass('displayon')
        }
    }
}