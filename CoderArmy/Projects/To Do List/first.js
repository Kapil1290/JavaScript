const form = document.querySelector("form");
const alltask = document.getElementById("all");
const input = document.querySelector("input");

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  const text = input.value;
  if(text=="")
    return;

  const parent = document.createElement("div");
  parent.style.marginTop = "10px"
  const span = document.createElement('span');
  span.textContent = text;
  span.style.marginRight = "20px";


  const deleteButton = document.createElement('button');
  deleteButton.textContent = "Delete";
  deleteButton.style.width = "60px"

  const doneButton = document.createElement('button');
  doneButton.textContent = "Done";
  doneButton.style.width = "60px";
  doneButton.style.marginRight = "10px"
  doneButton.style.marginLeft = "10px";
  
  parent.append(span,doneButton,deleteButton)
  alltask.append(parent)

  form.reset()
  doneButton.addEventListener('click',(e)=>{
    span.style.textDecoration = "line-through";
    span.style.opacity = "0.6";
  })

  deleteButton.addEventListener('click',(e)=>{
    parent.remove()
  })
})