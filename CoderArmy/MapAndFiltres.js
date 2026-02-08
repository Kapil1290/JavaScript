// ForEach, filter, reducer, map, set

// const arr = [10,20,30,40,39,23];
// let sum = 0;
// arr.forEach((num)=>{   // number parameter is mandatory
//     sum+=num;
// })
// console.log(sum)


// const arr = [10,20,30,40,39,23];
// const val = arr.filter((num)=>num>20 && num<30)     //filter takes callback function and it returns new array
// // console.log(val)

// // const compare = (num) => num>20;

// Array.prototype.filtered = function(compare){       // Only for arr named array but if we write Array.prototype.filtered
//     let newArr = [];
//     for(let val of this){
//         if(compare(val)){
//             newArr.push(val)
//         }
//     }
//     return newArr;
// }

// const newArray = arr.filtered((num)=>num>20)
// console.log(newArray);


// const arrr=[34,2,3,21,23,90]
// console.log(arrr.filtered((num)=>num>10))


// const arr1=[34,2,3,21,23,90]

// const newarr = arr1.map((num)=>num*3)
// console.log(newarr)



const products = [
  {id:1, name:"Mouse", category:"Electronics", price:120, instock:true},
  {id:2, name:"Headphone", category:"Electronics", price:2300, instock:false},
  {id:3, name:"VivoPhone", category:"Electronics", price:23000, instock:true},
  {id:4, name:"iphone", category:"Electronics", price:150000, instock:false},
  {id:5, name:"VivoPhone", category:"Electronics", price:12000, instock:true},
  {id:6, name:"Mouse", category:"Electronics", price:700, instock:true},
  {id:7, name:"IntelProcessor", category:"Electronics", price:5500, instock:true},
  {id:8, name:"CPUbox", category:"Electronics", price:2300, instock:true},
  {id:9, name:"Ram128", category:"Electronics", price:2300, instock:false},
  {id:10, name:"SSD", category:"Electronics", price:2300, instock:true},
];


// Chaining of the methods of map, sort, and filter

// const newProduct = products.filter((products)=>products.price>300).sort((a,b)=>b.price-a.price)
// const newProduct = products.filter((products)=>products.price>300).sort((a,b)=>b.price-a.price).map((products)=>({name:products.name, price:products.price, Stock:products.inStock}))

// Map select few keys from the whole object----
// const ans = products.map((products, idx, list)=>({name:products.name, price:products.price, Stock:products.inStock}))
// console.log(ans)
// console.log(newProduct)

const newProducts = products.filter((products)=>products.price>500&&products.instock==true).map((products)=>({name:products.name, price:products.price, stock:products.instock}))
console.log(newProducts)


// Reducer
// const total = products.reduce((accumulator, currValue)=>{                      // iterate on the array and count the product basis of any object's key and it shows number values
//     if(currValue.inStock){
//         return accumulator + currValue.price        // it add to accumulator
//     }else{
//         return accumulator;
//     }
// },0)    

// console.log(total)



// Set

// let arr2 = [23,21,45,44,23,21,44,21]
// console.log(arr2)

// const s1 = new Set(arr2)
// s1.add(33)
// console.log(s1.has(34))
// s1.delete(21)

// s1.clear();
// console.log(s1.size)
// console.log(s1)


// const email = ["ro@gm","ro@gm", "gs@gm", "ty@gm"]
// const unique = new Set(email);
// console.log(unique)
// // to come back

// const uniqueEmail = [...new Set(email)]
// console.log(uniqueEmail)



// // map
// // key can be object, string, boolean, array or anything

// const m1 = new Map([
//     [1,"kapil"],
//     [true, "helo"],
//     ["hello", 2],
//     [[23,22,22],"Mohit"]
// ]);


// m1.set({name:"manish",age:23},false)
// console.log(m1.has("hello"))
// console.log(m1.size)
// // console.log(m1)

// for(let [key,val] of m1){
//     console.log(`${key}=>${val}`)
// }

