// array methods

// push , pop , shift , unshift , map , filter , reduce  , splice , slice , indexOf , lastIndexOf , concat , includes , find , findIndex , some , every ,  forEach , sort , reverse , flat  , join

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


// function func2(a){
//     console.log(a);
//     a(100);
//     console.log("This is func2");
// }

// function callback1(p1){
//     console.log(p1);
//     console.log("This is func 1 and passing as a callback");
// }

// function callback2(p2){
//     console.log(p2)
//     console.log("Func 3 is called and passing as a callback");
// }

// func2(callback1); // func1 - callback , func2 - higher order function

// func2(callback2);

// calculator


// function calculator(a,b,operation){
//     console.log(operation)
//     operation(a,b);
// }

// calculator(100,200,(x,y)=>{
//     console.log(x/y);
// });

// calculator(100,200,(x,y)=>{
//     console.log(x*y);
// });

// calculator(100,200,(x,y)=>{
//     console.log(x+y);
// })
// calculator(100,200,(x,y)=>{
//     console.log(x-y);
// })

// let arr = [10,20,30,40,50,60];

// let result = arr.map((item)=>{
//     return item**2;
// });

// console.log(result);

// let products = [
//     {
//         productName : "Iphone",
//         productPrice : "$999",
//         category : "smartphone",
//         description : "This is 16 series of iphone"
//     },
//     {
//         productName : "Samsung",
//         productPrice : "$999",
//         category : "smartphone",
//         description : "This is S25 series of Samsung"
//     },
    
//     {
//         productName : "Google Pixel 9",
//         productPrice : "$999",
//         category : "smartphone",
//         description : "This is pixel series of google"
//     },
    
//     {
//         productName : "Nothing",
//         productPrice : "$999",
//         category : "smartphone",
//         description : "This is Nothing phone"
//     },
// ]

// let results = products.map((product,index)=>{
//     let newObj = {...product , id : index+1};
//     return newObj;
// })

// map does't change original array and returns the new array with the same length of the original array

// console.log(results);
// console.log("---------****----------")
// console.log(products); 

// let arr = [10,20,30,40,50,60];

// let result = arr.map((item)=>{
//     if(item>30){
//         return item
//     };
// });

// console.log(result);

// filter

// let arr = [10,20,30,40,50,60];

// let result = arr.filter((item)=>{
//     return item>30;
// });

// console.log(result);
// console.log(arr);


// reduce
// let arr = [10,20,30,40,50,60];
// let result = arr.reduce((acc,curr)=>{
//     return acc+curr
// },1000);

// console.log(result)

// split , splice

// let arr = [10,20,30,"shubham",40,50,"shubham",60,"shubham",70];

// let result = arr.slice(2);
// console.log(result);

// let result = arr.splice(3,0,"Hello","world");

// console.log(arr)

// let result = arr.indexOf("jain");
// console.log(result);

// concat , includes

// let arr1 = [10,20,30];
// let arr2 = [40,50,60];

// let result = arr1.concat("shubham",arr2);

// console.log(result)

let arr = [10,20,30,"shubham",40,50,"shubham",60,"shubham",70];

let result = arr.includes(50);
console.log(result)