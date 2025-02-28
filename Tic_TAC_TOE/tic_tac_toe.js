//step [ 1 ] 
const boxes = document.querySelectorAll(".box"); 
const resetBtn = document.getElementById("resetBtn");
const new_Btn = document.getElementById("new_Btn");
const msg_content = document.querySelector(".msg_content");
const msg = document.querySelector(".msg");

//step[ 2 ]
let turn = true ;
let gameOver = false ;

const winPattern = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
  ];

boxes.forEach( box=>{
  box.addEventListener("click" , ()=>{
    if(turn){
     box.textContent = "X";
     box.classList.add("x");
     box.disabled = false;
     turn = false ;
     checkWinner()
     
     
     if(!gameOver){
          ai()
      }
    }
  })
});

function ai(){
  if(gameOver) return

  let emptyBox = [];
  for (const box of boxes) {
   if(box.innerHTML === ''){
    emptyBox.push(box)
   }
  }
  if(emptyBox.length > 0 && !gameOver){
   const randomBox = emptyBox[Math.floor(Math.random() * emptyBox.length)];
   randomBox.textContent = "O";
   randomBox.classList.add("o");
   turn = true ;  
   checkWinner()
  }
}

function showWinner (winner){
 msg_content.textContent = `Winner is ${winner}`;
 msg_content.classList.remove("hide");
 gameOver = true ;
 boxDisabled();
};

function checkWinner (){
 for (const pattern of winPattern) {
   const pos1 = boxes[pattern[0]].innerHTML;
   const pos2 = boxes[pattern[1]].innerHTML;
   const pos3 = boxes[pattern[2]].innerHTML;
   console.log(pos1 , pos2 , pos3);
   if(pos1 !== "" && pos2 !== "" && pos3 !== ""){
    if(pos1 === pos2 &&  pos2 === pos3){
     showWinner(pos1);
     resetAfterDelay()
    }
   }
   const isDraw = [...boxes].every(box => box.innerHTML !== "");
   if(isDraw){
    msg_content.classList.remove("hide");
    msg_content.textContent = "The Match is Draw";
    setTimeout(() => alert("THe game will re-start after 10 second") , 2000)
    setTimeout(() => boxEnable() , 10000);
    gameOver = true ;
    boxDisabled()
   }
  };
 }

function boxEnable (){
  boxes.forEach(box =>{
    box.innerHTML = "";
    box.disabled = false ;
    box.classList.remove("x","o")
  })
  gameOver = false;
  turn = true;
  msg_content.classList.add("hide");
}
function boxDisabled (){
  boxes.forEach(box =>{
    box.disabled = true ;
  })
};

function resetAfterDelay(){
  setTimeout(() => {
    boxEnable() 
    msg_content.classList.add("hide");
    gameOver = false;
  }, 5000);
};

resetBtn.addEventListener("click" , boxEnable)
new_Btn.addEventListener("click" , boxEnable)