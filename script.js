// API Key from OpenWeatherMap
const apiKey = '20f2174714f38cb00ed7b0b0dde77be9';
const city = "Calgary";
 
// API URL
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log("Test connection");
        const temperature = data.main.temp;
        const description = data.weather[0].description;
 
        // Display weather information
        const DomElements = document.getElementById('DomElements');
        DomElements.innerHTML = `
            
            <p> ${temperature}°C </p>
            <p> ${description} </p>
        `;
    })
    .catch(error => {
        console.error('Error:', error);
    });