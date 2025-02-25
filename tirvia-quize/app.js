const questions = [
 {
    quistion : "which is the largest animal in the world",
    answers: [
        {text: "Shark" , correct : false},
        {text: "Blue whale" , correct : true},
        {text: "Elephent" , correct : false},
        {text: "Giraffe" , correct : false}
    ]
 },
 {
    quistion : "which is the dangorous animel exists in the world",
    answers: [
        {text: "Lion" , correct : true},
        {text: "snake" , correct : false},
        {text: "Elephent" , correct : false},
        {text: "Tigar" , correct : false}
    ]
 },
 {
    quistion : "Which is the largest desert in the world ?",
    answers: [
        {text: "Kalahari" , correct : false},
        {text: "Gobi" , correct : false},
        {text: "Sahara" , correct : false},
        {text: "Antertica" , correct : true}
    ]
 },
 {
    quistion : "Which is the smallest continent in the world ?",
    answers: [
        {text: "Asia" , correct : false},
        {text: "Australia" , correct : true},
        {text: "Africa" , correct : false},
        {text: "Arctic" , correct : false}
    ]
 }
]

const questionsEliment = document.getElementById("questions");
const answerButton = document.getElementById("answerButtons");
const nextBtn = document.getElementById("nextBtn");

let currentQuestionIndex = 0 ;
let score = 0 ;

function startQuiz(){
  currentQuestionIndex = 0 ;
  score = 0 ;
  showQuestion()
}
const showQuestion  =() => {
  resetState()
  const onQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1
  questionsEliment.innerHTML = questionNo + ". " + onQuestion.quistion;

  onQuestion.answers.forEach( answer => {
    const button = document.createElement("button");
    button.className = "btn";
    button.innerText = answer.text ;
    answerButton.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click" , selectAnswer );
  })
}

const resetState = () =>{
 nextBtn.style.display = "none";
 while(answerButton.firstChild){
  answerButton.removeChild(answerButton.firstChild)
 }
 
}

const selectAnswer = (e) => {
 let findCorrect = e.target;
 let isCorrect = findCorrect.dataset.correct === "true";
 if(isCorrect){
  findCorrect.classList.add("correct")
  score++
 }else{
  findCorrect.classList.add("incorrect")
 }

 Array.from(answerButton.children).forEach( button =>{
  if(button.dataset.correct === "true"){
    button.classList.add("correct")
  }
  button.disabled = true
 })

 nextBtn.style.display = "block";
 nextBtn.style.visibility = "visible";
}

const handleNextBtn = () => {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
   showQuestion()
  }else{
    showScore()
  }
}

nextBtn.addEventListener("click" , ()=>{
  if(currentQuestionIndex < questions.length){
   handleNextBtn()
  }else{
    startQuiz()
  }
});

const showScore = () =>{
  resetState();
  nextBtn.style.display = "block";
  nextBtn.style.visibility = "visible";
  questionsEliment.innerHTML = `Your score is ${score} out of ${questions.length}`;
  nextBtn.innerText = "Play again";
  nextBtn.addEventListener("click", startQuiz);
}

startQuiz()