// function handleClick(){
//     const head = document.getElementById("head")
//     head.textContent = "Hello Coders!!!!!!!"
// }

const a = document.getElementById("head")
// a.onclick = function handleClick(){
//     a.textContent = "Hello Programmer!!!...""
// }

// // below will override the method and below will accept
// a.onclick = function handleClick(){
//     a.textContent = "I am coming..."
// }


// a.addEventListener('mouseenter',()=>{
//     a.style.backgroundColor = "pink"
//     a.style.fontSize = "50px"
// })

// a.addEventListener('mouseleave',()=>{
//     a.style.backgroundColor = "purple"
//     a.style.fontSize = "20px"
// })



// a.addEventListener('mouseenter',()=>{
//     a.style.backgroundColor = "yellow"
// })

// a.addEventListener('dblclick',()=>{
//     a.style.color = "green"
// })

// a.addEventListener('click',()=>{
//     a.textContent = "Hello Guys>>>>>"
//     a.style.color = "green"
// })

// const b1 = document.getElementById("child1")
// const b2 = document.getElementById("child2")
// const b3 = document.getElementById("child3")
// const b4 = document.getElementById("child4")
// const b5 = document.getElementById("child5")


// b1.addEventListener('mouseenter',()=>{
//     b1.textContent = "I am clicked"
// })

// b2.addEventListener('mouseenter',()=>{
//     b2.textContent = "I am clicked"
// })

// b3.addEventListener('mouseenter',()=>{
//     b3.textContent = "I am clicked"
// })

// b4.addEventListener('mouseenter',()=>{
//     b4.textContent = "I am clicked"
// })

// b5.addEventListener('mouseenter',()=>{
//     b5.textContent = "I am clicked"
// })



// const parent = document.getElementById("parent")
// console.log(parent.children)

// for(let child of parent.children){
//     child.addEventListener('click',()=>{
//         child.textContent = "I am clicked"
//     })
// }


// BUBBLING IN JS

// const grandparent = document.getElementById("grandparent")
// grandparent.addEventListener('click',(e)=>{
//     console.log(e.target)
//     e.stopPropagation();   // used to stop bubbling
//     // console.log("grandparent is click")
// })





const parent= document.getElementById("parent")

// to remove the event listener

function handleEvent(e){
    e.target.textContent = "I am clicked";
    parent.removeEventListener('click',handleEvent)
}


// show which box have clicked 

parent.addEventListener('click',(e)=>{     // cover all child to show clickness
    e.target.textContent = "I am clicked"    
    console.log(e.target)
})

parent.addEventListener('click',handleEvent)




// const parent = document.getElementById("parent")
// parent.addEventListener('click',(e)=>{
//     // console.log(e)
//     // e.stopPropagation();
//     // console.log("parent is clicked")
// })

// const child = document.getElementById("child")
// child.addEventListener('click',(e)=>{
//     // console.log(e)
//     // e.stopPropagation();
//     // console.log("child is clicked")
// })

// if capture face is on: Top to Down
// otherwise : Down to Top (Bubbling Face)
