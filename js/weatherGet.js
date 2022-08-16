const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");

export default async function getWeather(url) {
    const windSpeed = { EN: "Wind speed: ", RU: "Скорость ветра: " };
    const speed = { EN: " m/s", RU: " м/с" };
    const humidityLang = { EN: "Humidity: ", RU: "Влажность: " };

    // const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data.message)
        console.log(
            data.weather[0].id,
            data.weather[0].description,
            data.main.temp
        );
        weatherIcon.style.visibility = "visible";
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = windSpeed[lang] + Math.round(data.wind.speed) + speed[lang];
        humidity.textContent = humidityLang[lang] + Math.round(data.main.humidity) + "%";
    } catch (e) {
        weatherIcon.style.visibility = "hidden";
        temperature.textContent = "Doesn't exist";
        weatherDescription.textContent = "";
        wind.textContent = "";
        humidity.textContent = "";
    }
}
