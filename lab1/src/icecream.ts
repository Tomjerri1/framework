const COST_OF_SMALL_ICE_CREAM: number = 5;

function calculateIceCreamCost(size: "малий" | "великий", toppings: string[], marshmallow: boolean = false): number {
    let cost = size === "малий" ? COST_OF_SMALL_ICE_CREAM : 25;

    toppings.forEach(topping => {
        if (topping === "шоколад") cost += 5;
        else if (topping === "карамель") cost += 6;
        else if (topping === "ягоди") cost += 10;
    });

    if (marshmallow) {
        cost += 5;
    }

    return cost;
}

const size = prompt("Введіть розмір морозива (малий/великий):") as "малий" | "великий";
const toppings: Array<string> = prompt("Введіть начинку (через кому):").split(",").map(t => t.trim());
const addMarshmallow = confirm("Додати маршмелоу?");

const totalCost = calculateIceCreamCost(size, toppings, addMarshmallow);
console.log(`Загальна вартість морозива: ${totalCost} грн`);
