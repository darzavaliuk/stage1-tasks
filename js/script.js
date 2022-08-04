let lang = "RU"
document.getElementById('idName').placeholder = '[Input text]'

function changeLang() {
    lang = "RU"
    document.getElementById('idName').placeholder = '[Введите текст]'
}

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
    const currentDate = date.toLocaleDateString(`${lang}-Br`, options);
    dat.textContent = currentDate;
    setTimeout(showDate, 1000);
}

showDate();

let city = document.querySelector('.city')

const cityLang = {"EN": 'Minsk', "RU": 'Минск'}

console.log(cityLang[lang])

city.value = cityLang[lang]

function showGreeting() {
    const greet = document.querySelector('.greeting');
    const date = new Date();
    const hours = date.getHours();
    const timeOfDay = getTimeOfDay(hours, lang);
    const greeting = { "EN": `Good ${timeOfDay}`, "RU": `${timeOfDay}` }

    const greetingText = greeting[lang];
    greet.textContent = greetingText;
    setTimeout(showDate, 1000);
}

let morning = { "EN": 'morning', "RU": 'Доброе утро' }
let afternoon = { "EN": 'afternoon', "RU": 'Добрый день' }
let evening = { "EN": 'evening', "RU": 'Добрый вечер' }
let night = { "EN": 'night', "RU": 'Доброй ночи' }

function getTimeOfDay(hours, lang) {
    //console.log(hours)
    if ((hours > 5) && (hours < 12))
        return morning[lang]
    else if ((hours > 11) && (hours < 18))
        return afternoon[lang]
    else if ((hours > 17) && (hours < 24))
        return evening[lang]
    else if (hours > 23 || hours < 6)
        return night[lang]
}

showGreeting()

function setLocalStorage() {
    const name = document.querySelector('.name')
    let city = document.querySelector('.city')
    // if (name != underfined)
    // localStorage.clear()
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
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=cae18c1295bbc4a9cbbc5b3b676c530b&units=metric`;
        getWeather(url)
    }
}
window.addEventListener('load', getLocalStorage)

function getRandomNum() {
    let bgNum = Math.floor(Math.random() * 19 + 1)
    bgNum += ''
    if (bgNum.length < 2)
        bgNum = '0' + bgNum
    return bgNum
}

let bgNum = getRandomNum()

function setBg(bgNum) {
    const date = new Date();
    const hour = date.getHours();
    let hours = getTimeOfDay(hour, "EN")
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
    const windSpeed = { "EN": 'Wind speed: ', "RU": "Скорость ветра: " };
    const speed = { "EN": ' m/s', "RU": " м/с" };
    const humidityLang = { "EN": 'Humidity: ', "RU": "Влажность: " };

    // const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data.message)
        console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
        weatherIcon.style.visibility = 'visible'
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${data.main.temp}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = windSpeed[lang] + data.wind.speed + speed[lang]
        humidity.textContent = humidityLang[lang] + data.main.humidity + '%'
    } catch (e) {
        weatherIcon.style.visibility = 'hidden'
        temperature.textContent = 'Doesn`t exist';
        weatherDescription.textContent = '';
        wind.textContent = ''
        humidity.textContent = ''
    }

}

getWeather('https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=en&appid=cae18c1295bbc4a9cbbc5b3b676c530b&units=metric')

