export abstract class Car {
    protected make: string;
    private model: string;
    public year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    abstract displayInfo(): void;

    protected getModel(): string {
        return this.model;
    }
}
