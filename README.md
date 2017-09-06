# SpringTs Project

the typescript version of Spring framework

## Getting Started
SpringTS is the typescript version of spring framework, this project contains just DI-Injection system we will work to add more feature in the future.

### Prerequisites

to install this module you need nodejs and typescript installed , if not use the links bellow

```
nodeJS : https://nodejs.org/en/download/
Typescript : https://www.typescriptlang.org/
```

### Installing

A step by step series of examples that tell you have to get a development env running

install springts-init

```
npm install -g springts-init
```

initialize project

```
springts-init
```
Install dependencies

```
npm install
```
start project

```
npm start
```

## Tutorial

### declare a service

```
import {Service} from "springts";
@Service
export class EmployeService{
    salaryYear(MonthSalary:number):number{
        return MonthSalary*12;
    }
}

```

### Inject Service

```
import { Autowired } from "springts";
import { EmployeService } from "./service/employeService";
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    @Autowired()
    b:EmployeService;
}
let test:Greeter = new Greeter("hello");
console.log(test.b.salaryYear(1000));
```

### Running

by running 'npm start' the following result appears 

```
12000
```

## Contributing

please feel free for submitting pull requests.

## License

This project is licensed under the MIT License 



