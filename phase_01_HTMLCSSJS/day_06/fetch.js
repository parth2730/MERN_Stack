let container=document.getElementById("container")

//api-- interface that connects two systems
// fetch('api',[methods])
let response=fetch("https://dummyjson.com/products")
             .then(function(res){
                return res.json()
                
             }).then(function(data){
                console.log(data.products)
                for(let item of data.products){
                    container.innerHTML+=`
                    <div>
                    <img src="${item.images[0]}" alt="" >
                    <h2>${item.title}</h2>
                    <p>Price:${item.price}</p>
                    <p>Category:${item.category}</p>
                    </div>
                    `

                }
             })
let obj={"id":1,"name":"Tshirt"}