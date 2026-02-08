// SCOPE AND CLOSURES

// Global Scope  -> every where in your program
// Functional scope  -> within funtional scope only
// Block scope  -> within scopes only

//Valid for only let and const
// var--> follow funtional scope 

// let a=19;
// const b=21;  // use anywhere, it has global scope
// var c = 22;


// // function greet(){
// //     console.log(a)          //-> Functional Scope  
// //     let c = 23;            // scope within first curly braces 
// // }


// // if(a!=b){
// //     console.log(b)   
// //     var c=90; 
// //     console.log(c)
// // }
// // greet()



// function createCounter(){

//     function increment(){
//         console.log("I am incremeting the value")
//     }
//     return increment;
// }

// let fun = createCounter()
// console.log(fun)   // it will return the reference of the function


// let balance = 300;
// // no direct access


// balance+="rohit"
// console.log(balance)

function BankServices(){
    let balance = 2000;
    let user = {
        deposit: function(amt){
        balance += amt;
        return balance
      },
        checkBalance: function(){
        return balance;
      },
      withdraw: function(amt){
        if(amt<=balance && amt!="hello"){
            balance = balance - amt;
            return balance;
        }
      }
    }
    return user;
}

let detail = BankServices();
console.log(detail.checkBalance())
console.log(detail.withdraw(300))
console.log(detail.checkBalance())
console.log(detail.deposit(2000))
console.log(detail.checkBalance())
