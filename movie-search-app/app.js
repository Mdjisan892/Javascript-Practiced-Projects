const searchInput = document.getElementById("searchInput");
const main  = document.querySelector("main");
const form = document.querySelector("form");

const apiKey = "05fcaf777987468fc14e34b26e9cec64";
const baseUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" + apiKey;
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=05fcaf777987468fc14e34b26e9cec64&query=";

showMovies(baseUrl)

function showMovies(url){
    fetch(url)
    .then(res => res.json())
    .then(data => data.results.forEach( movie => {
        const {title , poster_path} = movie
        const div = document.createElement("div");
        const img = document.createElement("img");
        const txt = document.createElement("h2")
        
       txt.innerHTML = `${title}`;
       img.src = IMGPATH + poster_path
       div.appendChild(img);
       div.appendChild(txt)
       main.appendChild(div)
    }))
}

form.addEventListener("submit" , (e)=>{
  e.preventDefault();
  main.innerHTML = ""
  const searchValue = searchInput.value;

  if(searchValue){
    showMovies(SEARCHAPI + searchValue);
    searchInput.value = ""
  }
})