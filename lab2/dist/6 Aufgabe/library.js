"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
        console.log(`Додано: ${item.title} автор: ${item.author}`);
    }
    findItemByName(name) {
        return this.items.find(item => item.title === name);
    }
    listAvailableItems() {
        const availableItems = this.items.filter(item => !item.isBorrowed);
        console.log("Доступні елементи:");
        availableItems.forEach(item => {
            console.log(`- ${item.title} автор: ${item.author}`);
        });
    }
    listAllItems() {
        console.log("Усі елементи бібліотеки:");
        this.items.forEach(item => {
            const status = item.isBorrowed ? "позичено" : "доступно";
            console.log(`- ${item.title} автор: ${item.author} (${status})`);
        });
    }
}
exports.Library = Library;
