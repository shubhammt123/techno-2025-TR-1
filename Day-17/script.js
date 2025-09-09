// Math , Number , Date

// Math - sqrt , random , ceil , floor , round , pow,  MIN  ,  MAX
// Number - toFixed , parseInt , parseFloat , isNaN  , isInterger
// Date - getFullYear  , getMonth , getDay , getDate , getHours , getMinutes , getSeconds , getTime , Now() , toDateString , toTimeString

// Math Method

// let result = Math.sqrt(10);
// console.log(result);

// let num = Math.ceil(10.00001);
// console.log(num);

// let num1 = Math.floor(10.99999);
// console.log(num1);

// let num2 = Math.round(10.5);
// console.log(num2);

// let pow = Math.pow(2,-1);
// console.log(pow);

// let min = Math.min(200,100,300);
// console.log(min);

// let max = Math.max(200,100,300);
// console.log(max);

// let randomNumber = Math.random();
// console.log(randomNumber);

// 4 digit otp

// let otp = Math.floor(Math.random()*9000 + 1000); 
// 1000  - 9999
// console.log(otp);

// Number methods

// let num = 102.43135343;

// let newNum = num.toFixed(3);

// console.log(newNum);


// let str = "5";

// let newNum = Number(str);
// console.log(typeof newNum);

// let str = "34.4te332px"
// // console.log(Number(str))

// console.log(Number.parseInt(str));
// console.log(Number.parseFloat(str));

// let str = "190";

// let num = Number(str);

// console.log(Number.isNaN(num));


// let str = "shu184bh23am32j32ai323n";

// let newArr = str.split("");
// console.log(newArr);

// let sum = 0;

// newArr.forEach((item)=>{
//     let newNum = Number(item);
//     if(!Number.isNaN(newNum)){
//         sum += newNum;
//     }
// })

// console.log(sum);
// Number.isNaN()

// console.log(typeof Number("s"));

// console.log(Number.isInteger(122));

// let date = new Date();

// console.log(date);

// console.log(date.getFullYear());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getTime());
// console.log(date.toDateString());
// console.log(date.toTimeString());

// let newDate = Date.now();
// console.log(newDate);
// let currDate = new Date(newDate);
// console.log(currDate)



// let date = new Date(60*60*24*1000);
// console.log(date);

// Type conversion(Expilicit conversion) and type coercion(implicit conversion)

// let firstVar = "40";

// let newNum = Number(firstVar);
// console.log(typeof newNum)

// let firstVar = {};
// console.log(String(firstVar));
// console.log(typeof String(firstVar));

// Type coercion

// console.log(typeof (5 + "5"));
// console.log

// scopes and hoisiting

// global scope , functional scope/local scope
// block scope - ES6

// if(){

// }

// for(){

// }

// {

// }

// var - global scope variable / local scope variable
// let , const - block scope variable

// {
//     let firstVar = "shubham";   
//     console.log(firstVar);
//     {
//         let firstVar = "1000";
//         firstVar = 100;
//         console.log(firstVar)
//     }
//     console.log(firstVar)
// }

// console.log(firstVar)


// function sum(){
//     var a = 100;
//     console.log(a);
// }

// console.log(a);

// hoisiting
// console.log(a);
// sum();

// let a = "shubham";

// console.log(a);

sum();
// function sum(){
//     console.log("Sum function called");
// }

// sum();


// const sum = ()=>{
//     console.log("Sum function called");
// }

// sum();