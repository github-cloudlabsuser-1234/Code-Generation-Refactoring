const fetch = require('node-fetch');

const apiKey = '6d223ff34e90c880b05d4226788ba497';
const city = 'London';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(`Weather in ${city}:`);
        console.log(`Temperature: ${data.main.temp}K`);
        console.log(`Weather: ${data.weather[0].description}`);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });