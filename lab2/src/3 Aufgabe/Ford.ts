import { Car } from './Car';

export class Ford extends Car {
    private type: string;

    constructor(model: string, year: number, type: string) {
        super("Ford", model, year);
        this.type = type;
    }

    public displayInfo(): void {
        console.log(`Марка: ${this.make}, Модель: ${this.getModel()}, Рік: ${this.year}, Тип: ${this.type}`);
    }
}
