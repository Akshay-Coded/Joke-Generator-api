const jokeContent = document.getElementById("joke");
const jokeGenButton = document.getElementsByClassName("joke-generator");
const apiURL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist&type=single";

function generateJoke(){
    jokeContent.classList.remove("fade");
    fetch(apiURL)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.joke);
            jokeContent.textContent = data.joke;
            jokeContent.classList.add("fade");
          });
          
    
}