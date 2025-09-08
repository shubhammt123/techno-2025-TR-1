// find , findIndex , some , every ,  forEach , sort , reverse , flat  , join

// let arr = [10,20,30,40,50];

// find , findIndex

// let result = arr.find((item)=>{
//     return item > 30;
// })
// console.log(result)

// let result = arr.findIndex(item=>item > 30);

// console.log(result);

// const sum = a=>a**2;

// let arr = [10,20,30,40,50];

// let result = arr.every((item)=>item%2===0);
// console.log(result)

// let arr = [10,20,30,40,50,["shubham","jain",true,false,[10,20,30,[true,false]]],["First","Second"]];

// let newArr = arr.flat(3);
// console.log(newArr)

// join , reverse

// let arr = [10,20,30];

// let result = arr.join("/");

// console.log(result);

// let date = "25-07-2025"; // 25/07/2025

// let newStr = date.split("-");

// let newDateFormat = newStr.join("/");
// console.log(newDateFormat);

// let arr = [10,20,30,40,50];

// let newArr = arr.reverse();
// console.log(newArr);

// let arr = [101,10,23,432,53,42,2,42,87,56,9,98,5];

// let arr = ["shubham","aac","abc","cfd","erf","uyt","aaa","asd","bcf","xwv","dse"];

// let sortedArr = arr.sort((a,b)=>b-a);

// console.log(sortedArr);

// forEach
// let arr = [10,20,30,40,50];

// let result = arr.forEach((item)=>{
//     return item**2;
// });

// console.log(result);

// string methods
// charAt , indexOf , lastIndexOf , includes , 
// trim , split , slice , toUppercase , toLowerCase , replace , concat

// let str = "Shubham Jain";

// console.log(str[2]);
// let result = str.charAt(5);
// console.log(result)

// console.log(str.lastIndexOf("a"));
// console.log(str.includes("Shb"));

// trim , split , slice

// let str = "  shubham    jain  ";
// console.log(str.length);
// let result = str.trim();
// console.log(result.length)

// // split
// let str = "shubham Jain";
// let result = str.split("h");
// console.log(result)

// let str = "shubham jain";

// let result = str.slice(3,6);
// console.log(result);

// let str = "shubham";
// let str2 = "jain";

// console.log(str.concat( " ",str2));

// replace
// let str = "shubham jain";

// console.log(str.replaceAll("a","hello"));

// object methods

// keys ,  values , entries  , freez  , seal , hasOwn , assign

// let obj = {
//     firstName : "shubham",
//     lastName : "Jain"
// }

// let result = Object.keys(obj);
// let values = Object.values(obj);
// let entries = Object.entries(obj);
// console.log(result)
// console.log(values)
// console.log(entries)

// Object.freeze(obj);

// // delete obj.firstName;

// console.log(obj);

// Object.seal(obj);

// obj.gender = "Male";
// obj.firstName = "Vinay";

// console.log(obj);

// let obj = {
//     firstName : "shubham",
//     lastName : "Jain"
// }

// console.log(Object.hasOwn(obj,"gender"));

// let obj1 = {
//     firstName : "shubham",
//     lastName : "Jain"
// }

// let obj2 = {
//     firstName : "Vinay",
//     gender : "Male",
//     address : "Jaipur"
// }
// console.log(Object.assign(obj1,obj2));

// let arr = [10,20,30];

// let arr1 = arr;

// arr1.push(1000);
// console.log(arr)
// console.log(arr1);

// console.log(arr === arr1);

// let obj = {
//     firstName : "shubham",
//     lastName : "Jain"
// }

// let obj1 = obj;

// obj1.gender = "Male"

// console.log(obj)
// console.log(obj1)
// console.log(obj == obj1);

// spread operators(...)

// let data = [{},{},{},{},{}];

// let copiedData = data;

// copiedData.push({});


// let arr = [10,20,30];

// let arr1  = [...arr];

// arr1.push(1000);

// console.log(arr1);
// console.log(arr);

// let arr = [10,20,30];
// let arr2 = [100,200,300];

// let arr1 = [...arr,"hello","world" , ...arr2];
// console.log(arr1)

// let obj = {
//     firstName : "Shubham",
//     lastName : "Jain"
// }

// let obj1 = {
//     firstName : "Harshit",
//     gender : "Male",
//     address : "Jaipur",
// }


// let name = "techno";

// let obj2 = {...obj1 , firstName : "Vinay",name };

// console.log(obj2)

// console.log(obj1)

// DESTRUCTURING AND REST

// let obj = {
//     firstName : "shubham",
//     lastName : "Jain",
//     gender : "Male",
//     address  : "Jaipur",
//     section : "FSD"
// }

// let { gender,firstName:fName = "ADMIN" , ...rest} = obj;

// console.log(fName)
// console.log(gender)
// console.log(rest)

let arr = [10,20,30,40];

let [,a=1000,...rest] = arr;
console.log(a)
console.log(rest)