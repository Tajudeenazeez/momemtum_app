const myimg = document.querySelector("#image")
const list = document.createDocumentFragment()
const img = document.querySelector("img")

fetch("https://api.unsplash.com/photos/?client_id=1TBouS1Iic1S-rruqwNJqovEmxQgTQ-K22hSAVksgAU")
    .then((response) => {
        return response.json()
    })
    .then((data) =>  {
        let myimage = data
        
        function displayimage(imag) {
            let index = Math.floor(Math.random() * imag.length) 
            img.src = `${imag[index].urls.regular}`
            myimg.appendChild(img)
        }
        displayimage(myimage)
        //setInterval(displayimage, 1000)
    }) 
    .catch(error => {
        console.error("learn to use me ...olobe!")
    })

    

 
  


