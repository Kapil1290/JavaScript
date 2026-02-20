// async await
// async always return a promise
async function greet() {
    // return "Kapil";      // wrap-up if you passing normally

    return new Promise((resolve,reject)=>{    // if you are already passing the promise then no need of wrapping
        reject("error")
    })
}

const data = greet()
data
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})

// const res = greet();
// res.then((data)=>{      //res is a promise
//     console.log(data);
// })


async function git(){
    try {
    const response = await fetch("https://api.github.com/users");
    if(!response.ok){         // if url is wrong then response.ok will become false--> true
        throw new Error("Error inside the server")
    }
    const info = await response.json()
    const div = document.getElementById("first")
    for(let i=0; i<info.length; i++){
        const innerdiv = document.createElement('div');
        innerdiv.classList.add("user");
        innerdiv.id = "inner";

        const image = document.createElement('img');
        image.src = info[i].avatar_url;
        
        const name = document.createElement('h2');
        name.textContent = info[i].login;

        const anchor = document.createElement('a');
        anchor.href = info[i].url;
        anchor.textContent = "Visit Profile";

        innerdiv.append(image,name,anchor)

        div.append(innerdiv);
    }
    } catch (error) {
        const err = document.getElementById("err");
        err.append(error)
    }
}

git();





const orderDetails ={
    customer_name: "Kapil",
    customer_loc: "NewYork Sage Indore",
    cost: 350,
    orderId: 12131,
    food: ["Pizza","coke","Burger"],
    restorant_loc: "LIG indore"
};

function paymentOrder(orderDetails){
    console.log("Payment is in process");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(Math.random()>0.9){
            console.log(`${orderDetails.cost}Rs Payment has received and order placed`);
        resolve(orderDetails)
        }else{
            reject("Payment Failed! Try later")
        }
    }, 4000)
    
    })
    
}

function preparingOrder(orderDetails){
    console.log("Order is preparing");
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(Math.random()>0.1){
                console.log("Order has prepared");
        orderDetails.preparing_status = true;
        resolve(orderDetails)
            }else{
                reject("Order not accepted right now")
            }
    }, 3000);
    
    })
}

function pickOrder(orderDetails){
    console.log(`Delivery boy is on the way to pick the order from ${orderDetails.restorant_loc}`)
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(Math.random()>0.3){
                console.log("Order has picked by delivery boy");
        orderDetails.fetch_delivery_from_resto = true;
        resolve(orderDetails)
            }else{
                reject("Deliver failed due to some reason!!!!!!!")
            }
    }, 2000);
    
    })
}

function deliveryOrder(callback){
    console.log("Order has dispatched");
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(Math.random()>0.1){
                console.log("order successfully arrived")
        resolve(orderDetails)
            }else{
                reject("Order not succesfully arrived:)")
            }
    }, 2000);
    
    })
}
