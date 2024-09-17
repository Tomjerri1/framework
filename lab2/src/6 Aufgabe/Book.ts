import { LibraryItem } from './LibraryItem';

export class Book implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean;
    pages: number;

    constructor(title: string, author: string, pages: number) {
        this.title = title;
        this.author = author;
        this.isBorrowed = false;
        this.pages = pages;
    }

    borrow(): void {
        this.isBorrowed = true;
        console.log(`Книгу "${this.title}" позичено.`);
    }
}
