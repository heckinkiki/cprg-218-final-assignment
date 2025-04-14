fetch('https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=f08e11c504320f3c1631c9adf388f026&units=metric')
    .then(response => response.json())
    .then(data => {
        WeatherIcon.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';
        WeatherValue.textContent = data.main.temp + "\u00B0C";
    });