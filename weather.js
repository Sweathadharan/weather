//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.
// weather.js


const apiKey = '757da070cbff354890a655f7eb978b83';
function GetWeather() {
  const city = document.getElementById('cityInput').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        console.log('Something went wrong');
      }
      return response.json();
    })
    .then(data => {
      const cityName = data.name;
      const country = data.sys.country;
      const temperature = data.main.temp;
      const currentDate = new Date();
      const dayDate = currentDate.toDateString();
      
     
      document.getElementById('cityName').textContent = ` ${cityName}`;
      document.getElementById('country').textContent = ` ${country}`;
      document.getElementById('dayDate').textContent = ` ${dayDate}`;
      document.getElementById('temperature').textContent = ` ${temperature}°C`;
      
    })
    .catch(error => {
      console.error('Error', error);
    });
}

