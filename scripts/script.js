const apiKey = '1470a12586028dd65d5e29e15d8a1cd4'; // Replace with your OpenWeatherMap API key
const city = 'Buenos Aires, Ar'; // Replace with your desired city
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