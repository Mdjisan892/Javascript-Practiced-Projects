const quote = document.getElementById("quote");
const newQuote = document.getElementById("newQuote");
const text = document.getElementById("text");

text.addEventListener("input", () => {
    try {
        const catchSpanTag = document.querySelectorAll("span");
        const quoteSplit = quote.innerText.split('');
        let correct = true;

        catchSpanTag.forEach((span, index) => {
            const quoteValue = quoteSplit[index]
            const spanValue = text.value[index]

            if (spanValue == null) {
                span.classList.remove("ok", "not");
                correct = false;
            } else if (spanValue === quoteValue) {
                span.classList.add("ok");
                span.classList.remove("not");
            } else {
                span.classList.remove("ok");
                span.classList.add("not");
                correct = false;
            }
        })
        if (correct) { setTimeout(() => {
            showQuote()
            text.value = null
        }, 5000) }
    } catch (error) {
        console.log(error)
    }

})

const showQuote = async () => {
    try {
        const output = await fetchApi();
        quote.innerHTML = ""

        output.split("").forEach(element => {
            const spanTag = document.createElement("span")
            spanTag.innerText = element;
            quote.appendChild(spanTag);
        })
        quote.value = null
    } catch (error) {
        console.log(error);
    }
}

async function fetchApi() {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
    const data = await response.json();
    return data.joke;
}

newQuote.addEventListener("click", showQuote)