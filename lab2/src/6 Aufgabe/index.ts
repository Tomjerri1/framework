import { Library } from './Library';
import { Book } from './Book';
import { Magazine } from './Magazine';
import { DVD } from './DVD';

const library = new Library();

const book = new Book("Великий Гетсбі", "Френсіс Скотт Фіцджеральд", 180);
const magazine = new Magazine("National Geographic", "Різні автори", 202);
const dvd = new DVD("Початок", "Крістофер Нолан", 148);

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
