"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.McLaren = void 0;
const Car_1 = require("./Car");
class McLaren extends Car_1.Car {
    constructor(model, year, engine) {
        super("McLaren", model, year);
        this.engine = engine;
    }
    displayInfo() {
        console.log(`Марка: ${this.make}, Модель: ${this.getModel()}, Рік: ${this.year}, Двигун: ${this.engine}`);
    }
}
exports.McLaren = McLaren;
