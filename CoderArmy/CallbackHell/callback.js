//zomato app 


function paymentOrder(callback){
    console.log("Payment is in process");
    setTimeout(()=>{
        console.log("Payment has received and order placed");
        callback();
    }, 4000)
    
}

function preparingOrder(callback){
    console.log("Order is preparing");
    setTimeout(() => {
        console.log("Order has prepared");
        callback()
    }, 4000);
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
    }, 3000);
}


paymentOrder(()=>{
    preparingOrder(()=>{
        pickOrder;
    });
});