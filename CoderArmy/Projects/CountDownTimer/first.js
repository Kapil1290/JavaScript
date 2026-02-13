const currentTime = Date.now();
//for current time 
// console.log(currentTime)
//olympic time 
const olympicTime = new Date(2028,6,23).getTime();
const remainTime = olympicTime-currentTime;
let day = (remainTime)/(1000*60*60*24)
