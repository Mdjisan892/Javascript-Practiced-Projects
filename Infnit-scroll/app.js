const postsContainer = document.getElementById("posts-container");
const loader = document.querySelector(".loader"); 
const filter = document.getElementById("filter");

let limit = 5; 
let page = 1;

async function getPosts() {
   const res =  await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);

   const data = await res.json();
   return data
}

const showPost = async()=>{
  const posts = await getPosts();

  posts.forEach( post  => {
      const div = document.createElement("div");
      div.className = "post";
      
      div.innerHTML = `
        <div class="number">${post.id}</div>
         <div class="post-info">
          <h2 class="post-title">${post.title}</h2>
          <p class="post-body">${post.body}</p>
         </div>
      `;
     postsContainer.appendChild(div)
  });
}

function showLoading(){
  loader.classList.add("show");

  setTimeout(()=>{
    loader.classList.remove("show");
    setTimeout(()=>{
     page++
     showPost()
    },300)
  },1000)
}
// infini scroll function
window.addEventListener("scroll" , ()=>{
  const {scrollTop, scrollHeight, clientHeight} = document.documentElement ;

  if(scrollTop + clientHeight >= scrollHeight){
    showLoading()
  }
})

showPost()