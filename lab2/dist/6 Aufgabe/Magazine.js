"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    constructor(title, author, issueNumber) {
        this.title = title;
        this.author = author;
        this.isBorrowed = false;
        this.issueNumber = issueNumber;
    }
    borrow() {
        this.isBorrowed = true;
        console.log(`Журнал "${this.title}" позичено.`);
    }
}
exports.Magazine = Magazine;
