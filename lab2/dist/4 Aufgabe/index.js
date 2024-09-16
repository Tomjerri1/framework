"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./employee");
const employees = [
    new employee_1.Developer('Misha', 28, 50000),
    new employee_1.Developer('Oleg', 32, 55000),
    new employee_1.Manager('Valera', 40, 70000),
    new employee_1.Manager('Slave', 45, 75000)
];
const totalAnnualBonus = employees.reduce((acc, employee) => acc + employee.getAnnualBonus(), 0);
console.log(`Total annual bonus of each employee: ${totalAnnualBonus}`);
employees.forEach(employee => { if (employee instanceof employee_1.Developer || employee instanceof employee_1.Manager) {
    employee.pay();
} });
