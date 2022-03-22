const div = document.querySelector("#quote")
const h1 = document.querySelector("#header")
const span = document.querySelector("#quote span:last-child")


fetch("https://type.fit/api/quotes")
    .then((response) => {
        return response.json()
    })
    .then((data) =>  {
        let myquotes = data
        function displayQuote(quote) {
            let index = Math.floor(Math.random() * quote.length)
            h1.textContent = `${quote[index].text}`
            span.textContent = `${quote[index].author}`
        }
        displayQuote(myquotes)
        //setInterval(displayQuote, 9000)
    }) 
    .catch(error => {
        console.error("learn to use me")
    })

 
  


