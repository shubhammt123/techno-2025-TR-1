// constructors and classes

// This keyword

// console.log(this);

// let obj = {
//     firstName : "Shubham",
//     lastName : "Jain",
//     greet : ()=>{
//         console.log(this);
//         console.log(`Hello ${this.firstName} , Good morning`);
//     }
// }

// obj.greet();

// const sum=()=>{
//     console.log(this);
// }

// const sum=()=>{
//     console.log(this);
// }

// sum();

// Constructors

// function person(firstName , lastName){
//     let obj = {};
//     obj.firstName = firstName;
//     obj.lastName = lastName;
//     obj.greet = function(){
//         console.log(`Hello ${this.firstName},Good morning`);
//     }
//     return obj;
// }

// const p1 = person("shubham","jain");
// const p2 = person("Nickk","todd");

// p1.greet()
// p2.greet()
// console.log(p1.greet);
// console.log(p2.greet);

// console.log()

// function Person(firstName , lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     // this.greet = function(){
//     //     console.log(`Hello ${this.firstName}`)
//     // }
// }

// Person.prototype.greet =  function(){
//     console.log(`Hello ${this.firstName}`)
// }


// const p1 = new Person("shubham","jain");
// const p2 = new Person("Nickk","Todd");
// p1.greet()
// p2.greet()
// console.log();
// console.log();


// let arr = [10,20,30];
// console.log(arr)

// console.log(p1.__proto__ == Person.prototype);
// console.log(Person.prototype == p2.__proto__);
// console.log(p1.__proto__ == p2.__proto__);

// p1.__proto__.gender = "Male";

// p1.__proto__ = Person.prototype
// p2.__proto__ = Person.prototype

// console.log(p2.gender);

// Array.prototype.sum = function(){
//     console.log("Sum Function called");
// }
// Array.prototype.type  = "Object";

// let arr = [10,20,30];
// console.log(arr)
// arr.sum();
// console.log(arr.type)

// let arr2 =  [100,200,300];

// arr2.sum()

// Classes

// class Person{
//     constructor(firstName , lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     greet(){
//         console.log(`Hello ${this.firstName} , Good morning`);
//     }
// }

// const p1 = new Person("Shubham","Jain");

// console.log(p1)
// p1.greet();

// Inheritance

// class Animal{
//     constructor(name){
//         this.name = name;
//     }

//     speak(){
//         console.log(`${this.name} is speaking`);
//     }
// }

// class Dog extends Animal{
//     constructor(name , voice){
//         super(name);
//      this.voice = voice;   
//     }

//     speak(){
//         super.speak();
//         console.log("Speak called from DOG")
//     }
// }

// const d1 = new Dog("Tom","Bark");

// console.log(d1)
// d1.speak();


// Private property

// class Account{
//     #balance;


//     constructor(name , initialBalance){
//         this.name = name;
//         this.#balance = initialBalance;
//     }

//     get balance(){
//         console.log(this.#balance);
//     }

//     set balance(amount){
//         this.#balance  += amount;
//     }
// }

// const a1 = new Account("shubham",1000);

// a1.showBalance()
// a1.updateBalance(1000);

// a1.showBalance()

// Getters and setters
// console.log()

// a1.balance = 1000;
// a1.balance;

class Person{
    constructor(firstName , lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static greet(){
        console.log("Hello , Good morning");
    }


}

const p1 =  new Person("shubham","Jain");
// console.log(p1)
// p1.greet();
console.log(Person.greet);
Person.greet();

const d1 = new Date();
console.log(d1.__proto__)
Date.now();