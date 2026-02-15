const body = document.querySelector('body');

body.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(e.clientX,e.clientY);
})