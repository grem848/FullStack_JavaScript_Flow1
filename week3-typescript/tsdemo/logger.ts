function logger(a, b) {
    console.log(`Value of number: ${a}, Value of msg: ${b}`);
}
var a = 12, b = "Hello Class";
logger(b, a);


// generics

function loggerV2(a: number, b: string) {
    console.log(`Value of number: ${a}, Value of msg: ${b}`);
}
var a = 12, b = "Hello Class";
loggerV2(a, b);



// interface 
interface IPerson { name: string }
interface IAddress { street: string }

function loggerV3(p: IPerson, a: IAddress) {
    console.log(`Person: ${p.name}, Street: ${a.street}`);
}
const person: IPerson = { name: "Kurt Wonnegut" };
const address: IAddress = { street: "Lyngbyvej 23" };
loggerV3(person, address);

// class

class Person implements IPerson {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}
class Address implements IAddress {
    public street: string;
    constructor(street: string) {
        this.street = street;
    }
}

loggerV3(new Person("kurt"), new Address("blablavej"));

function loggerV4<T, U>(p: T, a: U) {
    console.log(`${typeof (p)}: ${p}, ${typeof (a)}: ${a}`);
}
loggerV4(person, address);
loggerV4(1, address);
loggerV4(true, address);

class GenericLogger<T, U>{
    log = (a: T, b: U) => console.log("Generic Val 1: " + a, "Generic Val 2: " + b)
}

const personLogger = new GenericLogger<IPerson, IAddress>();
const numberStringLogger = new GenericLogger<number, string>();
personLogger.log(person, address);
numberStringLogger.log(1, 'hello');

var numbers: Array<number> = [1,2,3];