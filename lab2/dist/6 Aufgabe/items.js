"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DVD = exports.Magazine = exports.Book = void 0;
class Book {
    constructor(title, author, numberOfPages) {
        this.isBorrowed = false;
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
    }
    borrow() {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`Book ${this.title} is borrowed`);
        }
        else {
            console.log(`Book ${this.title} is already borrowed`);
        }
    }
}
exports.Book = Book;
class Magazine {
    constructor(title, author, issueNumber) {
        this.isBorrowed = false;
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
    }
    borrow() {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`Magazine ${this.title} is borrowed`);
        }
        else {
            console.log(`Magazine ${this.title} is already borrowed`);
        }
    }
}
exports.Magazine = Magazine;
class DVD {
    constructor(title, author, duration) {
        this.isBorrowed = false;
        this.title = title;
        this.author = author;
        this.duration = duration;
    }
    borrow() {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`DVD ${this.title} is borrowed`);
        }
        else {
            console.log(`DVD ${this.title} is already borrowed`);
        }
    }
}
exports.DVD = DVD;
