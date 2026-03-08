// Object in Js
// key values
const user = {
    name:"Kapil",   // behind the seen key stores as strings
    "age": 20,
    emailId: "xyz@gmail.com"
}


//CRUD Operation --> CREATE READ UPDATE DELETE

// Create
// user.sec = "A";
// console.log(user)

//Read
// console.log(user["name"])
// console.log(user.emailId)

//Update
// user.aadhar = 2923839;
// user.age = 21

// //Delete
// delete user.aadhar;
// console.log(user)



// console.log(Object.values(user))  // it creates an array and show o/p to u
// console.log(Object.keys(user))  
// console.log(Object.entries(user))  //all very imp


// for(let key in user){        // user return the keys during iteration
//     console.log(key,user[key])
// }

const {name,age} = user;  // de structuring of object and to change var names from keys
const {name:username, age: userAge} = user
// console.log(name, userAge)

const arr = [23,22,5,65,4,5]
const [first,second] = arr
// console.log(first , second)

// console.log(Object.entries(user))


// for-of loop use for the array then we use it with object like this-->
// for(let keys of Object.keys(user)){
//     console.log(keys)
// }



const user1 = {
    name:"Arun",
    age:34,
    amt:1200,
    // greeting: function(){
    // console.log(`Hello from Greeting function ${this.name}`)
    //     return 23;
    // },

    address: {
        city:"Indore",
        pin:452022,
        sector:{
            street:"New rog street",
            no: 34
        }
    }
}

// console.log(user1.address.pin)
// console.log(user1.greeting())

//SHALLOW COPY
const user2 = {...user1};  // it give copy to user2 and they are independent but it is handled by both in 1 and >1 levels object, not nested
// user2.address.sector.street="AB"  // nested object and not independnt

// console.log(user1)

//DEEP COPY

const user3 = structuredClone(user1)
// user3.address.city ="Pune"
console.log(user3)
// console.log(user1.address.city)       // Keep Remember --> structuredCLone() doesn't copy  FUNCTION, METHOD, ARROW FUN. 
// console.log(user3)


