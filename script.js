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
        const iconCode = data.weather[0].icon;

        // Constructing the icon URL
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
 
        // Display weather information
        const DomElements = document.getElementById('DomElements');
        DomElements.innerHTML = `
            <div class="weather-container">
                <img src="${iconUrl}" class="weather-icon black-and-white-theme" alt="Weather Icon">
                <div class="weather-info">
                    <p>Temperature: ${temperature}°C</p>
                    <p>Description: ${description}</p>
                </div>
            </div>
        `;
    })
    .catch(error => {
        console.error('Error:', error);
    });
