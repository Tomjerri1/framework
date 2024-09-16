"use strict";
class Car {
    constructor(brand, model, year, vin) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vin = vin;
    }
    getVin() {
        return this.vin;
    }
}
class Toyota extends Car {
    constructor(model, year, vin, color) {
        super("Toyota", model, year, vin);
        this.color = color;
    }
    display() {
        console.table({
            brand: this.brand,
            model: this.model,
            year: this.year,
            vin: this.getVin(),
            color: this.color
        });
    }
}
class BMW extends Car {
    constructor(model, year, vin, isMbrand) {
        super("BMW", model, year, vin);
        this.isMbrand = isMbrand;
    }
    display() {
        console.table({
            brand: this.brand,
            model: this.model,
            year: this.year,
            vin: this.getVin(),
            isMbrand: this.isMbrand
        });
    }
}
class Mercedes extends Car {
    constructor(model, year, vin, fuelType) {
        super("Mercedes", model, year, vin);
        this.fuelType = fuelType;
    }
    display() {
        console.table({
            brand: this.brand,
            model: this.model,
            year: this.year,
            vin: this.getVin(),
            fuelType: this.fuelType
        });
    }
}
const toyotaCorolla = new Toyota('Corolla', 2020, '123456789', 'blue');
const toyotaCamry = new Toyota('Camry', 2021, '987654321', 'red');
const bmwX5 = new BMW('X5', 2022, '111111111', true);
const bmw3brand = new BMW('3 brand', 2023, '222222222', false);
const mercedesEClass = new Mercedes('E-Class', 2024, '333333333', 'diesel');
const mercedesCClass = new Mercedes('C-Class', 2025, '444444444', 'gasoline');
toyotaCorolla.display();
toyotaCamry.display();
bmwX5.display();
bmw3brand.display();
mercedesEClass.display();
mercedesCClass.display();
