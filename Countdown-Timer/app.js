const numberInput = document.getElementById("numberInput");
const saveInput  = document.getElementById("saveInput");
const submitBtn  = document.getElementById("submitBtn");
let startTime ;
let interval ;
const maxSeconds = 60;

function reversTime(){
  const now = new Date();
  const elapsedTime = Math.floor((now - startTime) / 1000);
  let remainingSeconds = maxSeconds - (elapsedTime % (maxSeconds + 1));

  
  if(remainingSeconds == 0){
    if(numberInput.value > 0){
      numberInput.value--
    }
  }

  ubdateDisplay(numberInput.value , remainingSeconds);

  if(numberInput.value <= 0 && remainingSeconds <= 0){ 
    clearInterval(interval)
    ubdateDisplay(0,0)
    numberInput.style.visibility = "visible";
    submitBtn.style.visibility = "visible";
    return
  }

};

function ubdateDisplay(minut , second){
 saveInput.innerText = `${minut} : ${second <10 ? "0" : ''}${second}`;
 numberInput.style.visibility = "hidden";
 submitBtn.style.visibility = "hidden";
}

function mainTime(){
  startTime = new Date();
  interval = setInterval(()=>{
    reversTime()
  },1000)
};

submitBtn.addEventListener("click" , () =>{
  mainTime()
})