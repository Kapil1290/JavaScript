const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let a = Number(income.value);
    let tax;
    if(a<=1200000){
        tax = "No Tax Hurahhhh...";
    } else if(a<=1600000){
        tax = (a-1200000)*0.15;
    } else if(a<=2000000){
        tax = (a-1600000)*0.20 + 60000;
    } else if(a<=2400000){
        tax = (a-2000000)*.25 + 60000 + 80000;
    }
    document.getElementById("res").textContent = `Total Tax: ${tax}%`;
    form.reset()
})