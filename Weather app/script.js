async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'f84c8bf87794d3107eb46c0ba9de7270';  // Replace with your actual OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    console.log(url); // Log the URL for debugging

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data); // Log the response data

        if (data.cod === 200) {
            document.getElementById('weather-info').innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Condition: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } else {
            document.getElementById('weather-info').innerText = 'City not found';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-info').innerText = 'Error fetching data. Please try again later.';
    }
}
