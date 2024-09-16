"use strict";
class Cat {
    constructor(name) {
        this.name = name;
        this.legs = 4;
        this.habitat = "домашнє середовище";
    }
    move() {
        console.log(`${this.name} ходить на ${this.legs} лапах.`);
    }
}
class Bird {
    constructor(name) {
        this.name = name;
        this.canFly = true;
        this.habitat = "ліс або небо";
    }
    move() {
        if (this.canFly) {
            console.log(`${this.name} літає.`);
        }
        else {
            console.log(`${this.name} не може літати.`);
        }
    }
}
class Fish {
    constructor(name) {
        this.name = name;
        this.habitat = "вода";
    }
    move() {
        console.log(`${this.name} плаває у ${this.habitat}.`);
    }
}
const cat = new Cat("Мурчик");
cat.move();
const bird = new Bird("Орлик");
bird.move();
const fish = new Fish("Золота рибка");
fish.move();
