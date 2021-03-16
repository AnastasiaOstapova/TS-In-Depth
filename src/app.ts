import { Category } from "./enums";
import { Book, Logger, Author, Librarian, Magazine } from "./interfaces";
import { BookRequiredFields, PersonBook, UpdatedBook, СreateCustomerFunctionType } from "./types";
import { bookTitleTransform, checkoutBooks, createCustomer, createCustomerID, getAllBooks, getBookAuthorByIndex, getBookById, getBooksByCategory, getBooksByCategoryPromise, getBookTitlesByCategory, getProperty, getTitles, logBookTitles, logCategorySearch, logFirstAvailable, logSearchResults, purge } from "./functions";
import { UniversityLibrarian, RefBook, ReferenceItem, Shelf } from "./classes";
import type { Library } from "./classes";
import Encyclopedia from "./classes/encyclopedia";

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// TASK 02.01

logFirstAvailable(getAllBooks());
logBookTitles(getBookTitlesByCategory(Category.JavaScript));
console.log(getBookAuthorByIndex(3));

// TASK 03.01

const myID: string = createCustomerID("Ann", 10);
console.log(myID);

let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `${id} - ${name}`;
idGenerator = createCustomerID;
console.log(idGenerator("Boris", 20));

const o = {
    name: "Ann",
    work: function () { return 1; }
}

// TASK 03.02

createCustomer("Anna");
createCustomer("Anna", 25);
createCustomer("Anna", 30, "London");

console.log(getBookTitlesByCategory());
logFirstAvailable();

console.log(getBookById(1));

const myBooks = checkoutBooks("Anna", 1, 2, 4);
console.log(myBooks);
const myBooks2 = checkoutBooks("Anna", ...[1, 2, 4]);

// Task 03.03

console.log(getTitles(1, true));
console.log(getTitles(false));

// TASK 03.04

console.log(bookTitleTransform("TypeScript"));
// console.log(bookTitleTransform(100));

let a: number | undefined; // в строгом режиме для переменных без инизиализации;
let b!: number; // аналогичная запись

a = 10;
a = 0;
a = null;

// TASK 04.01

const myBook: Book = { // все свойства в литерале должны соответствовать интерфейсу, не касается классов
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: (reason) => `Damaged: ${reason}`
    // year: 2015,
    // copies: 3
};

// printBook(myBook); // т к тип объекта явно не прописан, но он совпадает с интерфейсом параметра
console.log(myBook.markDamaged("Missing back cover"));

// TASK 04.01

const logDamage: Logger = (reason: string) => `Damaged: ${reason}`;
console.log(logDamage("Missing front cover"));

// TASK 04.03

const favoriteAuthor: Author = {
    name: "Anna",
    email: "anna@gmail.com",
    numBooksPublished: 3
};

const favoriteLibrarian: Librarian = {
    name: "Boris",
    email: "boris@gmail.com",
    department: "Classical Literature",
    assistCustomer(custName) {
        console.log(custName);
    }
};

// TASK 04.04

const offer: any = {
    book: {
        title: "Essential TypeScript",
        // authors: []
    }
};

console.log(offer.magazine);
console.log(offer.magazine?.getTitle());
console.log(offer.book.getTitle?.());
console.log(offer.book.authors?.[0]);

// TASK 04.05

console.log(getProperty(myBook, "title"));
console.log(getProperty(myBook, "markDamaged"));
// console.log(getProperty(myBook, "isbn"));

// TASK 05.01

/*const ref: ReferenceItem = new ReferenceItem(1, "TypeScript", 2021);

ref.printItem();
console.log(ref);
ref.publisher = "Alpina pub";
console.log(ref.publisher);
console.log(ref.getID());*/

// TASK 05.02

const refBook = new RefBook(2, "HandBook JavaScript", 2020, 7);
console.log(refBook);
refBook.printItem();

// TASK 05.03

const refBook2 = new RefBook(2, "HandBook JavaScript", 2020, 7);
console.log(refBook);
refBook.printCitation();

// TASK 05.04

const favoriteLibrarian2: Librarian = new UniversityLibrarian();
favoriteLibrarian2.name = "Anna";
favoriteLibrarian2.assistCustomer("Boris");
// favoriteLibrarian2.a = " ";

// TASK 05.05

const personBook: PersonBook = {
    id: 1,
    name: "Jane",
    author: "Jane C.",
    available: false,
    category: Category.CSS,
    email: "jane@gmsil.com",
    title: "TypeScript"
}

// TASK 06.05

if (true) {
    import("./classes").then(module => {
        console.log(new module.Reader());
    });
}

// TASK 06.06

let lib: Library;
// lib = new Library();

lib = {
    id: 1,
    name: "Podil",
    address: "Ryiv"
};

// TASK 07.01

const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

// const result = purge<Book>(inventory);

// console.log(result);

interface G<T> {
    // m1: (a: T) => T;
    // m2: (a: T, b: number) => T;
    [index: string]: (a: T) => T;
}

let g: G<number>;

g = {
    m1(a: number) {
        return a;
    },
    m2(a: number) {
        return a;
    }
}

// TASK 07.02

const bookShelf = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));

console.log(bookShelf.getFirst());

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];

const magazineShelf = new Shelf<Magazine>();
magazines.forEach(mag => magazineShelf.add(mag));

console.log(magazineShelf.getFirst());

// TASK 07.03

magazineShelf.printTitles();
console.log(magazineShelf.find('Five Points'));

console.log(getProperty<Magazine, "title">(magazines[0], "title"));

// TASK 07.04

const bookReq: BookRequiredFields = {
    author: "Den Braun",
    available: true,
    category: Category.Software,
    id: 7,
    pages: 550,
    title: "Inferno",
    markDamaged: null
}

const bookUpd: UpdatedBook = {
    title: "Scram from trenches",
    author: "Boris"
}

const params: Parameters<СreateCustomerFunctionType> = ["Anna"];
createCustomer(...params);

// TASK 08.01

const u1 = new UniversityLibrarian();

u1.name = "Kate";
console.log(u1);
// u1["printLibrarian"]()

// TASK 08.03

const u2 = new UniversityLibrarian();
u2.assistFaculty = null;
console.log(u2);
// u2.teachCommunity = null;

// TASK 08.04

const e = new Encyclopedia(4, "CSS sheets", 2021, 5);
e.printItem();

// TASK 08.05
const u3 = new UniversityLibrarian();
u3.name = "Jane";
u3.assistCustomer("Boris");
console.log(u3);

// TASK 08.06

const u4 = new UniversityLibrarian();
u4.name = "Makintosh";
console.log(u4.name);
u4.assistCustomer("Mike");
console.log(u4);

// TASK 08.07

const e1 = new Encyclopedia(5, "TS", 2021, 8);
e1.copies = 10;
// e1.copies = 0;
// e1.copies = 1.1;

// TASK 09.01

/*console.log("START");
getBooksByCategory(Category.JavaScript, logCategorySearch);
getBooksByCategory(Category.Software, logCategorySearch);
console.log("FINISH");*/

// TASK 09.02

/*console.log("START");
getBooksByCategoryPromise(Category.JavaScript)
    .then(titles => { console.log(titles); return titles.length; })
    .then(numOfBooks => console.log(numOfBooks))
    .catch(err => console.log(err));
getBooksByCategoryPromise(Category.Software)
    .then(titles => console.log(titles))
    .catch(err => console.log(err));
console.log("FINISH");*/

// TASK 09.03

console.log("START");
logSearchResults(Category.JavaScript);
logSearchResults(Category.Software)
    .catch(err => console.log(err));
console.log("FINISH");
