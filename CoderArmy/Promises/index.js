console.log("Starting......");

const p1 = fetch("https://api.github.com/users");


// fullfilled or reject

const p2 = p1.then((res)=>{
    return res.json();
})

p2.then((res)=>{
    console.log(res[0].login);
    
})




//promises chaining

// fetch("https://api.github.com/users").then((res)=>{
//     if(!res.ok){
//         const div = document.getElementById("first");
//         div.textContent = "Data not present on server"
//     }
//     return res.json();
// })
// .then((res)=>{
// console.log(res)

//     const div = document.getElementById("first");
//     for(let i=0; i<res.length; i++){
//     const img = document.createElement("img");
//     const h3 = document.createElement('span')
//     img.src = res[i].avatar_url;
//     img.style.width = "190px"
//     img.style.height = "150px"
    
//     div.append(img)
//     h3.append(res[i].login)
//     }
    
// })
// .catch((err)=>{
//     const div = document.getElementById("first");
//     div.textContent = err.message;
// })


// console.log("End....")



// convert javascript Object to 

// const a1 = {
//     name:"kapil",
//     age:23,
//     add:"indore",
//     c: null
// }

const jsonData = JSON.stringify(a1)
console.log(jsonData)

// JSON---OR---JSON to Object

const jsFormat = `{"name":"kapil","age":23,"add":"indore"}`;

const jsObject = JSON.parse(jsFormat)
console.log(jsObject)
    





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

// const callback = ()=>{
//     deliveryOrder(orderDetails);
// }


// paymentOrder(orderDetails)
// preparingOrder(orderDetails)
// pickOrder(orderDetails);
// deliveryOrder()

// paymentOrder(orderDetails)
// .then((orderDetails)=>preparingOrder(orderDetails))
// .then((orderDetails)=>pickOrder(orderDetails))
// .then((orderDetails)=>deliveryOrder(orderDetails))
// .then((orderDetails)=>{
//     console.log(orderDetails);
// })
// .catch((err)=>{
//     console.log(`Error: ${err}`)
// })