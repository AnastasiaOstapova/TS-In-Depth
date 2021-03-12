import { Book } from "../interfaces";

export class Reader {
    name: string;
    books: Book[] = [];
    take(book: Book): void {
        this.books.push(book);
    };
}