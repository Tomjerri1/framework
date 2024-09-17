import { Employee, Developer, Manager } from "./employee";

const employees: Employee[] = [
    new Developer('Ковальський', 6, 85000),
    new Developer('Прапор', 6, 60000),
    new Manager('Шкипер', 7, 100000),
    new Manager('Ріко', 5, 50000)
];

const totalAnnualBonus = employees.reduce((acc, employee) => acc + employee.getAnnualBonus(), 0);

employees.forEach(employee => { if (employee instanceof Developer || employee instanceof Manager) { employee.pay(); }});

console.log(`Загальна річна премія кожного працівника: ${totalAnnualBonus}`);
