// Operators

// + , -,  *  , / , % ,  **
// = , += , -= , *= , /= , %=  , **=
// == , === , != , !==  , < ,> , <= , >=
// && , || ,  !
// & , | , ^ , <<< , >>> 

// let x = 5;
// let y = 10;

// console.log("The sum of x & y is ",x+y);
// console.log( "The Subtraction of y & x is ",y-x);
// console.log("The multiplication of x & y is" , x*y);
// console.log("The divison of x & y is ", x/y);
// console.log("The reminder of y/x is ", y%x);
// console.log("The x**y is ", x**y);

// let a = "shubham";

// x += y; // x = x+y
// console.log(x)

// x -= y; // x = x-y;
// console.log(x)

// x *= y;  // x = x*y;

// console.log(x);

// x /= y; // x = x/y;

// console.log(x);

// y %= x;// y = y % x;

// console.log(y);

// x **= y; // x = x**y;

// console.log(x);

// let x = 5;
// let y = "5";

// console.log(x == y);
// console.log(x === y);

// console.log(x !== y);

// console.log(x >= y);

// let x = true;
// let y = false;

// console.log(x && y);
// console.log(x || y);

// console.log(x && !y);

// console.log(10 || ![]);

// short circuit evalution

// 0 , "" , false  , undefine , null - falsy

// console.log("" || []);

// & , | , ^ , <<< , >>> 

// let x = 5;
// let y =  10;

// console.log();

// let role = "2";

// role === 2 && console.log("Your role is admin , so you can access this info");

// let arr = [];

// arr.length > 0 && console.log(arr[0],arr[1]);

// let isEdit = false;

// isEdit && 

// & , | , ^ , <<< , >>> 

// let x = 5; //  010
// let y = 10; // 101  -   0000

// console.log(x & y);
// console.log(x|y); // 1111
// console.log(x^y);

// console.log(x << 3);  
// console.log(x >> 1);

// control flows

// conditional statements

// if else , switch

// let number = 50;

// if(number < 90){
//     console.log("Grade A+");
// }else if(number > 80){
//     console.log("Grade A");
// }else if(number   > 70){
//     console.log("Grade B");
// }else if(number > 60){
//     console.log("Grade C");
// }else if(number > 50){
//     console.log("Grade D");
// }else{
//     console.log("Grade F");
// }

// switch cases
// let day = +prompt("Please Enter a day number");
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thrusday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid Day");
// }
    
// functions

// function func1(a,b){
//     console.log(`The value of a is ${a}, The value of b is ${b}`);
// }

// func1(100,200);

// const func1 = function(a,b){
//     console.log(a , b);
// }

// func1(100,200);

// const func1 = (a,b)=>{
//     console.log("The value of a is" , a);
//     console.log("The value of b is",b);
// }

// func1(100,200);

// let a = 5;
// let b = ++a;

// console.log(a);
// console.log(b);

// loops

// for(let i = 0;i<10;i++){
//     console.log(i);
// }

function square(r,c){
    for(let i = 0 ; i < r ; i++){
        let row = "";
        for(let j = 0 ; j < c ; j++){
            row += "*";
        }
        console.log(row);
    }
}

square(5,7);