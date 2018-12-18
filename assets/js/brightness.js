var getBrightness = (rgbColor) => {

    let regExpred = /\((\d+),/
    let regExpgreen = /,(\d+),/
    let regExpblue = /,(\d+)\)/

    let red = parseInt(regExpred.exec(rgbColor)[1])
    let green = parseInt(regExpgreen.exec(rgbColor)[1])
    let blue = parseInt(regExpblue.exec(rgbColor)[1])

    return (red * 299 + green * 587 + blue * 114) / 1000
}