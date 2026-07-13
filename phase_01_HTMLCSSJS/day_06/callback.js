// function greetMessage(){
//     console.log("Welcome to Chitkara")
//     callback()
    
// }
// function callback(){
//     console.log("Good Morning")
// }

// greetMessage(callback)

function makePayment(callback){ // 1. Accept the variable
    console.log("Payment is getting started.. ")

    setTimeout(function(){
        console.log("Payment is completed")
        callback() // 2. Execute the variable, NOT hardcoded 'packOrder()'
    }, 3000)
}

function packOrder(callback){
    console.log("Order is getting packed")

    setTimeout(function(){
        console.log("Order is Packed")
        callback()
    }, 3000)
}

function deliverOrder(callback){
    console.log("Delivery partner is getting assigned..")

    setTimeout(function(){
        console.log("Order is dispatched")
        callback()
    }, 3000)
}

function openBox(){
    console.log("Sending otp to the user")
    setTimeout(function(){
        console.log("OTP Matched")
    }, 1000) // Added a time delay here for consistency
}

// 3. This cleanly triggers them one after the other in a perfect sequence
makePayment(function(){
    packOrder(function(){
        deliverOrder(function(){
            openBox()
        })
    })
})
