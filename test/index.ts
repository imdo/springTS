import { Autowired,Service } from "../";/*
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
console.log(test.b.salaryYear(1000));*/
@Service
class WorkerService{
    doWork(){
        console.log("work is done");
    }
}
class Main{
    constructor(){}
    @Autowired()
    o:WorkerService;
}
let ma:Main = new Main();
ma.o.doWork();
 