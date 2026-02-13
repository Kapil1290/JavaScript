setInterval(()=>{
    const currentTime = Date.now();
//for current time 
// console.log(currentTime)
//olympic time 
const olympicTime = new Date(2028,6,23).getTime();
let remainTime = olympicTime-currentTime;

const day = Math.floor((remainTime)/(1000*60*60*24))
remainTime%=1000*60*60*24;

let hour = Math.floor((remainTime)/(1000*60*60))
remainTime%=1000*60*60;

let min = Math.floor((remainTime)/(1000*60))
remainTime%=1000*60;

let sec = Math.floor((remainTime)/(1000))
remainTime%=1000;

const timer = document.getElementById("timer");
timer.textContent = `${day}days ${hour}hours ${min}min ${sec}sec`
})
