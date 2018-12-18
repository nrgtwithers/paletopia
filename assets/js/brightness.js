var getBrightness = (r, g, b) => {
    return (r * 299 + g * 587 + b * 114) / 1000
}