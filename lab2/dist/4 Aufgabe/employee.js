"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = exports.Manager = exports.Employee = void 0;
class Employee {
    constructor({ name, age, salary }) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}
exports.Employee = Employee;
class Manager extends Employee {
    constructor(name, age, salary) {
        super({ name, age, salary });
    }
    getAnnualBonus() {
        return this.salary * 0.1;
    }
    pay() {
        console.log(`Менеджер ${this.name} оплачується ${this.salary}\n`);
    }
}
exports.Manager = Manager;
class Developer extends Employee {
    constructor(name, age, salary) {
        super({ name, age, salary });
    }
    getAnnualBonus() {
        return this.salary * 0.2;
    }
    pay() {
        console.log(`Програміст ${this.name} оплачується ${this.salary}\n`);
    }
}
exports.Developer = Developer;
