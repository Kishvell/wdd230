const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const city = 'YOUR_CITY'; // Replace with your desired city
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function getWeather() {
    try {
        const response = await fetch(weatherURL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        document.getElementById('temperature').innerText = `${data.main.temp} °C`;
        document.getElementById('description').innerText = data.weather[0].description;
        document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; // Use @2x for higher resolution
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('temperature').innerText = 'Error loading weather';
    }
}

getWeather();
