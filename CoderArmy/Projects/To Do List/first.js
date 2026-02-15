const form = document.querySelector("form");
const input = document.querySelector('input');
const task = document.getElementById("task");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
  const val = input.value;
  task.append(val+" \n");
    form.reset()
})