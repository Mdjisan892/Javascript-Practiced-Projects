const formCurrency = document.getElementById("form-currency");
const toCurrency = document.getElementById("to-currency");
const amountInput = document.getElementById("amount");
const convertBtn = document.getElementById("convert");
const result = document.getElementById("result");

const API_KEY = "bd169111462f7189a894561d"
const API = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

fetch(API)
 .then(res => res.json())
 .then(data => {
  const currencys = Object.keys(data.conversion_rates);
  currencys.forEach(currency => {
    const fromOption = document.createElement("option");
    const toOption = document.createElement("option");

    fromOption.innerText = fromOption.value = currency;
    toOption.innerText = toOption.value = currency
  
    formCurrency.appendChild(fromOption);
    toCurrency.appendChild(toOption);
  })
 })

convertBtn.addEventListener("click" , ()=>{
  const from = formCurrency.value;
  const  to = toCurrency.value;
  const amount = amountInput.value;

  if(amount === "" || isNaN(amount)){
   alert("please enter amount")
   return
  }

const conversionApiUrl = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amount}`;
  
fetch(conversionApiUrl)
  .then(res => res.json())
  .then(data => {
    const convertAmount = data.conversion_result;
    result.textContent = `${amount} ${from}=${convertAmount}${to}`
  })
.catch(error => {
    console.error('Error fetching the conversion rate:', error);
    alert('Failed to fetch conversion rate. Please try again later.');
  });
 })