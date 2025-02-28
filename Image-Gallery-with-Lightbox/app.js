const lightBox = document.getElementById("lightBox")
const lightBoxImg = document.getElementById("lightBoxImg")
const closeBtn = document.querySelector(".close");

function openLightbox(event){
  lightBox.style.display = 'flex';
  lightBox.classList.add("show")
  lightBoxImg.src = event.target.src;
}

function closeLightBox(){
  lightBox.style.display = "none";
  lightBox.classList.remove("show")
}

const gellaryImage =  document.querySelectorAll(".gellary img")
gellaryImage.forEach( img => {
  img.addEventListener("click" , openLightbox)
});

lightBox.addEventListener("click" , (event)=>{
 if(event.target !== lightBox){
  closeLightBox()
}
 closeLightBox()
})

closeBtn.addEventListener("click" , closeLightBox);