"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lamborghini = void 0;
const Car_1 = require("./Car");
class Lamborghini extends Car_1.Car {
    constructor(model, year, topSpeed) {
        super("Lamborghini", model, year);
        this.topSpeed = topSpeed;
    }
    displayInfo() {
        console.log(`Марка: ${this.make}, Модель: ${this.getModel()}, Рік: ${this.year}, Максимальна швидкість: ${this.topSpeed} км/год`);
    }
}
exports.Lamborghini = Lamborghini;
