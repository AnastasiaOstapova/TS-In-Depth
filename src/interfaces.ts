import { Category } from "./enums";

interface DamageLogger {
    (reason: string): void;
}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    // markDamaged?: (reason: string) => void;
    markDamaged?: DamageLogger
}

interface A {
    a: string;
}

interface B extends Partial<A> {
    b: string;
}

interface C {
    a: string;
    c: string;
}

interface D extends A, C {
    d: number;
}

const c: B = {
    // a: "a",
    b: "b"
}

interface Person {
    name: string;
    email: string
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (customer: string) => void;
}

interface Magazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}

export { Book, DamageLogger as Logger, Person, Author, Librarian, C, Magazine, ShelfItem };