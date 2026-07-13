
let arr = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtUhvSR6JUYJRm1gMmcUK5FN3RVZduj2p5hUq83zyIoH2PawMuPHAD6rI&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH4xpFKZ_0lwPHkcWrjyEp6Llf7T9Tzd5Smr76Mso0xlA0PN8nFVczyOtX&s=10",
    "https://www.tallengestore.com/cdn/shop/products/Midway_2019_-_Hollywood_War_WW2_Original_Movie_Poster_560cd581-c16f-46e2-a498-b9c61f2fb676.jpg?v=1582782930",
    "https://static5.businessinsider.com/image/525041676bb3f72b5fb018d9-1200-706/gravity-detached.jpg"
]

let container = document.getElementById("container")

let index = 0
let movies = document.createElement("img")

function handleImage(){
    
    movies.setAttribute("src",arr[index])
    container.appendChild(movies)
    index++

    if(index>=arr.length){
        index=0
    }

}
setInterval(handleImage,2000)