city.onchange = () => {
    //console.log(city.value)
    let url;
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=cae18c1295bbc4a9cbbc5b3b676c530b&units=metric`;
    getWeather(url)
    // console.log('fgdg')
    temperature.textContent = `${city.value} doesn/t exist`;
}

async function getQuotes() {
    let coef = {"EN": 40, "RU": 10}
    let quot = 'data' + lang +'.json';
    const quote = document.querySelector('.quote')
    const author = document.querySelector('.author')
    const res = await fetch(quot);
    const data = await res.json();
    let rand = Math.floor(Math.random() * coef[lang])
    quote.textContent = data.quotes[rand].quote;
    author.textContent = data.quotes[rand].author
}

getQuotes();

const quoteChange = document.querySelector('.change-quote')
quoteChange.onclick = () => {
    getQuotes()
}

let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
// let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.play .player-icon');
let next_btn = document.querySelector('.play-next .player-icon');
let prev_btn = document.querySelector('.play-prev .player-icon');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
// let wave = document.getElementById('wave');
// let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        // img: 'images/stay.png',
        name: 'Aqua Caelestis',
        // artist: 'The Kid LAROI, Justin Bieber',
        music: 'sounds/Aqua Caelestis.mp3'
    },
    {
        // img: 'images/fallingdown.jpg',
        name: 'Ennio Morricone',
        // artist: 'Wid Cards',
        music: 'sounds/Ennio Morricone.mp3'
    },
    {
        // img: 'images/faded.png',
        name: 'River Flows In You',
        // artist: 'Alan Walker',
        music: 'sounds/River Flows In You.mp3'
    },
    {
        // img: 'images/ratherbe.jpg',
        name: 'Summer Wind',
        // artist: 'Clean Bandit',
        music: 'sounds/Summer Wind.mp3'
    }
];

let audio_index = 0;

for (var track in music_list) {
    var tb = document.createElement("div");
    var pb = document.createElement("button");
    var tn = document.createElement("div");
    tb.className = "trackbar";
    pb.className = "play1 player-icon1";
    // pb.IdName = 'player1'
    tn.className = "trackname";
    tn.innerHTML = music_list[audio_index].name;
    console.log(music_list[audio_index].name)
    pb.id = audio_index;
    pb.addEventListener("click", switchTrack);
    tb.appendChild(pb);
    tb.appendChild(tn);
    trackbox.appendChild(tb);
    audio_index++;
}

let playingtrack = 0

function switchTrack(event) {
    console.log(playingtrack, event.target.id)
    // console.log(curr_track.durationSeconds)
    if (isPlaying) {
        if (playingtrack != event.target.id) {
            isPlaying = true;
            // _(playingtrack).style.background = "url(images/ak_playbtn.png)";
            // event.target.style.background = "url(images/ak_pausebtn.png)";
            // audio.src = audio_folder + event.target.id + audio_ext;
            // audio.play();
            loadTrack(event.target.id - 0)
            // console.log('dfg')
            playTrack()
            document.getElementById(event.target.id + '').classList.add('play1')
            document.getElementById(event.target.id + '').classList.remove('pause1')
        
        } else {
            // audio.pause();
            isPlaying = false;
            pauseTrack()
            // event.target.style.background = "url(images/ak_playbtn.png)";
            document.getElementById(event.target.id + '').classList.add('play1')
            document.getElementById(event.target.id + '').classList.remove('pause1')
        }
    } else {
        isPlaying = true;
        // event.target.style.background = "url(images/ak_pausebtn.png)";
        if (playingtrack != event.target.id) {
            // console.log('khjfgd')
            loadTrack(event.target.id - 0)
        }
        document.getElementById(event.target.id + '').classList.remove('play1')
        document.getElementById(event.target.id + '').classList.add('pause1')
        playTrack()
    }
    playingtrack = event.target.id;
    track_index = event.target.id - 0
}

loadTrack(track_index);

function loadTrack(track_index) {


    clearInterval(updateTimer);
    reset();



    curr_track.src = music_list[track_index].music;
    // console.log(music_list[track_index].music)
    curr_track.load();

    // track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    // track_artist.textContent = music_list[track_index].artist;
    // now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 10);

    curr_track.addEventListener('ended', nextTrack);
    // random_bg_color();
}

function reset() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}

function playpauseTrack() {
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack() {
    ;
    curr_track.play();
    // playingtrack = event.target.id;
    isPlaying = true;
    document.getElementById("player").classList.remove('play')
    document.getElementById("player").classList.add('pause')
    // track_art.classList.add('rotate');
    // wave.classList.add('loader');
    // playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack() {
    curr_track.pause();
    // playingtrack = event.target.id;
    isPlaying = false;
    document.getElementById("player").classList.add('play')
    document.getElementById("player").classList.remove('pause')
    console.log(track_index)
    // track_art.classList.remove('rotate');
    // wave.classList.remove('loader');
    // playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
    if (track_index < music_list.length - 1 && isRandom === false) {
        track_index += 1;
    } else if (track_index < music_list.length - 1 && isRandom === true) {
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    } else {
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
    playingtrack = track_index
}
function prevTrack() {
    if (track_index > 0) {
        track_index -= 1;
    } else {
        track_index = music_list.length - 1;
    }
    loadTrack(track_index);
    playTrack();
    playingtrack = track_index
}
function seekTo() {
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume() {
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate() {
    let seekPosition = 0;
    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
        console.log()
    }
}



