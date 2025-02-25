const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll" , chekBoxes);

function chekBoxes(){
    const innerHeight  = window.innerHeight / 5 * 4;

    boxes.forEach((box)=>{
     const boxTop = box.getBoundingClientRect().top;

     if(boxTop < innerHeight){
       box.classList.add("effect")
     }else{
        box.classList.remove("effect")
     }
    })
}
chekBoxes()