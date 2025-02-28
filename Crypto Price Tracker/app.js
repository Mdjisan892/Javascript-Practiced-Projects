async function dataFetch(crypto) {
   try {
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`)
    if(!response.ok){
     throw new Error("Error while fetching data")
    }    
    const data =await response.json();
    console.log(data)
    if(data[crypto]){
     const totalPrice = data[crypto].usd;
     document.getElementById("price").textContent = `The price of ${crypto} = $${totalPrice}`
    }else{
        document.getElementById('price').textContent = `${crypto} is not found`
    }
   } catch (error) {
    document.getElementById("price").textContent = "Error while data come please reresh and try again";
    console.log("The Error -->" , error)
   }
}

document.getElementById("getPriceBtn").addEventListener("click" , ()=>{
       const crypto = document.getElementById("cryptoInput").value.toLowerCase().trim();
       if(!crypto){
        document.getElementById("price").innerText = `Enter amount of cryptocurrency`
       }
       dataFetch(crypto)
})