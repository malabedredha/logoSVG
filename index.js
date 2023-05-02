const fs = require("fs")
let SVG = require("./lib/svg")


let example = new SVG("AND", "green", "triangle", "yellow");



fs.writeFile("shape.svg", example.markup, function (err) {
    if (err)
        console.log(err)
})