console.log("Starting......");

const p1 = fetch("https://api.github.com/users");


// fullfilled or reject

const p2 = p1.then((res)=>{
    return res.json();
})

p2.then((res)=>{
    console.log(res);
})

console.log("End....")