//(actualTime / totalTimeTaken) * 60
const quoteDisplay = document.getElementById('quoteDisplay');
const Typing_Ground = document.getElementById("quotInput");
const btn = document.getElementById("btn");
const score  = document.getElementById('score');

//step 1 
let startTime , endTime , totalTime ;
 let text = ['The essence of true friendship is to make allowance for anothers little lapses.',
 'A monarchy conducted with infinite wisdom and infinite benevolence is the most perfect of all possible governments.',
 'No one can make you feel inferior without your consent ',
 'There are two kinds of failures: those who thought and never did, and those who did and never thought.',
 'Learning is the beginning of wealth. Learning is the beginning of health. Learning is the beginning of spirituality. Searching and learning is where the miracle process all begins.'
 ,
'the quick brown fox jump over the lazy dog',

'the quick brown fox jump over the lazy dog 1' , 
'the quick brown fox jump over the lazy dog 2' ,
'the quick brown fox jump over the lazy dog 3' ,
'the quick brown fox jump over the lazy dog 4' ,
'the quick brown fox jump over the lazy dog 5' ,
'the quick brown fox jump over the lazy dog 6' ,
'the quick brown fox jump over the lazy dog 7' ,
'the quick brown fox jump over the lazy dog 8' ,
'the quick brown fox jump over the lazy dog 9' ,
'the quick brown fox jump over the lazy dog 10',
'the quick brown fox jump over the lazy dog 11',

'the quick brown fox jump over the lazy dog 12' , 
'the quick brown fox jump over the lazy dog 13' ,
'the quick brown fox jump over the lazy dog 14' ,
'the quick brown fox jump over the lazy dog 15' ,
'the quick brown fox jump over the lazy dog 16' ,
'the quick brown fox jump over the lazy dog 17 ', 
'the quick brown fox jump over the lazy dog 18,',
'the quick brown fox jump over the lazy dog 19' ,
'the quick brown fox jump over the lazy dog 20' ,
'the quick brown fox jump over the lazy dog 21' ,
'the quick brown fox jump over the lazy dog 22' ,]

//step  [ 3 ]
function startTyping(){
  let findLength = Math.floor(Math.random() * text.length)
  quoteDisplay.innerHTML = text[findLength];

  let date = new Date()
  startTime = date.getTime();

  btn.innerText = 'Done' ; 
  score.innerText = '' ;
}
//step [ 4 ]
function endTyping(){
 btn.innerText = 'Start';

  let finishTime = new Date()
  endTime = finishTime.getTime();
  
  totalTime = Math.floor((endTime - startTime ) / 1000);
  
  calcuteTimeSpeed(totalTime)
 
  quoteDisplay.innerText = '';
  Typing_Ground.value = '';
}

//step [ 5 ]
const calcuteTimeSpeed = (time_taken) => {
  let totalWords = Typing_Ground.value.trim() ; 
  let actualWord = totalWords.split(' ').length;

  if(actualWord !== 0 ){
    let typeSpeed = (actualWord / time_taken) * 60;
    typeSpeed = Math.round(typeSpeed)
    score.innerHTML = `Your Type Speed is: ${typeSpeed} p/m and you wrote: ${actualWord} words and your time: ${time_taken} seconds`;
  }
  else if(Typing_Ground.value === ''){
    score.innerText = "You didn't wrote any words"
  }
}

//step [ 2 ]
btn.addEventListener('click' , function(){
  switch (btn.innerText.toLocaleLowerCase()){
    case 'start' :
      Typing_Ground.removeAttribute("disabled")
      startTyping()
      break ;

      case "done" :
        Typing_Ground.setAttribute("disabled" , 'true')
        endTyping()
      break ;
  }
})