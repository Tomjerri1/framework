import { Car } from './Car';

export class McLaren extends Car {
    private engine: string;

    constructor(model: string, year: number, engine: string) {
        super("McLaren", model, year);
        this.engine = engine;
    }

    public displayInfo(): void {
        console.log(`Марка: ${this.make}, Модель: ${this.getModel()}, Рік: ${this.year}, Двигун: ${this.engine}`);
    }
}
