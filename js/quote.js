const div = document.querySelector("#quote")
const h1 = document.querySelector("#header")
const span = document.querySelector("#quote span:last-child")
const list = document.createDocumentFragment()

fetch("https://type.fit/api/quotes")
    .then((response) => {
        return response.json()
    })
    .then((data) =>  {
        let myquotes = data

        function displayQuote(quote) {
            h1.textContent = `${myquotes[Math.floor(Math.random() * myquotes.length)].text}`
            span.textContent = `${myquotes[Math.floor(Math.random() * myquotes.length)].author}` 
        }
        displayQuote(myquotes)
        setInterval(displayQuote, 9000)
    }) 
    .catch(error => {
        console.error("learn to use me")
    })

 
  


