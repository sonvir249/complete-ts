"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(2);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("test");
function signUpUser(name, email, isPaid) { }
signUpUser("1", "2", true);
var loginUser = function (email, name, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("a@gmail.com", "abc");
