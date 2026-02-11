const a = document.getElementById("parent")

for(let child of a.children){
    child.addEventListener('click',()=>{
        document.body.style.backgroundColor=child.style.backgroundColor;
    })
}