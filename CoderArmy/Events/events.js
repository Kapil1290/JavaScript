// function handleClick(){
//     const head = document.getElementById("head")
//     head.textContent = "Hello Coders!!!!!!!"
// }

const a = document.getElementById("head")
// a.onclick = function handleClick(){
//     a.textContent = "Hello Programmer!!!..."
// }

// // below will override the method and below will accept
// a.onclick = function handleClick(){
//     a.textContent = "I am coming..."
// }

a.addEventListener('dblclick',()=>{
    a.style.background = "pink"
})

a.addEventListener('mouseenter',()=>{
    a.textContent = "Hello Guys>>>>>"
})

a.addEventListener('mouseleave',()=>{
    a.textContent = "Hello Guys>>>>>"
})

a.addEventListener('click',()=>{
    a.textContent = "Hello Guys>>>>>"
    a.style.color = "green"
})