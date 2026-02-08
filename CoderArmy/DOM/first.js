const newEle = document.createElement("h1");
console.log(newEle)
newEle.textContent = "This is Strike!!";
newEle.style.color = "white"
//select element
const ele = document.getElementById("first")
 ele.after(newEle)
console.log(newEle)

const newEle2 = document.createElement("h2");
newEle2.textContent = "Time for action";
newEle2.style.color="white"
newEle2.style.fontSize = "30px"
newEle2.id = "third";
// newEle2.className = "hello"
newEle2.setAttribute("name","kapil")
// newEle2.setAttribute("second")
newEle.after(newEle2)


// const main = document.getElementById("first")
// newEle2.style.backgroundColor = "brown"
// main.before(newEle2);
// console.log(newEle2.getAttribute("name"))



// // before and after has clear..

// const list = document.createElement("li")
// list.textContent = "Milk";
// list.style.color ="white";
// list.style.fontSize = "30px"
// const list1 = document.createElement("li")
// list1.textContent = "Cake";
// list1.style.color ="white";
// list1.style.fontSize = "30px"
// const list2 = document.createElement("li")
// list2.textContent = "Halwa";
// list2.style.color ="white";
// list2.style.fontSize = "30px"
// const list3 = document.createElement("li")
// list3.textContent = "Panir";
// list3.style.color ="white";
// list3.style.fontSize = "30px"
// const unorderElement = document.getElementById("listing")
// unorderElement.append(list,list1);
// unorderElement.prepend(list2)  // prepend for insert at first position
// unorderElement.prepend(list3)

//<after which> .after <which will come>
// list.after(list3)

// const li2 = unorderElement.children[1]
// li2.before(list3)



const arr = ["Halwa","Panir","Milk","Test"]
const unorderElement = document.getElementById("listing")
const fragment = document.createDocumentFragment()

const arr1 = [];
for(let val of arr){
const ulList = document.createElement("li")
ulList.textContent = val;
arr1.push(ulList)
}
// unorderElement.append(fragment)
// but how we can do without fragment, with array
for(let val of arr1){
    unorderElement.append(val)
}
console.log(unorderElement)


const s1 = document.getElementById("first")
s1.remove();

newEle.remove()