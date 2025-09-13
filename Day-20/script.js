// Async Js

// Promise

// function fetchData(){
//     let data = {
//         firstName : "shubham",
//         lastName : "Jain",
//         gender : "Male"
//     }
//     return data;
// }

// let result;

// setTimeout(()=>{
//     result = fetchData();
// },2000);

// console.log(result)


// function fetchData(){
//     let data = {
//         firstName : "shubham",
//         lastName : "Jain",
//         gender : "Male"
//     };

//     return new Promise((resolve , reject)=>{
//         let randomNumber = Math.floor(Math.random()*100); 
//         console.log(randomNumber)
//         setTimeout(()=>{
//             if(randomNumber%2===0){
//                 resolve(data)
//             }else{
//                 reject("Error in fetching data");
//             }
//         },2000);
//     })
// }

// let result = fetchData();

// result
// .then((res)=>{
//     console.log(res);
//     alert("Data Fetched");
// })
// .catch((error)=>{
//     console.log(error);
//     alert("Error");
// })
// console.log("Hello world");

// const fetchData = ()=>{
//     return fetch("https://fakestoreapi.com/products");    
// }

// fetchData()
// .then((res)=>{
//     console.log("res",res);
//    return res.json()
// })
// .then((data)=>{
//     console.log(data)
//     let tbody = document.getElementById("tbody");
//     data.forEach((item) => {
//         let tr = document.createElement("tr");
//         tr.innerHTML = `<td>${item.id}</td><td>${item.title}</td><td>${item.price}</td><td>${item.category}</td><td>${item.rating.rate}</td>`;
//         tbody.appendChild(tr);
//     });
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("Task completed");
// })


// const fetchData = async () => {
//     try {
//         const response = await fetch("https://fakestoreapi.com/products");
//         const data = await response.json();
//         console.log(data);
//         let tbody = document.getElementById("tbody");
//         data.forEach((item) => {
//             let tr = document.createElement("tr");
//             tr.innerHTML = `<td>${item.id}</td><td>${item.title}</td><td>${item.price}</td><td>${item.category}</td><td>${item.rating.rate}</td>`;
//             tbody.appendChild(tr);
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchData();

// Event Loop

