let fullName = "Kapil Prajapat";
let amt = 120.22;
let bi = BigInt("231222");
console.log(bi);
// {
//     let a = 42;
//     console.log(a);
// }


// {
//     let a = 4;
//     console.log(a);
// }

// data types in js---
//Primitive data types
// Number, Boolean, String, Undefined, Null, BigInt
//Non primitive data types
//array, function


//objects are the collection of values and their manipulation and update

let student ={
    name : "Aditya",
    age : 12,
    add : "xyz",
    cgpa : 7.6
};

// -let can be update
// -const can't update but it is update the object's key

student["age"] = student["age"] +1;
student["add"] = student["add"] + " gio"
student["name"] = student["name"] + " Gupta" 

console.log(student)
//Operator in js
//   arithmatic opr --> +, -, /, *, %, **(for exponential)
//   Assingment opr --> =, *=, -=, %=, **= 
//   Comparison opr --> ==, ===(it check datatype, strict check), !=, !==(it check datatype, strict check)
//                      <=, >=, <, >
//   Logical opr --> &&, ||, !
//   Unary opr --> ++, --
//   Ternary opr(3 opr works) --> snx= condition ? true o/t : false o/t

// MDN web documentation for more

// let a = 19;
// let Games = "cricket";
// let c = 9;
// console.log("a**b=",a**b);
// console.log("a=*b - ", a %= b);
// let m = a < b ? "yes": "No";
// console.log(m);

/* switch(Games){
    case 'football':
        console.log("Ronaldo"); break;
    case 'cricket':
        console.log("Mahendra Singh Dhoni"); break;
    case 'kabbadi':
        console.log("Pradeep"); break;
    case 'chess':
        console.log("Gukesh"); break;
    default: console.log("invalid ");  
} */

//  alert() is use to give pop-up message to user on web
//  we can take input from user by using <--prompt(message)-->

// let num = prompt("Enter an number:-")
// let count=0;
// for of loop
// snyx -- for(var of var) use for string and array

//for in loop
// snyx -- for(key in obj) use for objects

// let student={
//     name: "kapil",
//     age: 20,
//     add: "bedia",
//     sec: "A"
// };

// for(let key in student){
//     console.log("key=",key,"value= ",student[key]);
// }
// !== use for string comparison
// let gnum = 55;

// while(gnum != num){
//     num = prompt("try again");
// }
// if(gnum==num){
//     console.log("you win");
// }

//String properties, and methods
// let str = " NewLanguage";
// console.log(str[1]);

// //specialString
// let ss = `hello this is kapil`;
// console.log(ss);

// let pen = {
//     price: 10,
//     brand: "flair",
// };

// //combine above line using templete literals
// let op = `the cost of pen is ${pen.price} and  \n brand is ${pen.brand}`;
// console.log(op);

// String and their methods
// let str1 = str.toUpperCase();  //Original string can't change because string in js are immutable
// console.log(str.trim());

// console.log(str.slice(1));
// let str2 = "Apna sweets";
// console.log(str.concat(str2));
// console.log(str2.replace("s","t"));

// let str3 = prompt("Enter your FullName!!!!");
// let username = "@"+ str3;
// username = username.concat(str3.length);
// console.log(username);

//arrays in javaScript
// let price = [250, 645,300,900,50];
// let vegies = ["paalak", "ladyfinger", "califlower"];
// let temp = 1;
// for(let i=0; i<price.length; i++){
//     temp = (price[i]/100)*10;
//     price[i] = price[i]-temp;
// }

//Array methods

// let delet = price.pop();
// console.log(price.toString());
// we can combime multiple arrays
// let combine = price.concat(vegies);
// console.log(price.slice(0, 2));
// console.log(price);

// price.splice(1,1,102,101); //(startIdx, delCount, newEle) it will change in original array
// console.log(price)
// price.unshift(231); //shift() $ unshift() methods add new ele. from the starting
// console.log(price);

// let company = ["Bloomberg", "Microsoft", "flipkart", "Google", "IBM", "Netflix"];

// company.splice(1,3,"Amazon");
// console.log(company);



// functions in javascript

// function sum(a, b){
//     let s = a+b;
//     return s;
// }


// Arrow fun.
// const mult = (a,b) =>{
//     console.log(a*b)
// };
// let s = mult(34,3);
// let a = (a,b) =>{
//     console.log(a-b);
// }

// let naam = "Raman";
// console.log(naam.substring(0,3));
// console.log(naam.indexOf("a"));

// let str1 = prompt("Enter a string"); //used to take string as input

// let arr = [90,98,76,80,92, 91, 76,69, 70];
// forEach() method is used to traverse an array and also take function as parameter
// const ar=(arr)=>{
//     console.log(arr*1);
// }
// arr.forEach(ar);

// map() is as similar to forEach(), but it create new array during operation

// let newArr = arr.map((val)=>{
//     return val+1;
// })
// console.log(newArr);

// filter() is used to filter the array value on the basis of some condition
// for-example:- return the values which are fully divisible by 2 only

// let newAr = arr.filter((val)=>{
//     if(val>90){
//         return val;
//     }
// })


// let students = ["Kapil", "Mahesh", "Damodar", "Raoji", "Satyam", "Pratyush", "Ramesh", "Kajal", "Manav", "Deepak", "Roshani", "Karishna", "Kiran"]
// let letter = prompt("Enter letter for filtering!!!!");
// let newAcc = students.filter((val) =>{

//     if(val[0]==letter){
//         return val;
//     }
// })

// reduce() is used to perform opr on array
// let red = arr.reduce((res, cur) => {
//     return res > cur ? res : cur;
// });

// let n = prompt("enter number!!!");
// ++n;
// let arrr = [];
// for(let i=1; i<n; i++){
//     arrr.push(i);
// }
// console.log(arrr);



// let red = arrr.reduce((res, cur) => {
//     return res * cur;
// });
// console.log(red);



