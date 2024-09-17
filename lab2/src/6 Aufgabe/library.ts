import { LibraryItem } from './LibraryItem';

export class Library {
    private items: LibraryItem[] = [];

    addItem(item: LibraryItem): void {
        this.items.push(item);
        console.log(`Додано: ${item.title} автор: ${item.author}`);
    }

    findItemByName(name: string): LibraryItem | undefined {
        return this.items.find(item => item.title === name);
    }

    listAvailableItems(): void {
        const availableItems = this.items.filter(item => !item.isBorrowed);
        console.log("Доступні елементи:");
        availableItems.forEach(item => {
            console.log(`- ${item.title} автор: ${item.author}`);
        });
    }

    listAllItems(): void {
        console.log("Усі елементи бібліотеки:");
        this.items.forEach(item => {
            const status = item.isBorrowed ? "позичено" : "доступно";
            console.log(`- ${item.title} автор: ${item.author} (${status})`);
        });
    }
}
