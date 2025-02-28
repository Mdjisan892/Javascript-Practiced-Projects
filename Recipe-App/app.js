async function fetchRecipe() {
    try {
        const searchInputValue = document.getElementById("searchInput").value;
        const apiKey =  "409a1e65e8d1418cbf757b9e321caa91"
        const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${searchInputValue}&apiKey=${apiKey}`;

        if(searchInputValue){
        const res = await fetch(apiUrl);
        const data = await res.json();
        showRecipe(data.results)
        }
        else{
            console.log("Please enter a search term.");
        }

    } catch (error) {
        console.log(error)
    }
    document.getElementById("searchInput").innerText = "" ;
}

let count = 0 ;

async function showRecipe(results){
    
  document.getElementById("tutorial").innerHTML = "";

  results.forEach( async(result) => {
    const apiKey =  "409a1e65e8d1418cbf757b9e321caa91";
    const res = await fetch(`https://api.spoonacular.com/recipes/${result.id}/information?apiKey=${apiKey}&includeNutrition=true`)
    const data = await res.json();

    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const h3 = document.createElement("h3");

    document.getElementById("image").src = result.image;
    h1.textContent = "Tutorials";
    h3.textContent = result.title ;

    
    div.appendChild(h1)
    div.appendChild(h3) ;
    
    document.getElementById("forTutorials").innerHTML =  ` ${count++} ${data.instructions}` ;
    document.getElementById("tutorial").appendChild(div);
    document.getElementById("searchInput").value = "";
  })
}

document.getElementById("searchBtn").addEventListener("click" , fetchRecipe)