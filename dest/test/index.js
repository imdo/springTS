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
var autowired_1 = require("../decorators/autowired");
var personService_1 = require("./personService");
var employeService_1 = require("./employeService");
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    __decorate([
        autowired_1.Autowired(),
        __metadata("design:type", personService_1.PersonService)
    ], Greeter.prototype, "a", void 0);
    __decorate([
        autowired_1.Autowired(),
        __metadata("design:type", employeService_1.EmployeService)
    ], Greeter.prototype, "b", void 0);
    return Greeter;
}());
var test = new Greeter("hello");
console.log(test.b.salaryYear(1000));
