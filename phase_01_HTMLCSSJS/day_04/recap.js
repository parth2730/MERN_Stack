console.log("Start")

let t = document.getElementById("title")

setTimeout(function(){
    t.innerText = "Maa, Mai aagya"
    console.log("Executed after 2 seconds")
},4000)

let counter = 0;
let hCount = document.getElementById("count")
setInterval(function(){
    counter++
hCount.innerText=counter    
},1000)

console.log("end")