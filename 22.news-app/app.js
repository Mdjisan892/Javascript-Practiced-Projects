const searchInput = document.getElementById("searchInput");
const main = document.querySelector("main"); 
const form = document.querySelector("form");
const loader = document.querySelector(".loader")

const API_KEY = "2ea5a7ee8ac245419a569ec18fba243c"
let limit = 5;
let page = 1 ;

function searchNews (query = ''){
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&q=${query}&pageSize=${limit}&page=${page}`;

    fetch(url)
    .then(res => res.json())
    .then(datas => {
        datas.articles.forEach( data => {
            const {title , url, urlToImage} = data;

            const div = document.createElement("div");
            div.className = "posts"
            const img = document.createElement("img");
            const h4 = document.createElement("h4");
            const btn = document.createElement("button");
            btn.classList.add("btn")

            img.src = urlToImage;
            h4.innerText = title;
            btn.innerText = "Click For Info"
            btn.addEventListener("click" , ()=>{
             window.location.href = url
            })
            div.appendChild(img)
            div.appendChild(h4)
            div.appendChild(btn)
            main.appendChild(div)
        })
    })
}

function showLoader(){
    loader.classList.add("show");

    setTimeout(()=>{
     loader.classList.remove("show");
     setTimeout(()=>{
      page++
      searchNews()
     },300)
    },1000)
}

window.addEventListener("scroll" , ()=>{
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    
    if(scrollTop + clientHeight >= scrollHeight){
     showLoader()
    }
})

searchNews()

form.addEventListener("submit" , (e) =>{
    e.preventDefault()
    const inputValue = searchInput.value.trim();

    if(inputValue){
        searchNews(inputValue)
        searchInput.value = ""
    }
})