const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const resultDiv = document.getElementById("result")

async function getBooks(booksName) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${booksName}`);
    resultDiv.innerHTML = "";

    if(!response.ok){
     throw new Error("Error while fetching")
    }

    const data =await response.json();

    if(data.items && data.items.length > -1){
      data.items.forEach(element => {

      const { title, authors, averageRating } = element.volumeInfo;

      const bookstitle = `Title: ${title}` 
      const booksAuthore = `Authore:  ${authors ? authors.join(", ") : "N/A"}`;
      const booksRating = `Rating : ${averageRating ? averageRating : "N/A"}`

      const details = document.createElement("p");
      details.innerHTML = `${bookstitle} <span>${booksAuthore}</span> <span>${booksRating}</span>`
      resultDiv.appendChild(details)
      })
    }
    else{
     const p = document.createElement("p").textContent =  `${booksName} is not find`;
     resultDiv.appendChild(p);
    }
  }

searchButton.addEventListener("click" , () =>{
    const booksName = searchInput.value.toLowerCase().trim();
    if(!booksName){
     const p = document.createElement("p").textContent =  "Pleas enter book name" ;
     resultDiv.appendChild(p);
     return ;
    }
  getBooks(booksName);
  searchInput.value = "";
})