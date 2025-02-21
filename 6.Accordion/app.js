const accordion = document.querySelector(".accordion");
const items = document.querySelectorAll("li");
const question = document.querySelectorAll(".question");

function toggleAccordion  (event) {
 const thisItem = event.currentTarget.parentNode;

 items.forEach((item)=>{
  if(thisItem == item){
    thisItem.classList.toggle("open")
    return;
  }
  item.classList.remove("add")
 })
};

question.forEach(question => question.addEventListener('click', toggleAccordion));