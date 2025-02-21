const slides = document.querySelectorAll(".slide");
let counter = 0


slides.forEach((slide , index)=>{
 slide.style.top = `${index * 100}%`
});

const goPrev = () =>{
  counter--
  slideImage()
  document.getElementById("btnNext").removeAttribute("disabled" , false)
}

const goNext = () =>{
  counter++
  slideImage()
  if(counter >= 3){
    document.getElementById("btnNext").setAttribute("disabled" , true)
  }
}

const slideImage =() =>{
  slides.forEach((slide)=>{
   slide.style.transform = `translateY(-${counter * 100}%)`;
  })
}
