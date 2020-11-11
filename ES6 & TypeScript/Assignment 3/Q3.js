"use strict";
function print() {
    var obj = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        obj[_i] = arguments[_i];
    }
    for (var _a = 0, obj_1 = obj; _a < obj_1.length; _a++) {
        var o = obj_1[_a];
        return o;
    }
}
function printAll(circle, employee) {
    var _a, _b;
    console.log(print(circle));
    console.log(print(employee));
    (_a = document.getElementById("obj1")) === null || _a === void 0 ? void 0 : _a.innerHTML = "Circle Object : " + JSON.stringify(print(circle));
    (_b = document.getElementById("obj2")) === null || _b === void 0 ? void 0 : _b.innerHTML = "Employee Object : " + JSON.stringify(print(employee));
}
function printObj() {
    var circle = {
        radius: 3,
        area: 28.27
    };
    var employee = {
        fname: "Steve",
        lname: "Holmer",
        designation: "Software Engineer"
    };
    printAll(circle, employee);
}
//# sourceMappingURL=Q3.js.map