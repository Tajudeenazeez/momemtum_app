
const API_KEY= '179658c3b8b03bcb339c2a273d50776f'


function onGeoOK (position) {
    let lat = position.coords.latitude
    let lon = position.coords.longitude
    const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(weather_url).then(response => response.json())
    .then(
        data => {
            console.log(data)
            const country = document.querySelector("#country")
            const cloud = document.querySelector("#cloud")
            country.textContent = data.name
            cloud.textContent = data.main.temp 
            
        })
}

function onGeoError () {
    alert("your locaton is not found")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)