const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let a = Number(income.value);
    let tax;
    if(a<=1200000){
        tax ="No Tax";
    }else if(a>=1200000  &&  a<1600000){
        a=a-1200000;
        tax = (a/100)*15;
    } else if(a>=1600000 && a<2000000){
        a=a-1200000;
        tax = (a/100)*20;
    } else if(a>=2000000 && a<2400000){
        a=a-1200000
        tax = (a/100)*25;
    }else{
        a=a-1200000
        tax = (a/100)*30;
    }
    document.getElementById("res").textContent = `Total Tax: ${tax}%`;
    form.reset()
})