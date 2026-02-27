// 'use strict'

// var a=10;
// var b = 2;               //by switch on the strict mode, it will give the error in non declare and same parameter
// console.log(a,b)

// function greet(name,name1){
//     console.log(name,name1);  // take lthis call bind
//this: class and obj method but we also use in other
//strict mode vs non strict modeast value of parameter
// }

// greet("Rohit","Mohit")

//window is the browser object that's why

// console.log(window)  // gives error
// console.log(global)   // its obj of node environment

// console.log(globalThis) // it is for both browser and node environment  (Universal)


// Learn about this keyword


// console.log(this)   // In node env. points to empty obj But In browser points to window  for both strict and non strict



// function greet(){
//     console.log(`hi ${this.name}`)   
// }

// function inc(val){
//     this.age+=val;
//     console.log(this.age);
// }

// function rem(name,age){
//     console.log(this.name)
//     this.name = name;
//     console.log(this.name)
//     // this.age = name[1];
//     // console.log(this.age)
//     console.log(`Name: ${name} and Age: ${age}`)
// }

// const user = {
//     name: "Kapil",
//     age:23
// }

// const user1 = {
//     name:"Ajay",
//     age:22
// }

// greet.call(user)
// greet.call(user1)

// inc.call(user1,10)
// rem.call(user1,"Himanshu")

// rem.apply(user1,["Himanshu",21])

// const val = rem.bind(user,"himanshu",54) 
// console.log(val)   // it bound the rem and put value in val for future use
// val()


// user1.greet = user.greet;  

// user1.greet()


'use strict'  // it refers to make behave logically
function greet(){
    console.log(this)    
}
greet();      // If no object associate with this keyword then IN STRICT MODE points to UNDEFINED and IN NON STRICT MODE points to OBJECT



//class

// class person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }


// In class constuctor 'this' points to the newly created object
// this = {name:"Tarun"}

// const p1 = new person("Tarun",23)
// console.log(p1)



// Arrow function: this doesn't exist for Arrow function
// Arrow fun. use Lexical scope means look outside of function


// 'use strict'
// const funn = ()=>{
//     console.log(this)    // it take this from outside like from console.log(this)
// }

// funn();  //--> point to empty object


// const timer = {
//     second : 0,
//     start : function(){
//         setInterval(()=>{
//             this.second++;          // look outside
//             console.log(this.second)
//         },500)
//     }
// }

// timer.start()

// 'use strict'
// console.log(this)

// 'use strict'  // it refers to make behave logically
// function greet(){
//     console.log(this);   
// }
// greet();    

