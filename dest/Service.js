"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var box_1 = require("./box");
function Service(target) {
    var className = target.name;
    console.log(className);
    box_1.Services.push({ Constructor: target, className: className });
}
exports.Service = Service;
