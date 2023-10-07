document.addEventListener('DOMContentLoaded', () => {
    const getWeatherButton = document.getElementById('getWeatherButton');
    const weatherDataDiv = document.getElementById('weatherData');
    
    // OpenWeatherMap API key (replace with your own key)
    const apiKey = '10f64661c36415248f7cb4f47b45f966';
    
    // London's city ID (you can also use city name or coordinates)
    const cityId = 2643743; // London
    
    getWeatherButton.addEventListener('click', () => {
        // API endpoint for current weather
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`;
        
        // Fetch data from the API
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Extract the weather description
                const weatherDescription = data.weather[0].description;
                
                // Display the weather data
                weatherDataDiv.textContent = `Current weather in London: ${weatherDescription}`;
            })
            .catch(error => {
                console.error('Error:', error);
                weatherDataDiv.textContent = 'Failed to fetch weather data.';
            });
    });
});
