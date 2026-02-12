const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();   // form's default behaviour which is submit the form to prevent this process
    const boy = document.getElementById("Boy")
    const girl = document.getElementById("Girl")

    const a = boy.value.length;
    const b = girl.value.length;
    const val = Math.pow(a+b,3)%101;
    document.querySelector('h2').textContent = `Result: ${val}%`
    document.querySelector('h2').style.color = "aqua"
    form.reset(); // reseting the form inputs 
})