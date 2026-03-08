//Array in Js

let marks = [100,20,33,49,28,49]
// console.log(marks[1])
// console.log(marks)
// console.log(marks.length)


// let arr = [12,22,33,22,1,12]
// arr[1] = "kapiil"
// console.log(arr)


//push
// arr.push("Naman")  //at last
// arr.push(23)
// arr.unshift("Hustle")  //at beginning

// //pop
// arr.pop()  //at last
// arr.shift()  //at beginning
// console.log(arr)

// Traverse
// let num = [23,11,24,55]

// Method first--
// for(let i=0; i<num.length; i++){
//     console.log(num[i])
// }
// console.log("------------")

// Method Second--
// for(let vals of num){
//     console.log(vals)
// }


let val1 = marks;    //  marks is array and we are assigning
val1[0] = "Hello Guys"
// console.log(marks)
// console.log(val1)    //both same because they refer same reference in memory

const numArr = [12,22,32,12,43]  // In const array, we can change the values or push new element but can't asign new arraay
numArr[2] = 11
// console.log(numArr.slice(2,4)) // no change in original array

numArr.splice(1,1,"kapil",18) //it affect the original array / first para-->from which index and sec. para-->how many elements and next para for insert this 
// console.log(numArr)


const arr1 = [12,44,54,32,54]
const arr2 = ["kapil",23,33]
const arr4 = ["naman",34,false]
// arr1.push(arr2)
// arr1.push(arr4)
// console.log(arr1)  // it create array inside array

// const arr3 = arr1.concat(arr2)  // add two arrays
// console.log(arr3)

//spread operator
const arr3 = [...arr1,...arr2,...arr4]  // it spread and show/we can merge two arrays
// console.log(arr3)

// const names = ["Alice","Bob","Carni","Carni", "Shraddha", "Rohit", "alina"]
// console.log(names.toString())  // Array convert to whole string 
// console.log(names.join(" # "))

// let a = "kapil"
// console.log(a.indexOf("m"))
// console.log(names.indexOf("Carni"))
// console.log(names.lastIndexOf("Bob"))
// console.log(names.sort())  //work on actual array and use ASCII values for arrangements
// console.log(names.reverse()) // reverse the array work on actual array

const a=[23,22,101,3022,10,0]  // sort() treats like string (" ") on the basis of ASCII
// a.sort();
// console.log(a.reverse())

a.sort((a,b)=>b-a)  // To aarange in increasing order

// -ve: pehle a aayega fr b aayega
// +ve: pehle b aayega fr a aayega
// a.sort((a,b)=>b-a)
//console.log(a)


const b = [23,22,54,[32,12,[34,[84,90,48],55],11],90,34,54,[34,54,65,55]]  // index at arrays


// console.log(b[3][1])
// console.log(b[3][3])
// console.log(b[7][2])


let newX = b.flat(2)  //this method de-bracketize the values and open by flat parameter like 0,1,2....infinity
console.log(newX)
