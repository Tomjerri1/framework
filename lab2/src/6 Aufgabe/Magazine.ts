import { LibraryItem } from './LibraryItem';

export class Magazine implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean;
    issueNumber: number;

    constructor(title: string, author: string, issueNumber: number) {
        this.title = title;
        this.author = author;
        this.isBorrowed = false;
        this.issueNumber = issueNumber;
    }

    borrow(): void {
        this.isBorrowed = true;
        console.log(`Журнал "${this.title}" позичено.`);
    }
}
