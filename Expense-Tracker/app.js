const total = document.getElementById("total");
const plusMoney = document.getElementById("plusMoney");
const minusMoney = document.getElementById("minusMoney");
const form = document.getElementsByClassName("transitions");
const des = document.getElementById("incomeDes");
const amountInput = document.getElementById("amountInput");

let id = 0

const dummyTransitions = [
    {id:id++ , text:"flower" , amount:-20},
    {id:id++ , text:"salary" , amount:300},
    {id:id++ , text:"books" , amount:-5},
    {id:id++ , text:"gift" , amount:150} 
];

let transitions = dummyTransitions

function addTransitions (e){
 id = 4 
 if(des.value !== "" && amountInput.value !== ""){
    const transition = {
    id : id++,
    text : des.value,
    amount : amountInput.value
    }
    transitions.push(transition);
    addTransactionDOM(transition)
    updateItems()
    des.value = "";
    amountInput.value = "";
  }else{
    alert("You must add somthing")
 }
}

function addTransactionDOM(transition){

   const sign = transition.amount < 0 ? "-" : "+";
   
   const items = document.createElement("li");
   items.classList.add(sign === "+" ? "income-list" : "expenses-list");
   items.innerHTML = `<p>${transition.text}</p> <p>${sign}${Math.abs(transition.amount)}</p><button  class="delete-btn" onclick="removeItem(${transition.id})">X</button>`;
   document.getElementById("ul").appendChild(items)
   localStorage.setItem("items" , JSON.stringify(transitions))
}

function updateItems(){
    let amounts = transitions.map(transition => +transition.amount);

    const totalMoney = amounts.reduce((acumolator , value) => (acumolator += value),0).toFixed(2)
    const income = amounts.filter(value => value > 0).reduce((acumolator , value)=> (acumolator +=value),0).toFixed(2);

   const expense = (
    amounts.filter(value => value  < 0).reduce((acumolator , value)=> (acumolator += value),0) * -1
   ).toFixed(2)

   total.innerHTML = `${totalMoney}`;
   plusMoney.innerHTML = `${income}`;
   minusMoney.innerHTML = `${expense}`
}

function removeItem(id){
    transitions = transitions.filter(transition => transition.id !== id);
    localStorage.setItem("items" , JSON.stringify(transitions))
    initialize()
}

function initialize(){
  const storedTransitions = JSON.parse(localStorage.getItem("items"))
  if(storedTransitions){
   transitions = storedTransitions
  }
  
  document.getElementById("ul").innerHTML = "";
  transitions.forEach(addTransactionDOM);
  updateItems()
}

initialize()
document.getElementById("addNew").addEventListener("click" , addTransitions)