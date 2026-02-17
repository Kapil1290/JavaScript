//zomato app 


function paymentOrder(callback){
    console.log("Payment is in process");
    setTimeout(()=>{
        console.log("Payment has received and order placed");
        callback();
    }, 4000)
    
}

function preparingOrder(){
    console.log("Order is preparing");
    setTimeout(() => {
        console.log("Order has prepared");
        
    }, 4000);
}

function deliveryOrder(){
    console.log("Order has dispatched");
    setTimeout(() => {
        console.log("order successfully arrived")
    }, 3000);
}


paymentOrder(()=>{
    preparingOrder();
});