"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
        console.log(`Item ${item.title} added successfully`);
    }
    findItemByTitle(title) {
        return this.items.find(item => item.title === title);
    }
    displayAvailableItems() {
        console.log(`Available items:`);
        var items = this.items.filter(item => !item.isBorrowed);
        console.table(items);
    }
}
exports.Library = Library;
