const geniusButton = document.querySelector("#genius-button")
const quote = document.querySelector("#quote")

document.addEventListener("DOMContentLoaded", () => {
    fetchQuotes()

})

function fetchQuotes() {
    fetch('https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json')
    .then(response => response.json())
    .then(quotes => {
        geniusButton.addEventListener("click", () => {
            getQuote(quotes)       
        })        
    })
}
    
function getQuote(quotes){
    let theQuote = quotes[Math.floor(Math.random() * quotes.length)]
    if (theQuote.length < 80){
        quote.innerText=theQuote
    }

}

