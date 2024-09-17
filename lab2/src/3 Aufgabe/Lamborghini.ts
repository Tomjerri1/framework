import { Car } from './Car';

export class Lamborghini extends Car {
    private topSpeed: number;

    constructor(model: string, year: number, topSpeed: number) {
        super("Lamborghini", model, year);
        this.topSpeed = topSpeed;
    }

    public displayInfo(): void {
        console.log(`Марка: ${this.make}, Модель: ${this.getModel()}, Рік: ${this.year}, Максимальна швидкість: ${this.topSpeed} км/год`);
    }
}
