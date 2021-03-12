import { ReferenceItem } from "./reference-item";

export default class Encyclopedia extends ReferenceItem {
    // edition: number;

    constructor(id: number, title: string, year: number, public edition: number) {
        super(id, title, year);
    }

    printItem(): void {
        super.printItem(); // вызывает метод из базового класса
        console.log(`Edition: ${this.edition} ${this.year}`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}