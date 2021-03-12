import { logger, sealed, writable } from "../decorators";
import * as Interfaces from "../interfaces";

// @sealed("UniversityLibrarian")
// @logger
export class UniversityLibrarian implements Interfaces.Librarian, Interfaces.C {
    name: string;
    email: string;
    department: string;
    // x: number;
    a: string;
    c: string;

    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }

    @writable(true)
    assistFaculty() {
        console.log("Assisting faculty");
    }

    @writable(false)
    teachCommunity() {
        console.log("Teaching community");
    }
}