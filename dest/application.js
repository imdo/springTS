var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("box", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Services;
    return {
        setters: [],
        execute: function () {
            Services = [];
            exports_1("Services", Services);
        }
    };
});
System.register("decorators/Service", ["box"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    function Service(target) {
        var className = target.name;
        console.log(className);
        box_1.Services.push({ Constructor: target, className: className });
    }
    exports_2("Service", Service);
    var box_1;
    return {
        setters: [
            function (box_1_1) {
                box_1 = box_1_1;
            }
        ],
        execute: function () {
        }
    };
});
System.register("employeService", ["decorators/Service"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var Service_1, EmployeService;
    return {
        setters: [
            function (Service_1_1) {
                Service_1 = Service_1_1;
            }
        ],
        execute: function () {
            EmployeService = /** @class */ (function () {
                function EmployeService() {
                }
                EmployeService.prototype.salaryYear = function (MonthSalary) {
                    return MonthSalary * 12;
                };
                EmployeService = __decorate([
                    Service_1.Service
                ], EmployeService);
                return EmployeService;
            }());
            exports_3("EmployeService", EmployeService);
        }
    };
});
System.register("decorators/autowired", ["box", "reflect-metadata"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    function Autowired() {
        return function (target, propertyKey) {
            var t = Reflect.getMetadata("design:type", target, propertyKey);
            var instance;
            box_2.Services.forEach(function (elem, index) {
                if (elem.className == t.name) {
                    instance = new elem.Constructor();
                }
            });
            target[propertyKey] = instance;
        };
    }
    exports_4("Autowired", Autowired);
    var box_2;
    return {
        setters: [
            function (box_2_1) {
                box_2 = box_2_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
        }
    };
});
System.register("personService", ["decorators/Service"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var service_1, PersonService;
    return {
        setters: [
            function (service_1_1) {
                service_1 = service_1_1;
            }
        ],
        execute: function () {
            PersonService = /** @class */ (function () {
                function PersonService() {
                }
                PersonService.prototype.sayName = function () {
                    return "name";
                };
                PersonService = __decorate([
                    service_1.Service
                ], PersonService);
                return PersonService;
            }());
            exports_5("PersonService", PersonService);
        }
    };
});
System.register("index", ["decorators/autowired", "personService", "employeService"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var autowired_1, personService_1, employeService_1, Greeter, test;
    return {
        setters: [
            function (autowired_1_1) {
                autowired_1 = autowired_1_1;
            },
            function (personService_1_1) {
                personService_1 = personService_1_1;
            },
            function (employeService_1_1) {
                employeService_1 = employeService_1_1;
            }
        ],
        execute: function () {
            Greeter = /** @class */ (function () {
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
            test = new Greeter("hello");
            console.log(test.b.salaryYear(1000));
        }
    };
});
