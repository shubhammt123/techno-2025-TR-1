// document.getElementById("container").onclick = function (){
//     console.log("Clicked on container");
// }

// document.getElementById("container").addEventListener("click",function(){
//     console.log("Event triggerd from event listner");
// })

// document.getElementById("container").addEventListener("mouseenter",function(){
//     document.getElementById("container").style.background = "red";
// })

// document.getElementById("container").addEventListener("mouseleave",function(){
//     document.getElementById("container").style.background = "cadetblue";
// })

let data = [
  {
    "id": 1,
    "name": "Wireless Mouse",
    "category": "Electronics",
    "brand": "Logitech",
    "price": 899,
    "discount": 10,
    "inStock": true,
    "rating": 4.5,
    "reviews": 120,
    "createdAt": "2025-01-10"
  },
  {
    "id": 2,
    "name": "Gaming Keyboard",
    "category": "Electronics",
    "brand": "Razer",
    "price": 2999,
    "discount": 15,
    "inStock": true,
    "rating": 4.7,
    "reviews": 340,
    "createdAt": "2025-01-11"
  },
  {
    "id": 3,
    "name": "Bluetooth Headphones",
    "category": "Electronics",
    "brand": "Sony",
    "price": 4999,
    "discount": 20,
    "inStock": true,
    "rating": 4.6,
    "reviews": 450,
    "createdAt": "2025-01-12"
  },
  {
    "id": 4,
    "name": "Smartphone",
    "category": "Mobiles",
    "brand": "Samsung",
    "price": 24999,
    "discount": 10,
    "inStock": true,
    "rating": 4.8,
    "reviews": 980,
    "createdAt": "2025-01-15"
  },
  {
    "id": 5,
    "name": "Laptop",
    "category": "Computers",
    "brand": "Dell",
    "price": 55999,
    "discount": 5,
    "inStock": true,
    "rating": 4.4,
    "reviews": 220,
    "createdAt": "2025-01-18"
  },
  {
    "id": 6,
    "name": "Smart Watch",
    "category": "Wearables",
    "brand": "Apple",
    "price": 32999,
    "discount": 12,
    "inStock": true,
    "rating": 4.9,
    "reviews": 500,
    "createdAt": "2025-01-20"
  },
  {
    "id": 7,
    "name": "DSLR Camera",
    "category": "Cameras",
    "brand": "Canon",
    "price": 45999,
    "discount": 8,
    "inStock": true,
    "rating": 4.7,
    "reviews": 300,
    "createdAt": "2025-01-21"
  },
  {
    "id": 8,
    "name": "LED TV",
    "category": "Home Appliances",
    "brand": "Sony",
    "price": 35999,
    "discount": 10,
    "inStock": true,
    "rating": 4.5,
    "reviews": 410,
    "createdAt": "2025-01-22"
  },
  {
    "id": 9,
    "name": "Refrigerator",
    "category": "Home Appliances",
    "brand": "LG",
    "price": 27999,
    "discount": 6,
    "inStock": true,
    "rating": 4.4,
    "reviews": 200,
    "createdAt": "2025-01-23"
  },
  {
    "id": 10,
    "name": "Microwave Oven",
    "category": "Home Appliances",
    "brand": "Samsung",
    "price": 9999,
    "discount": 7,
    "inStock": true,
    "rating": 4.3,
    "reviews": 120,
    "createdAt": "2025-01-25"
  },
  {
    "id": 11,
    "name": "Air Conditioner",
    "category": "Home Appliances",
    "brand": "Voltas",
    "price": 32999,
    "discount": 10,
    "inStock": true,
    "rating": 4.6,
    "reviews": 260,
    "createdAt": "2025-01-26"
  },
  {
    "id": 12,
    "name": "Washing Machine",
    "category": "Home Appliances",
    "brand": "Whirlpool",
    "price": 22999,
    "discount": 9,
    "inStock": true,
    "rating": 4.4,
    "reviews": 190,
    "createdAt": "2025-01-27"
  },
  {
    "id": 13,
    "name": "Vacuum Cleaner",
    "category": "Home Appliances",
    "brand": "Philips",
    "price": 6999,
    "discount": 5,
    "inStock": true,
    "rating": 4.2,
    "reviews": 80,
    "createdAt": "2025-01-28"
  },
  {
    "id": 14,
    "name": "Coffee Maker",
    "category": "Kitchen",
    "brand": "Nescafe",
    "price": 4999,
    "discount": 15,
    "inStock": true,
    "rating": 4.1,
    "reviews": 100,
    "createdAt": "2025-01-29"
  },
  {
    "id": 15,
    "name": "Induction Cooktop",
    "category": "Kitchen",
    "brand": "Prestige",
    "price": 3499,
    "discount": 10,
    "inStock": true,
    "rating": 4.3,
    "reviews": 140,
    "createdAt": "2025-01-30"
  },
  {
    "id": 16,
    "name": "Mixer Grinder",
    "category": "Kitchen",
    "brand": "Bajaj",
    "price": 3999,
    "discount": 12,
    "inStock": true,
    "rating": 4.4,
    "reviews": 160,
    "createdAt": "2025-02-01"
  },
  {
    "id": 17,
    "name": "Air Fryer",
    "category": "Kitchen",
    "brand": "Philips",
    "price": 7999,
    "discount": 8,
    "inStock": true,
    "rating": 4.5,
    "reviews": 170,
    "createdAt": "2025-02-02"
  },
  {
    "id": 18,
    "name": "Water Purifier",
    "category": "Home Appliances",
    "brand": "Kent",
    "price": 14999,
    "discount": 7,
    "inStock": true,
    "rating": 4.6,
    "reviews": 220,
    "createdAt": "2025-02-03"
  },
  {
    "id": 19,
    "name": "Smart Speaker",
    "category": "Electronics",
    "brand": "Amazon Echo",
    "price": 5999,
    "discount": 10,
    "inStock": true,
    "rating": 4.7,
    "reviews": 340,
    "createdAt": "2025-02-04"
  },
  {
    "id": 20,
    "name": "Tablet",
    "category": "Electronics",
    "brand": "Apple iPad",
    "price": 49999,
    "discount": 5,
    "inStock": true,
    "rating": 4.8,
    "reviews": 420,
    "createdAt": "2025-02-05"
  }
];

