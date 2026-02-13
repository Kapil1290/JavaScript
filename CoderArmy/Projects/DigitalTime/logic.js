
setInterval(()=>{
    let time = new Date();
    const a = time.toLocaleTimeString()
    console.log(time.toLocaleTimeString())
    const div = document.getElementById("time");
    div.textContent = a;
},1000)