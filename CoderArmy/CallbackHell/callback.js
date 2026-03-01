//zomato app 

const orderDetails ={
    customer_name: "Kapil",
    customer_loc: "NewYork Sage Indore",
    cost: 350,
    orderId: 12131,
    food: ["Pizza","coke","Burger"],
    restorant_loc: "LIG indore"
};

function paymentOrder(orderDetails, callback){
    console.log("Payment is in process");
    setTimeout(()=>{
        console.log(`${orderDetails.cost}Rs Payment has received and order placed`);
        callback(orderDetails);
    }, 4000)
    
}

function preparingOrder(orderDetails,callback){
    console.log("Order is preparing");
    setTimeout(() => {
        console.log("Order has prepared");
        orderDetails.preparing_status = true;
        callback(orderDetails)
    }, 3000);
}

function pickOrder(orderDetails, callback){
    console.log(`Delivery boy is on the way to pick the order from ${orderDetails.restorant_loc}`)
    setTimeout(() => {
        console.log("Order has picked by delivery boy");
        orderDetails.fetch_delivery_from_resto = true;
        callback();
    }, 2000);
}

function deliveryOrder(orderDetails,callback){
    console.log("Order has dispatched");
    setTimeout(() => {
        console.log("order successfully arrived")
    }, 2000);
}

// const callback = ()=>{
//     deliveryOrder(orderDetails);
// }

// paymentOrder(orderDetails,(orderDetails)=>{
//     preparingOrder(orderDetails,(orderDetails)=>{
//         pickOrder(orderDetails,()=>{                  // we are passing function 
//             deliveryOrder();                // callback inside function
//         })
//     });
// });


paymentOrder(orderDetails,(orderDetails)=>{
    preparingOrder(orderDetails,(orderDetails)=>{
        pickOrder(orderDetails,(orderDetails)=>{
            deliveryOrder(orderDetails,(orderDetails)=>{
                console.log(orderDetails);
            })
        })
    })
})