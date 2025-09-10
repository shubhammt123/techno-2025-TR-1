// DOM Manipulation
// Document object model
// console.log(window); //global object

// console.log(this);
// console.log(window.document)
// console.log();

// let myDiv = document.getElementById("container");

// console.log(myDiv.id);
// myDiv.id = "Box";
// console.log( myDiv.className);
// myDiv.className = "header";
// console.log( myDiv.className);

// myDiv.id = "box";

// console.log(document.getElementById("box"));

// console.log(myDiv.style);

// myDiv.style.backgroundColor = "red";
// myDiv.style.border = "3px solid black";
// myDiv.style.borderRadius = "50%";

// console.log(myDiv.classList);

// myDiv.classList.add("header");
// myDiv.classList.remove("box");
// myDiv.classList.toggle("box");
// myDiv.classList.toggle("box");

// let myLink = document.getElementById("link");
// console.log(myLink)
// console.log()
// myLink.href = "https://facebook.com";

// let input = document.getElementById("password");

// input.type = "text"

// getAttribute , setAttribute

// console.log(myDiv.getAttribute("id"));
// console.log(myDiv.getAttribute("class"));

// myDiv.setAttribute("class","header");
// myDiv.setAttribute("style","background : red; border-radius : 50px");
// myDiv.setAttribute("style","border : 3px solid green");

// innerHTML , innerText , textContent

// console.log(myDiv.innerHTML);

// myDiv.innerHTML = "<input type='password' placeholder='Enter Password' style='padding : 20px' />"

// let newPara = document.getElementById("para");

// console.log(newPara.innerText);
// console.log(newPara.innerHTML);
// console.log(newPara.textContent);

// newPara.innerHTML = "<ul><li>First Element</li></ul>"
// newPara.innerText = "<ul><li>First Element</li></ul>"

// let myDiv = document.getElementsByClassName("container");

// console.log(myDiv);

// let newDivs = Array.from(myDiv)
// console.log(newDivs)
// for(let i = 0 ; i < myDiv.length ; i++){
//     if(i%2===0){
//         myDiv[i].style.background = "red";
//     }else{
//         myDiv[i].style.background = "yellow";
//     }
//     myDiv[i].style.padding = "10px";
// }

// newDivs.map((item)=>{
//     item.style.background = "red";
// })

// let arr = [10,20,30];

// console.log(arr);

// let newDivs = document.getElementsByTagName("div");
// console.log(newDivs);

// querySelector
// querySelectorAll

// let myDiv = document.querySelectorAll("#item");
// let myDiv1 = document.querySelectorAll(".container");
// let myDiv2 = document.querySelectorAll("div");

// console.log(myDiv)
// console.log(myDiv1)
// console.log(myDiv2)

// myDiv2.style.background = "red"

// let newEle = document.createElement("h1");
// newEle.innerHTML = "My Name is Shubham Jain";
// newEle.style.background = "skyblue";
// document.body.appendChild(newEle);
// console.log(newEle)

document.body.insertBefore();