"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Library_1 = require("./Library");
const Book_1 = require("./Book");
const Magazine_1 = require("./Magazine");
const DVD_1 = require("./DVD");
const library = new Library_1.Library();
const book = new Book_1.Book("Великий Гетсбі", "Френсіс Скотт Фіцджеральд", 180);
const magazine = new Magazine_1.Magazine("National Geographic", "Різні автори", 202);
const dvd = new DVD_1.DVD("Початок", "Крістофер Нолан", 148);
library.addItem(book);
library.addItem(magazine);
library.addItem(dvd);
library.listAllItems();
const foundItem = library.findItemByName("Початок");
if (foundItem) {
    console.log(`Знайдено: ${foundItem.title}, автор: ${foundItem.author}`);
    foundItem.borrow();
}
library.listAvailableItems();
