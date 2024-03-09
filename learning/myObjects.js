"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Sonvir",
    email: "sonvir@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Sonvir", isPaid: true, email: "sonvir@gmail.com" };
createUser(newUser);
function course() {
    return { name: "Sonvir", isPaid: false };
}
course();
var myUser = {
    _id: "122",
    name: "Sonvir",
    email: "sonvir@gmail.com",
    isActive: true
};
function getCardDetails(cardData) {
    return cardData;
}
