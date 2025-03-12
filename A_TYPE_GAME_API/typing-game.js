const timer = document.getElementById("timer");
const textInput = document.getElementById("textInput");
const textOutput = document.getElementById("textOutput");
const btn = document.getElementById("btn");
const API_URL = 'http://api.quotable.io/random';
const p1 = document.getElementById("p1")

textOutput.addEventListener('input' , () => {
 try{
  const arrayd = document.querySelectorAll('span');
  const arraySplit = textOutput.value.split('');
  let correct = true;

  arrayd.forEach((charecterIndex , index)=>{
   const arrayValue = arraySplit[index];
   
   if(arrayValue == null){
    charecterIndex.classList.remove("correct");
    charecterIndex.classList.remove('incorrect');
    correct = true
   }
   else if(arrayValue === charecterIndex.innerText){
    charecterIndex.classList.add("correct");
    charecterIndex.classList.remove("incorrect");
   }
   else{
    charecterIndex.classList.remove("correct");
    charecterIndex.classList.add("incorrect")
    correct = false
   }
  })
  
  if(correct) randerApi()
 }
 catch(e){console.error("The Error is --->" , e.message)}
});


function fetchApi(){
    return  fetch(API_URL)
           .then(response => response.json())
           .then(data => data.content)
};

async function randerApi(){
  try{
    let quot = await fetchApi()
    textInput.innerText  = quot ;
    textInput.innerHTML  = '';

   quot.split('').forEach(charecter => {
     const spanTag = document.createElement("span");
     spanTag.innerText = charecter;
     textInput.appendChild(spanTag)
   })
   textOutput.value = null;
   getTime()
  }
  catch(e){console.error("the error is" , e.message)}
};

let setTime ;
function getTime(){
  timer.innerText = 0 ;
  setTime = new Date();
  setInterval(()=>{
  timer.innerHTML = getAcurateTime()
  },1000)
}
function getAcurateTime(){
  return Math.floor((new Date() - setTime) / 1000)
}
randerApi()