// document.getElementById("button").addEventListener("click",function(){
//     let tbody = document.getElementById("table-body");
//     data.forEach((item)=>{
//         let tRow = document.createElement("tr");
//         tRow.innerHTML = `<td>${item.id}</td><td>${item.name}</td><td>${item.category}</td><td>${item.brand}</td><td>${item.price}</td><td>${item.discount}</td><td>${item.inStock}</td><td>${item.rating}</td><td>${item.reviews}</td><td>${item.createdAt}</td>`;
//         tbody.appendChild(tRow);
//     })
// })

// document.getElementById("input").addEventListener("keypress",function(event){
//     console.log(event);
//     console.log("Key press triggered");
// })

//   let obj = {
//     name : 'shubham',
//     email : 'shubhamgmail.com',
//     contactNo : '9876543212',
//     password : '1234554'
// }

// let keyName = 'gender'
// let keyValue = 'Male'

// obj[keyName] = keyValue

// obj = {...obj , keyName : keyValue};
// console.log(obj);

// document.getElementById('button').addEventListener('click',function(){
//     console.log('Form Submitted');
// })

// document.getElementById('signup-form').addEventListener('submit',function(e){
//     e.preventDefault();
//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let contact = document.getElementById('contact').value;
//     let password = document.getElementById('password').value;

//     console.log({name , email , contact , password});
// })

// let formData = {}; // {name : 's',email : 'v'}

// function handleChange (e){
//     formData = {...formData , [e.target.name] : e.target.value};
//     console.log(formData);
// }

// document.getElementById('name').addEventListener('input',handleChange)
// document.getElementById('email').addEventListener('input',handleChange)
// document.getElementById('contact').addEventListener('input',handleChange)
// document.getElementById('password').addEventListener('input',handleChange)

//  document.querySelectorAll('input').forEach((item)=>{
//     item.addEventListener('input',handleChange);
//  })

// Async JS

// setTimeOut
// setInterval
// clearTimeOut
// clearInterval

// setTimeOut

// setTimeout(()=>{
//     console.log("Hello World");
// },2000);

// setInterval

// let interval = setInterval(()=>{
//     console.log("Hello world")
// },2000);

// setTimeout(()=>{
//     clearInterval(interval)
// },10000);

// let timeOut  = setTimeout(()=>{
//     console.log("Hello world")
// },5000);

// document.getElementById("button").addEventListener("click",function(){
//     clearTimeout(timeOut);
//     console.log("Time out cleared");
// })


// console.log("First Step");

// console.log("Second Step");

// setTimeout(()=>{
//     console.log("Third Step")
// },2000);

// console.log("Fourth Step");

// setTimeout(()=>{
//     console.log("Fifth Step")
// },1000);