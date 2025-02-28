const searchInput = document.getElementById("searchInput");
const wordDiv = document.getElementById("wordDiv");
const wordSyonymeDiv = document.getElementById("wordSyonymeDiv")
const btn = document.getElementById("btn");

btn.addEventListener("click" , ()=>{
    let searchInputValue = searchInput.value;
    const API = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchInputValue}`

    wordDiv.innerHTML = "";
    wordSyonymeDiv.innerHTML = "";

    fetch(API)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        
        const word = document.createElement("h4");
        word.innerText = `Word: ${searchInputValue}`;
        wordDiv.appendChild(word);

        let allSynonymes = [];

        data[0].meanings.forEach( meaning => {
            if(meaning.synonyms && meaning.synonyms.length > 0){
              allSynonymes.push(...meaning.synonyms.slice(0,3))
            }
        });

        const synonyms = document.createElement("h4");

        if(allSynonymes.length >0){
         synonyms.innerText = `Synonyme: ${allSynonymes.join(", ")}`;
        }else{
            synonyms.innerText = `Synonyme is not available`
        }
        wordSyonymeDiv.appendChild(synonyms)
        searchInput.value = "";
         
    }) 
    //Apply in first Code
    .catch(error => {
        console.error("Error fetching data:", error);
        wordDiv.innerText = `Word: ${searchInputValue}`;
        wordSyonymeDiv.innerText = `Synonyme is not available`;
    });
});

  //First code without customize
        // data[0].meanings.forEach(synonymsWord => {
            
        //     // if(synonymsWord && synonymsWord > 0){
        //     //   const wordSynonyme = document.createElement("h4");
        //     //   wordSynonyme.innerText =  `Synonyme: ${synonymsWord.synonyms.slice(0,2).join(", ")}`;

        //     //    wordSyonymeDiv.appendChild(wordSynonyme)
        //     // }else{
        //     //   const wordSynonyme = document.createElement("h4");
        //     //   wordSynonyme.innerText =  "Synonyme is not available";

        //     //   wordSyonymeDiv.appendChild(wordSynonyme)
        //     // }
        //     // searchInput.value = ""
        // })