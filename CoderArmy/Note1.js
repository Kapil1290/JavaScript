// let name = "Kapil"
// let age = 20;
// age = 21;

// console.log(name, age);


// const account = 1234;
// console.log(account)

// var a = 212;
// var a = 222;
// console.log(a)


// if(true){
//     var x = 34;
// }

// console.log(x);


//  data types

//primitive data type 

// number, string, boolean, undefined, null, bigint, symbol

// Number
let a=10;
let b = 23.252482;
// b = b.toFixed(2)// return string value
// console.log(a.toString()) // to convert number to string 

let num = new Number(12); // treat as object 
let num2 = new Number(12)
console.log(num==num2)  // check on the basis of their references. They have different references
// console.log(typeof num)
console.log(Boolean([])) //it return false when give parameter 0 only
// non premetive datatype compare with references
// premetive datatype compare with values






// //string
// let name = "kapil is a boy!!!!!!"
// console.log(name);

// //boolean 
// let login = true;
// let l = false;
// console.log(login, l);

// //undefined
// let user;
// console.log(user) //by default value undefined

// //bigint
// let n = 2333333333332232322323234895422n;
// console.log(n)


// //null
// // let weather = current_weather("Dwarka")
// // 25
// // null
// // undefined  -->  no data on given input



// //symbol
// const id1 = Symbol("id")
// const id2 = Symbol("id")
// console.log(id1==id2)


// //non primitive data type

// //array
// let arr = [23,22,"kapil"]
// arr.push(34);

// console.log(arr)
// arr.pop()
// console.log(arr)


// //object
// let obj1 = {
//     name:"kapil",
//     course:"B.Tech",
//     year:"3rd",
//     sec:"A"
// }

// console.log(typeof obj1)

// let obj2 = obj1;
// obj2.name = "Mohan"
// console.log(obj1)
// console.log(obj2.name)



//Type cast 
// let x = "12";
// let y = Number(x);
// console.log(typeof x)

// let a= "12as";
// let b = String(a)
// console.log(typeof b)

// let x = 20;
// let y = "20";
// console.log(x===y)

// null is loosely equals to undefined only
// console.log(null==undefined) //it is true only
// console.log(null==0) --> false
// console.log(null==false) --> false

//type of null is object & usdefined is undefined, So as we know about strict operator
// console.log(null===undefined) --> false

// console.log(NaN==NaN) --> false



// Logical operator on string 
// let a = "Rohitosh"
// let b = "Mohitosh"
// console.log(a&&b)  // Check both and print or return the value after operator
// let x = a&&b;
// console.log(x)

// console.log(b||a)  
// x = a||b;
// console.log(x)


// console.log(null>=0)
// console.log(null<=0)


//String in JS
// let str1 = "My name is kapil!!";
// let str2 = 'From SAGE'
// let day = 12;
// let str3 = `Event is on day ${day}`
// console.log(str3)

// const str = "Hello Hustle Person cello"

// console.log(str.length)
// console.log(str[6])
// str[0] = "S";   // no change in actual string


// console.log(str.toUpperCase())
// console.log(str.toLowerCase())

// console.log(str.indexOf("es"))  //always first founded index
// console.log(str.lastIndexOf("lo"))  //always first founded index
// console.log(str.includes("ro"))  //check whether is it present in the string or not

// console.log(str.slice(0,5))

// console.log(str.slice(-4,-2)) //first-->include and second exclude
// console.log(str)

// const str0 = "Hello Hustle Person cello"

// console.log(str.substring(0,5))

// let str3 = "Kapil";
// let str4 = "Prajapat";
// let c = str3+" "+str4
// console.log(c)

// console.log(str0.replaceAll("llo",'lo'))

// const user = "  Kapil  ";
// console.log(user.trim())

// const names = "Rohit Kapil Aditya Kusal Siima";  //can be comma or . or space as well
// console.log(names.split(" "))



// ---> Current Dates and Time of our system
const now = new Date();
// console.log(now); // it shows UTC time
// console.log(now.toString())
// console.log(now.toLocaleString())

// console.log(now.getDay()) // days start from 0-->Sunday
// console.log(now.getDate()) // only date
// console.log(now.getMonth()) // month start from 0-->January



// Format to pass the parameter-->year  month  date  hour  minute  second  millisecond

const now1 = new Date(2026,9,23,2,4,23,123);
// console.log(now1.toString())  // it will convert ^above to string format
// console.log(now1)



// const time = Date.now();   // for fetching timestamp (in millisecond)
// const dates = new Date(time) //for convert timestamp to actual time(IST)
// const date1 = new Date(-176934) //it reverse back the timestamp from today date
// const start = new Date(0)  // first starting time of timestamp
// console.log(start)
// console.log(time)
// console.log(start)
// console.log(dates);   // it shows time in milliseconds

// by default browser can convert UTC to corresponding country

// console.log(time)




//MATH IN JS

// console.log(Math.log10(20))
// console.log(Math.PI);
// console.log(Math.floor(Math.random()*10+1))

// console.log(Math.floor(Math.random()*6+1))
//Math.floor(Math.random()*totalNumberOfOutcome)+shift
//(max-min+1)+min
// console.log(Math.floor(Math.random()*11+15))

//OTP generation 1000 --> 9999
// console.log(Math.floor(Math.random()*(9999-1000+1))+1000)  // not for otp generation







