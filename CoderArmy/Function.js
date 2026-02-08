// Function in Js

// function greeting(){
//     console.log("Hello Frrom me!!")
// }

function sum(num1,num2,num3=0,num4=0){   // We can set default value of the parameters in function and it can replace with passing values
    let sum = num1+num2+num3+num4;
    return sum;
}
let res = sum(34,22,1);

console.log(res)
console.log(sum(3,22,3,4))


// we try to make above function flexible using ---> Rest operator

// function sumcalc(...num){  // it stores values in array
//   let sum = 0;
//   console.log("From rest operator----")
//   for(let val of num){
//     sum+=val;
//   }
//   return sum;
// }
// console.log(sumcalc(34,3,3,32,2,2,2))




// Function  expression

// const addFun = function(num1,num2){  // we can store in an variable 
//     return num1+num2;
// }
// console.log(addFun(34,2))



// Arrow funtion

// const addNum = (num1,num2)=> {
//     return num1+num2;
// }

const addNum = (num1,num2)=> num1+num2;  // we can write when we want to return anything from the function
// above is the like arr.sort() in array

console.log(addNum(2,3))

// const srt = num => num*num  //if we have one para. to pass then no need of () braces
// console.log(srt(6))


// const greeting  = () =>{
//     return {
//         name: "kapil",
//         age: 34
//     }
// }

// const greeting = () =>({name: "kapil", age:33})  //() means we return an object ,  but with {} expect the return statement



// IIFE-> Immendiately Invoked Function Expression

// ;(function greeting(){ 
//     console.log("Hello From me!!"); 
// })();

// (()=>{
//     console.log("heyyy")
// })();



// CallBack FUnction

function greeting(){ 
    console.log("Hello ji!!"); 
}

// function meeting(callback){ 
//     console.log("I am going to meet!!");
//     callback();                              // it execute the other fun. then come here, but it can't hard code
//     // code hota
//     console.log("i have finished meeting")                 
// }


// meeting(greeting)



// blinkit
function blinkitOrderPlace(){
    console.log("We have started to packing your food")
}

// zomato
function zomatoOrderPlace(){
    console.log("We have started preparing your food")
}


function payment(amt, callback){
    console.log(`${amt} payment has initialized`);
    console.log("payment is received")
    callback();
    //GST
    //Rider money
    //company ka money
}

// payment(400,zomatoOrderPlace)
// payment(122,blinkitOrderPlace)          // passing the function as argument




// console.log(x)
var x = 10;
var y = 20;


// Memory allocation
// a = 10
// b= 12
// sum = <uninitialized> (Temporal dead zone)   -->  give error

//const and let gives error --> access before initialization

const add =(m,n)=>{      
    var val = m+n;
    return sum;
}

const sum = add(a,b);
console.log(res)

