import { format, logger, logMethod, logParameter, sealed, writable } from "../decorators";
import * as Interfaces from "../interfaces";

// @sealed("UniversityLibrarian")
// @logger
export class UniversityLibrarian implements Interfaces.Librarian, Interfaces.C {
    @format() name: string;
    email: string;
    department: string;
    // x: number;
    a: string;
    c: string;

    // @logMethod
    assistCustomer(/*@logParameter */custName: string): void {
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