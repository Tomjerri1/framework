"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DVD = void 0;
class DVD {
    constructor(title, author, duration) {
        this.title = title;
        this.author = author;
        this.isBorrowed = false;
        this.duration = duration;
    }
    borrow() {
        this.isBorrowed = true;
        console.log(`DVD "${this.title}" позичено.`);
    }
}
exports.DVD = DVD;
