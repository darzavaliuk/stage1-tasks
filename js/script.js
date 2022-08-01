function showTime() {
    const time = document.querySelector('.time');
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    // console.log(currentTime);
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
}

showTime();

function showDate() {
    const dat = document.querySelector('.date');
    const date = new Date();
    const options = { weekday: "long", month: 'long', day: 'numeric', timeZone: 'UTC' };
    const currentDate = date.toLocaleDateString('en-Br', options);
    dat.textContent = currentDate;
    setTimeout(showDate, 1000);
}

showDate();

let city = document.querySelector('.city')
city.value = 'Minsk'

function showGreeting() {
    const greet = document.querySelector('.greeting');
    const date = new Date();
    const hours = date.getHours();
    const timeOfDay = getTimeOfDay(hours);
    const greetingText = `Good ${timeOfDay}`;
    greet.textContent = greetingText;
    setTimeout(showDate, 1000);
}

function getTimeOfDay(hours) {
    //console.log(hours)
    if ((hours > 5) && (hours < 12))
        return 'morning'
    else if ((hours > 11) && (hours < 18))
        return 'afternoon'
    else if ((hours > 17) && (hours < 24))
        return 'evening'
    else if (hours > 23 || hours < 6)
        return 'night'
}

showGreeting()

function setLocalStorage() {
    const name = document.querySelector('.name')
    let city = document.querySelector('.city')
    // if (name != underfined)
    localStorage.setItem('name', name.value);
    localStorage.setItem('city', city.value)
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    const name = document.querySelector('.name')
    let city = document.querySelector('.city')
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
    if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
        getWeather(url)
    }
}
window.addEventListener('load', getLocalStorage)

function getRandomNum() {
    let bgNum = Math.floor(Math.random() * 20)
    bgNum += ''
    if (bgNum.length < 2)
        bgNum = '0' + bgNum
    return bgNum
}

let bgNum = getRandomNum()

function setBg(bgNum) {
    const date = new Date();
    const hour = date.getHours();
    let hours = getTimeOfDay(hour)
    let body = document.querySelector('body')
    let str = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${hours}/${bgNum}.jpg`
    const img = new Image();
    img.src = str
    img.onload = () => {
        body.style.backgroundImage = `url(${str})`;
    };
}

setBg(bgNum)

function getSlideNext() {
    if (bgNum == 20)
        bgNum = 1
    else
        bgNum = bgNum - 0 + 1
    bgNum += ''
    if (bgNum.length < 2)
        bgNum = '0' + bgNum
    setBg(bgNum)
}

const slideNext = document.querySelector('.slide-next.slider-icon')
slideNext.addEventListener('click', getSlideNext)

function getSlidePrev() {
    if (bgNum == 1)
        bgNum = '20'
    else
        bgNum = bgNum - 0 - 1
    bgNum += ''
    if (bgNum.length < 2)
        bgNum = '0' + bgNum
    setBg(bgNum)
}

const slidePrev = document.querySelector('.slide-prev.slider-icon')
slidePrev.addEventListener('click', getSlidePrev)

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')

async function getWeather(url) {

    // const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    try{
    const res = await fetch(url);
        const data = await res.json();
    // console.log(data.message)
        console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
        weatherIcon.style.visibility = 'visible'
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${data.main.temp}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = 'Wind speed: ' + data.wind.speed + ' m/s'
        humidity.textContent = 'Humidity: ' + data.main.humidity + '%'
    } catch (e) {
        weatherIcon.style.visibility = 'hidden'
        temperature.textContent = 'Doesn`t exist';
        weatherDescription.textContent = '';
        wind.textContent = ''
        humidity.textContent = ''
    }
    
}

getWeather('https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric')

city.onchange = () => {
    //console.log(city.value)
    let url;
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    getWeather(url)
    // console.log('fgdg')
    temperature.textContent = `${city.value} doesn/t exist`;
}

async function getQuotes() {  
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    console.log(data);
  }
  
  getQuotes();




