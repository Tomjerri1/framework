"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.isBorrowed = false;
        this.pages = pages;
    }
    borrow() {
        this.isBorrowed = true;
        console.log(`Книгу "${this.title}" позичено.`);
    }
}
exports.Book = Book;
