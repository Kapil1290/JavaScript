const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let a = Number(income.value);
    let tax;
    if(a>1200000  &&  a<1600000){
        a=a-1200000;
        tax = (a/100)*15;
    } else if(a>=1600000){
        a=a-1200000;
        tax = (a/100)*20;
    } else{
        tax ="No Tax";
    }
    document.getElementById("res").textContent = `Total Tax: ${tax}%`;
    form.reset()
})