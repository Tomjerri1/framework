"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./employee");
const employees = [
    new employee_1.Developer('Ковальський', 6, 85000),
    new employee_1.Developer('Прапор', 6, 60000),
    new employee_1.Manager('Шкипер', 7, 100000),
    new employee_1.Manager('Ріко', 5, 50000)
];
const totalAnnualBonus = employees.reduce((acc, employee) => acc + employee.getAnnualBonus(), 0);
employees.forEach(employee => { if (employee instanceof employee_1.Developer || employee instanceof employee_1.Manager) {
    employee.pay();
} });
console.log(`Загальна річна премія кожного працівника: ${totalAnnualBonus}`);
