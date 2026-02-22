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
}

// obj1.__proto__=obj;

const obj2 = Object.create(obj1)

console.log(obj2.name)
// const a = obj1.hasOwnProperty("name")
// console.log(a)



class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayhi(){
        console.log(`Hello ${this.name}` )
    }

}

const person1 = new person("Kapil",20)

// const fun =  person1.sayhi()
// console.log(fun)

console.log(person1)


class customer extends person{
    constructor(name,age,account,balance){
        super(name,age);
        this.account = account;
        this.balance = balance;
    }

    checkBalance(){
        return this.balance;
    }
}


const cust1 = new customer("kapil",20,123,2000)

const bal = cust1.checkBalance();
console.log(bal)