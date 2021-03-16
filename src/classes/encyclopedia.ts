import { positiveInteger } from "../decorators";
import { ReferenceItem } from "./reference-item";

export default class Encyclopedia extends ReferenceItem {
    // edition: number;
    private _copies: number;

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

    @positiveInteger
    get copies(): number {
        return this._copies;
    }

    @positiveInteger
    set copies(value: number) {
        this._copies = value;
    }
}