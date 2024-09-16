function greet(name: string, age: number = 30): void {
    console.log(`Привіт, ${name}! тобі є ${age} років.`);
}

greet("Alice");
greet("Bob", 25);

const greetUser = (name: string): string => `Hello ${name}`;
