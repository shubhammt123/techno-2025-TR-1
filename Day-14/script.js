// array methods

// push , pop , shift , unshift , map , filter , reduce  , splice , split , indexOf , lastIndexOf , concat , includes , find , findIndex , some , every ,  forEach , sort , reverse , flat  , join ,  

// let arr = [10,20,30,40,50,60];

//  console.log(arr.push("shubham"));//returns the new length of the array and mutate the original array;
// console.log(arr);

// console.log(arr.pop()); // returns the popped element and mutate the original array

// console.log(arr);

// console.log(arr.shift());

// console.log(arr);

// console.log(arr.unshift("shubham"));

// console.log(arr);

// function func1 (){
//     console.log("Func 1 is called");
// }

// function func2(func1){
//     func1();
//     console.log("callback is executed and now running the func2");
// }

 // func1 - callback function  , func2 -  higher order function


// function sum(a,b){
//     console.log(a+b);
// }

// sum(100,200);


function func2(a){
    console.log(a);
    a(100);
    console.log("This is func2");
}

function callback1(p1){
    console.log(p1);
    console.log("This is func 1 and passing as a callback");
}

function callback2(p2){
    console.log(p2)
    console.log("Func 3 is called and passing as a callback");
}

func2(callback1); // func1 - callback , func2 - higher order function

func2(callback2);