const counterSum = document.getElementById("counter")
const increaseBtn = document.getElementById("increase")
const decreaseBtn = document.getElementById("decrease")
const resetBtn = document.getElementById("reset");

counterSum.innerText = 0

let counter = 0

const repeatElement = (value) =>{
  counter = counter + value ;
  counterSum.textContent = counter;
 
  // Increase Button
  if(counter >= 10){
    increaseBtn.setAttribute("disabled" , true)
    counterSum.className = "p"
  }else{
    increaseBtn.removeAttribute("disabled" , false)
    counterSum.className = ""
  }
  
   // Decrease Button
  if(counter <= 0){
   decreaseBtn.setAttribute("disabled" , true)
  }else{
    decreaseBtn.removeAttribute("disabled" , false)
  }

   //Reset 
   resetBtn.addEventListener("click" , ()=>{
    counter = 0;
    counterSum.textContent = counter;
    increaseBtn.removeAttribute("disabled" , false);
    decreaseBtn.removeAttribute("disabled" , false);
  })
}

increaseBtn.addEventListener("click" , ()=>{
    repeatElement(1)
});

decreaseBtn.addEventListener("click" , () =>{
  repeatElement(-1)
});