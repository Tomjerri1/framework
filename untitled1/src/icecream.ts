function calculateIceCreamCost(size: "small" | "large", toppings: string[], marshmallow: boolean = false): number {
    let cost = size === "small" ? 10 : 25;

    toppings.forEach(topping => {
        if (topping === "chocolate") cost += 5;
        else if (topping === "caramel") cost += 6;
        else if (topping === "berries") cost += 10;
    });

    if (marshmallow) {
        cost += 5;
    }

    return cost;
}

const size = prompt("Введіть розмір морозива (small/large):") as "small" | "large";
const toppings = prompt("Введіть начинку (через кому):").split(",").map(t => t.trim());
const addMarshmallow = confirm("Додати маршмелоу?");

const totalCost = calculateIceCreamCost(size, toppings, addMarshmallow);
console.log(`Загальна вартість морозива: ${totalCost} грн`);
