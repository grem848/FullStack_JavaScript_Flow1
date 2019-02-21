function logger(a, b) {
    console.log("Value of number: " + a + ", Value of msg: " + b);
}
var a = 12, b = "Hello Class";
logger(b, a);
// generics
function loggerV2(a, b) {
    console.log("Value of number: " + a + ", Value of msg: " + b);
}
var a = 12, b = "Hello Class";
loggerV2(a, b);
function loggerV3(p, a) {
    console.log("Person: " + p.name + ", Street: " + a.street);
}
var person = { name: "Kurt Wonnegut" };
var address = { street: "Lyngbyvej 23" };
loggerV3(person, address);
// class
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Address = /** @class */ (function () {
    function Address(street) {
        this.street = street;
    }
    return Address;
}());
loggerV3(new Person("kurt"), new Address("blablavej"));
function loggerV4(p, a) {
    console.log(typeof (p) + ": " + p + ", " + typeof (a) + ": " + a);
}
loggerV4(person, address);
loggerV4(1, address);
loggerV4(true, address);
var GenericLogger = /** @class */ (function () {
    function GenericLogger() {
        this.log = function (a, b) { return console.log("Val 1: " + a, "Val 2: " + b); };
    }
    return GenericLogger;
}());
var personLogger = new GenericLogger();
personLogger.log(person, address);
//# sourceMappingURL=logger.js.map