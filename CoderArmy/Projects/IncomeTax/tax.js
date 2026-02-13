const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let a = Number(income.value);
    let tax;
    if(a<=1200000){
        tax = "No Tax Hurahhhh...";
    } else if(a<=1600000){
        tax = (a-1600000) 
    }
    document.getElementById("res").textContent = `Total Tax: ${tax}%`;
    form.reset()
})