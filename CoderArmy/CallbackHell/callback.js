//zomato app 

const orderDetails ={
    customer_name: "Kapil",
    customer_loc: "NewYork Sage Indore",
    cost: 350,
    orderId: 12131,
    food: ["Pizza","coke","Burger"],
    restorant_loc: "LIG indore"
}

function paymentOrder(orderDetails, callback){
    console.log("Payment is in process");
    setTimeout(()=>{
        console.log(`${orderDetails.cost}Rs Payment has received and order placed`);
        callback(orderDetails);
    }, 4000)
    
}

function preparingOrder(callback){
    console.log("Order is preparing");
    setTimeout(() => {
        console.log("Order has prepared");
        callback()
    }, 3000);
}

function pickOrder(callback){
    console.log("Delivery boy is on the way to pick the order")
    setTimeout(() => {
        console.log("Order has picked by delivery boy");
        callback();
    }, 2000);
}

function deliveryOrder(){
    console.log("Order has dispatched");
    setTimeout(() => {
        console.log("order successfully arrived")
    }, 2000);
}


paymentOrder(orderDetails,(orderDetails)=>{
    preparingOrder(orderDetails,()=>{
        pickOrder(()=>{                  // we are passing function 
            deliveryOrder();                // callback inside function
        })
    });
});