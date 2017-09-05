import { Autowired } from "../decorators/autowired";
import { PersonService } from "./personService";
import { EmployeService } from "./employeService";
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @Autowired()
    a:PersonService;
    @Autowired()
    b:EmployeService;
}
let test:Greeter = new Greeter("hello");
console.log(test.b.salaryYear(1000));
 