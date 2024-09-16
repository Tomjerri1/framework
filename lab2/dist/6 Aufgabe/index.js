"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const items_1 = require("./items");
const library_1 = require("./library");
const book = new items_1.Book('War and Peace', 'Leo Tolstoy', 1225);
const magazine = new items_1.Magazine('New York Times', 'John Doe', 10);
const dvd = new items_1.DVD('Star Wars', 'George Lucas', 120);
const library = new library_1.Library();
library.addItem(book);
library.addItem(magazine);
library.addItem(dvd);
const foundItem = library.findItemByTitle('War and Peace');
if (foundItem) {
    console.log(`Found item: ${foundItem.title}`);
}
else {
    console.log('Item not found');
}
book.borrow();
book.borrow();
library.displayAvailableItems();
