interface Animal {
    name: string;
    legs?: number;
    canFly?: boolean;
    habitat: string;

    move(): void;
}

class Cat implements Animal {
    name: string;
    legs: number;
    habitat: string;

    constructor(name: string) {
        this.name = name;
        this.legs = 4;
        this.habitat = "домашнє середовище";
    }

    move(): void {
        console.log(`${this.name} ходить на ${this.legs} лапах.`);
    }
}

class Bird implements Animal {
    name: string;
    canFly: boolean;
    habitat: string;

    constructor(name: string) {
        this.name = name;
        this.canFly = true;
        this.habitat = "ліс або небо";
    }

    move(): void {
        if (this.canFly) {
            console.log(`${this.name} літає.`);
        } else {
            console.log(`${this.name} не може літати.`);
        }
    }
}

class Fish implements Animal {
    name: string;
    habitat: string;

    constructor(name: string) {
        this.name = name;
        this.habitat = "вода";
    }

    move(): void {
        console.log(`${this.name} плаває у ${this.habitat}.`);
    }
}

const cat = new Cat("Мурчик");
cat.move();

const bird = new Bird("Орлик");
bird.move();

const fish = new Fish("Золота рибка");
fish.move();
