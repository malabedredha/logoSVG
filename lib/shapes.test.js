const { Circle, } = require("./shapes");

test('should ', () => {

    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green"');

});


const { Square, } = require("./shapes");

test('should ', () => {

    const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toEqual('<rect width="100%" height="100%" fill="red"');

});


const { Triangle, } = require("./shapes");

test('should ', () => {

    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"');

});