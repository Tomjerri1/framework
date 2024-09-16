"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    scale(factor) {
        this.radius *= factor;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
    scale(factor) {
        this.width *= factor;
        this.height *= factor;
    }
}
class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    getArea() {
        return 0.5 * this.base * this.height;
    }
    getPerimeter() {
        return this.base + this.height + Math.sqrt(this.base * this.base + this.height * this.height);
    }
    scale(factor) {
        this.base *= factor;
        this.height *= factor;
    }
}
const shapes = [
    new Circle(5),
    new Rectangle(5, 10),
    new Triangle(5, 10),
];
let totalArea = 0;
let totalPerimeter = 0;
for (const shape of shapes) {
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
}
console.log(totalArea);
console.log(totalPerimeter);
