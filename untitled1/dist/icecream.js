function calculateIceCreamCost(size, toppings, marshmallow = false) {
    let cost = size === "малий" ? 10 : 25;
    toppings.forEach(topping => {
        if (topping === "шоколад")
            cost += 5;
        else if (topping === "карамель")
            cost += 6;
        else if (topping === "ягоди")
            cost += 10;
    });
    if (marshmallow) {
        cost += 5;
    }
    return cost;
}
const size = prompt("Введіть розмір морозива (малий/великий):");
const toppings = prompt("Введіть начинку (через кому):").split(",").map(t => t.trim());
const addMarshmallow = confirm("Додати маршмелоу?");
const totalCost = calculateIceCreamCost(size, toppings, addMarshmallow);
console.log(`Загальна вартість морозива: ${totalCost} грн`);
//# sourceMappingURL=icecream.js.map