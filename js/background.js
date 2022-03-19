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
            //let img = document.createElement("img")
            img.src = `${myimage[Math.floor(Math.random() * myimage.length)].urls.regular}`
            //list.appendChild(img)
            myimg.appendChild(img)
        }
        displayimage(myimage)
        setInterval(displayimage, 10000)
    }) 
    .catch(error => {
        console.error("learn to use me ...olobe!")
    })

    

 
  


