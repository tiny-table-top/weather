const url = 'http://api.weatherapi.com/v1/forecast.json?key=fdf367abc68c4809a45195734241004&q=Calgary&days=1&aqi=no&alerts=no';

function fetchData() {
    fetch(url)
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .then(data => {
        var urlDataDiv = document.getElementById('urlData');

        // Location //
        var locationPara = document.createElement('p');
        const locationLabel = document.createElement('span');
        locationLabel.classList.add('bold-label');
        locationLabel.textContent = 'City: ';

        const locationData = document.createElement('span');
        locationData.textContent = data.location.name;

        urlDataDiv.appendChild(locationPara);
        locationPara = urlDataDiv;
        locationPara.appendChild(locationLabel);
        locationPara.appendChild(locationData);

        // Date & Time //
        var dateTimePara = document.createElement('p');
        const dateTimeLabel = document.createElement('span');
        dateTimeLabel.classList.add('bold-label');
        dateTimeLabel.textContent = 'Date & Time: ';

        const dateData = document.createElement('span');
        dateData.textContent = data.location.localtime;

        urlDataDiv.appendChild(dateTimePara);
        dateTimePara = urlDataDiv;
        dateTimePara.appendChild(dateTimeLabel);
        dateTimePara.appendChild(dateData);
        

        // Temperature //
        var tempPara = document.createElement('p');
        const tempLabel = document.createElement('span');
        tempLabel.classList.add('bold-label');
        tempLabel.textContent = 'Temperature: ';

        const tempData = document.createElement('span');
        tempData.textContent = data.current.temp_c;

        urlDataDiv.appendChild(tempPara);
        tempPara = urlDataDiv;
        tempPara.appendChild(tempLabel);
        tempPara.appendChild(tempData);

        // Feels Like //
        var feelsLikePara = document.createElement('p');
        const feelsLikeLabel = document.createElement('span');
        feelsLikeLabel.classList.add('bold-label');
        feelsLikeLabel.textContent = 'Feels Like: ';

        const feelsLikeData = document.createElement('span');
        feelsLikeData.textContent = data.current.feelslike_c;

        urlDataDiv.appendChild(feelsLikePara);
        feelsLikePara = urlDataDiv;
        feelsLikePara.appendChild(feelsLikeLabel);
        feelsLikePara.appendChild(feelsLikeData);

        // Wind //
        var windPara = document.createElement('p');
        const windLabel = document.createElement('span');
        windLabel.classList.add('bold-label');
        windLabel.textContent = 'Wind in KPH: ';

        const windData = document.createElement('span');
        windData.textContent = data.current.wind_kph;

        urlDataDiv.appendChild(windPara);
        windPara = urlDataDiv;
        windPara.appendChild(windLabel);
        windPara.appendChild(windData);

        // Conditions //
        var conditionsPara = document.createElement('p');
        const conditionsLabel = document.createElement('span');
        conditionsLabel.classList.add('bold-label');
        conditionsLabel.textContent = 'Conditions: ';

        const conditionsData = document.createElement('span');
        conditionsData.textContent = data.current.condition.text;

        urlDataDiv.appendChild(conditionsPara);
        conditionsPara = urlDataDiv;
        conditionsPara.appendChild(conditionsLabel);
        conditionsPara.appendChild(conditionsData);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
}

fetchData();

























/*
async function getData() {
    const response = await fetch(url);
    const data = await response.text();

    const weather = JSON.parse(data);
    console.log(weather);
    displayWeather(weather);
}

const weatherData = getData();

function displayWeather() {
    const location = ["location"][0]["name"][0];
    const locationDiv = document.getElementById("city");

    const locationName = location;
    const heading = document.createElement("h1");
    heading.innerHTML = locationName;
    locationDiv.appendChild(heading);

    const date = ["location"][7];
    const datetimeDiv = document.getElementById("datetime");

    const dateLocalTime = date;
    const time = document.createElement("ul");
    time.innerHTML = dateLocalTime;
    datetimeDiv.appendChild(time);

    const current = ["current"][2];
    const currentDiv = document.getElementById("temp");

    const currentTemp = current;
    const temp = document.createElement("ul");
    temp.innerHTML = currentTemp;
    currentDiv.appendChild(temp);
}

displayWeather(weatherData);



fetch(url)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch((error) => console.error("FETCH ERROR:", error));

var data = response.json();



    

    

    const feels = data.Object[1];
    const feelsDiv = document.getElementById("weather");

    const currentFeel = current.feelslike_c;
    const feel = document.createElement("ul");
    feel.innerHTML = currentFeel;
    locationDiv.appendChild(feel);
    
} 
    
displayWeather(data);

*/
