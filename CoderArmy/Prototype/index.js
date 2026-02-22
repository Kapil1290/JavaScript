//prototype and classes

const obj = {
    name: "Kapil",
    greet: function(){
        console.log("Hello Ji");
    }
}

// console.log(obj.name);

// console.log(obj.greet())
// console.log(obj.hasOwnProperty("name"))

console.log(obj.toString())


const obj1 = {
    account:23,
    // name:"Tarun"
}

obj1.__proto__=obj;

console.log(obj1.name)
console.log(obj1.hasOwnProperty("name"))