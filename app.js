fetch("https://icanhazdadjoke.com/", {
    headers:{
        Accept: "application/json"
    } 
})
.then(response => response.json())
.then(data => {
    pickRandomImg();
    document.querySelector(".display-joke").innerHTML = data.joke;
    document.querySelector(".display-id").innerHTML = `ID: #${data.id}`;

})

function pickRandomImg(){
    let imgElm = document.createElement("img")
    imgElm.classList.add("display-img")
    
    let imgs = ["1.webp","2.jpg","3.jpg","4.webp","5.png","6.jpg","7.jpeg","8.png","9.png","10.jpg","11.jpg"];
    let randNumb = Math.floor(Math.random()*imgs.length);
    let path = `./assets/${imgs[randNumb]}`;
    imgElm.src = path;

    document.querySelector(".img-container").append(imgElm);
}