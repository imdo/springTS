"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var box_1 = require("./box");
require("reflect-metadata");
function Autowired() {
    return function (target, propertyKey) {
        var t = Reflect.getMetadata("design:type", target, propertyKey);
        var instance;
        box_1.Services.forEach(function (elem, index) {
            if (elem.className == t.name) {
                instance = new elem.Constructor();
            }
        });
        target[propertyKey] = instance;
    };
}
exports.Autowired = Autowired;
