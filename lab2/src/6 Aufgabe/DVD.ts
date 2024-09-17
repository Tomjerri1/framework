import { LibraryItem } from './LibraryItem';

export class DVD implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean;
    duration: number;

    constructor(title: string, author: string, duration: number) {
        this.title = title;
        this.author = author;
        this.isBorrowed = false;
        this.duration = duration;
    }

    borrow(): void {
        this.isBorrowed = true;
        console.log(`DVD "${this.title}" позичено.`);
    }
}
