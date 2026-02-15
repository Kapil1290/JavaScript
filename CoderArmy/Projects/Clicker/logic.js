const body = document.querySelector('body');

body.addEventListener('click',(e)=>{
    console.log(e.clientX , e.clientY);

    const createElement = document.createElement("div");
    createElement.classList.add('circle');
    let color = ['red', 'blue', 'yellow', 'pink', 'purple', 'aqua', 'brown'];
    createElement.style.backgroundColor = color[Math.floor(Math.random()*6)];

    createElement.style.top = `${e.clientY}`;
    createElement.style.left = `${e.clientX}`;
})