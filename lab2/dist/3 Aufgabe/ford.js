"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ford = void 0;
const Car_1 = require("./Car");
class Ford extends Car_1.Car {
    constructor(model, year, type) {
        super("Ford", model, year);
        this.type = type;
    }
    displayInfo() {
        console.log(`Марка: ${this.make}, Модель: ${this.getModel()}, Рік: ${this.year}, Тип: ${this.type}`);
    }
}
exports.Ford = Ford;
