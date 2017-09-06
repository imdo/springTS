"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../"); /*
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
var WorkerService = /** @class */ (function () {
    function WorkerService() {
    }
    WorkerService.prototype.doWork = function () {
        console.log("work is done");
    };
    WorkerService = __decorate([
        _1.Service
    ], WorkerService);
    return WorkerService;
}());
var Main = /** @class */ (function () {
    function Main() {
    }
    __decorate([
        _1.Autowired(),
        __metadata("design:type", WorkerService)
    ], Main.prototype, "o", void 0);
    return Main;
}());
var ma = new Main();
ma.o.doWork();
