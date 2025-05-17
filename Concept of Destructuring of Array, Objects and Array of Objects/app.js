// // destructuring

// // arrays

// const numbers = [1, 2, 3, 4, ["a", "b"]];

// const [firstValue, secondValue, , fourthValue, [first, second]] = numbers;

// console.log(firstValue);
// console.log(secondValue);
// console.log(fourthValue);
// console.log(first);
// console.log(second);

// // ojects

// const students = {
//     name : "Ali",
//     age: 12,
//     address : {
//         city: undefined,
//         state: "abc"
//     }
// }

// const {name, age, address:{city = "Pehawar", state = "KPK"} = {city : "Karachi", state : "sindh"}} = students;

// console.log(name);
// console.log(age);
// console.log(city);
// console.log(state);


// // default parameters

// const greet = ({fullName = "Ali",age = 29} = {}, a,b,c) => {
//     console.log(fullName,age,a,b,c);
// }

// greet(1,2,3)


const btn = document.getElementById("btn");
const heading = document.getElementById("heading");

btn.addEventListener("click", function(){
    if(heading.getAttribute("class") === "text-red"){
        heading.setAttribute("class", "text-green");
    }else {
        heading.setAttribute("class", "text-red");
    }
})
const container = document.getElementById("container")
    const para = document.createElement("p");
    const textNode = document.createTextNode("Hello world");
    para.setAttribute("class", "text-green");

    container.appendChild(para);


// create a paragraph element from JS
// create a textnode from js
// add class text-green to created paragraph by using setAttribut method
// append textnode to created paragraph



