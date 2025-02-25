const parentDiv = document.getElementById("cardSection");

let cardsArray = [
    {"name":"first" ,   "img" : "/image/first.png"},
    {"name":"tree" ,   "img" : "/image/tree.png"},
    {"name":"greenroad","img" : "/image/greenroad.png"},
    {"name":"glider",   "img" : "/image/hand.png"},
    {"name":"flower",   "img" : "/image/flower.png"},
    {"name":"plantTop", "img" : "/image/planttop.png"},
];

//step 2 multiple the array of image
const gameCart = cardsArray.concat(cardsArray) ;

//step 3
let suffleThings = Array.from(gameCart).sort( () => 0.5 - Math.random())

//step 5 
let counter = 0;
let firstCard = "";
let secondCard = "";

// step 6 stylingThe Match card
const card_matches = () =>{
    try {
        let card_selected  = document.querySelectorAll(".card_selected");
    card_selected.forEach( card =>{
        card.classList.add("card_match");
    })
    } catch (error) {
        console.log("error here no 6" , error.message)
    }
}

//step 4 select child div and add classList 
parentDiv.addEventListener("click" , (e) =>{
   try {
    let curCard = e.target;
    counter++
    if(curCard.id === "cardSection"){return false}

    if(counter < 3){
        if(counter === 1){
          firstCard = curCard.parentNode.dataset.name;
          curCard.parentNode.classList.add("card_selected");
        }else{
            secondCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add("card_selected");
        }
    }
    
  if(firstCard !== "" && secondCard !== ""){
    if(firstCard === secondCard){
       setTimeout(()=>{
        card_matches()
        resetGame()
       }, 1000)
    }else{
       setTimeout(()=>  resetGame() , 1000)
    }
  }
   } catch (error) {
     console.log("Error Occord here No 4" , error.message)
   }
 
})

// Step 1 
for (let i = 0; i < suffleThings.length; i++) {

     const childDiv = document.createElement("div");
      childDiv.classList.add("card");
      childDiv.dataset.name = suffleThings[i].name;
    //   childDiv.style.backgroundImage = `url(${suffleThings[i].img})`;
     

      const frontDiv = document.createElement("div");
      frontDiv.classList.add("front_card")

      const backDiv = document.createElement("div");
      backDiv.classList.add("back_card");
      backDiv.style.backgroundImage = `url(${suffleThings[i].img})`;
      

      parentDiv.appendChild(childDiv);
      childDiv.appendChild(frontDiv)
      childDiv.appendChild(backDiv)
}

// step 7 
const resetGame = () =>{
    try {
     counter = 0;
     firstCard = "";
     secondCard = "";

    let card_selected  = document.querySelectorAll(".card_selected");
    card_selected.forEach( card =>{
        card.classList.remove("card_selected");
    })
    } catch (error) {
        console.log("Error occurd here no 7" , error.message)
    }
}
