const body = document.querySelector('body');

body.addEventListener('click',(e)=>{

    const createElement = document.createElement("div");
    createElement.classList.add('circle');
    let color = ['red', 'blue', 'yellow', 'pink', 'purple', 'aqua', 'brown'];
    createElement.style.backgroundColor = color[Math.floor(Math.random()*6)];
    createElement.textContent = "Hii";
    createElement.style.left = `${e.clientX-25}px`;
    createElement.style.top = `${e.clientY-25}px`;
    body.append(createElement);
})