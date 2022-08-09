window.lang = "EN";
document.getElementById("idName").placeholder = "[Input text]";

import showTime from "./timeShow.js";

showTime();

import showDate from "./dateShow.js";

console.log(showDate);

showDate();

let city = document.querySelector(".city");

const cityLang = { EN: "Minsk", RU: "Минск" };

// console.log(cityLang[lang]);

city.value = cityLang[lang];

let morning = { EN: "morning", RU: "Доброе утро" };
let afternoon = { EN: "afternoon", RU: "Добрый день" };
let evening = { EN: "evening", RU: "Добрый вечер" };
let night = { EN: "night", RU: "Доброй ночи" };

function getTimeOfDay(hours, lang) {
    if (hours > 5 && hours < 12) return morning[lang];
    else if (hours > 11 && hours < 18) return afternoon[lang];
    else if (hours > 17 && hours < 24) return evening[lang];
    else if (hours > 23 || hours < 6) return night[lang];
}

window.generalFunc = generalFunc

function generalFunc() {
    document.querySelector(".choose-api").classList.add("none");
    document.querySelector(".choose-lang").classList.add("none");
    document.querySelector(".visibility-panel").classList.remove("none"); 
}

window.photosFunc = photosFunc;

function photosFunc() {
    document.querySelector(".choose-api").classList.remove("none");
    document.querySelector(".choose-lang").classList.add("none");
    document.querySelector(".visibility-panel").classList.add("none");
}

window.languageFunc = languageFunc;

function languageFunc() {
    document.querySelector(".choose-api").classList.add("none");
    document.querySelector(".choose-lang").classList.remove("none");
    document.querySelector(".visibility-panel").classList.add("none");
}

window.typeApi = typeApi;

function typeApi() {
    document.querySelector(".type-api").classList.remove("none");
    document.querySelector(".input-api").classList.remove("none");
    document.querySelector(".type-api-flick").classList.add("none");
    document.querySelector(".input-api-flick").classList.add("none");
    document.querySelector(".button-submit-api").classList.remove("none");
    document.querySelector(".button-submit-apiFlick").classList.add("none");
    backGroundForm = "api";
}

window.typeGitHub = typeGitHub;

function typeGitHub() {
    document.querySelector(".type-api").classList.add("none");
    document.querySelector(".input-api").classList.add("none");
    document.querySelector(".type-api-flick").classList.add("none");
    document.querySelector(".input-api-flick").classList.add("none");
    document.querySelector(".button-submit-api").classList.add("none");
    document.querySelector(".button-submit-apiFlick").classList.add("none");
    backGroundForm = "git";
    setBg(bgNum);
}

window.typeApiFlick = typeApiFlick;

function typeApiFlick() {
    document.querySelector(".type-api-flick").classList.remove("none");
    document.querySelector(".input-api-flick").classList.remove("none");
    document.querySelector(".type-api").classList.add("none");
    document.querySelector(".input-api").classList.add("none");
    document.querySelector(".button-submit-api").classList.add("none");
    document.querySelector(".button-submit-apiFlick").classList.remove("none");
    backGroundForm = "apiFlick";
}

import showGreeting from "./greetingShow.js";

showGreeting();

document.getElementById('git').checked = true

let langRUN = document.querySelector(".language");
document.getElementById("en").checked = true;
console.log(langRUN.value);

function setLocalStorage() {
    const name = document.querySelector(".name");
    let city = document.querySelector(".city");
    localStorage.setItem("name", name.value);
    localStorage.setItem("city", city.value);
    localStorage.setItem("lang", lang);
}

window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
    const name = document.querySelector(".name");
    let city = document.querySelector(".city");
    let langu = document.querySelector(".language");
    if (localStorage.getItem("name")) {
        name.value = localStorage.getItem("name");
    }
    if (localStorage.getItem("lang")) {
        lang = localStorage.getItem("lang");
        if (lang == "EN") {
            changeLangEn();
            document.getElementById("en").checked = true;
        } else {
            changeLangRus();
            document.getElementById("ru").checked = true;
        }
    }
    if (localStorage.getItem("city")) {
        city.value = localStorage.getItem("city");
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=cae18c1295bbc4a9cbbc5b3b676c530b&units=metric`;
        getWeather(url);
    }
}

window.addEventListener("load", getLocalStorage);

import getRandomNum from "./randomNumGet.js";

function changeVisibPlayer() {
    document.querySelector(".player").classList.toggle("hide");
    document.querySelector(".player").classList.toggle("appear");
}

function changeVisibTime() {
    document.querySelector(".time").classList.toggle("hide");
    document.querySelector(".time").classList.toggle("appear");
}

function changeVisibDate() {
    document.querySelector(".date").classList.toggle("hide");
    document.querySelector(".date").classList.toggle("appear");
}

function changeVisibGreeting() {
    document.querySelector(".greeting-container").classList.toggle("hide");
    document.querySelector(".greeting-container").classList.toggle("appear");
}

function changeVisibCitate() {
    document.querySelector(".change__quote").classList.toggle("hide");
    document.querySelector(".change__quote").classList.toggle("appear");
}

function changeVisibWeather() {
    document.querySelector(".weather").classList.toggle("hide");
    document.querySelector(".weather").classList.toggle("appear");
}

let bgNum = getRandomNum();

// async function getLinkToImage() {
//     const url = 'https://api.unsplash.com/photos/random?query=morning&client_id=PRWJMhoVxzNIMuMmp66jb7wKtFtV1kfdTNPLRfLlEC4';
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data.urls.regular)

// }

// getLinkToImage()
// let chooseLinkToImg = {"git": `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${hours}/${bgNum}.jpg`, "API"}

let tagApiFlick = "nature";
let tagApiFlickNew = "";
let tagApi = "nature";
let tagApiNew = "";

async function getLinkToImage() {
    try {
        const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=87a9b11236cba2acb7861c36f7ab39bb&tags=${tagApiFlickNew}&extras=url_l&format=json&nojsoncallback=1`;
        console.log(url);
        const res = await fetch(url);
        const data = await res.json();
        getRandomNum();
        console.log(data.photos.photo[bgNum].url_l);
        document.querySelector(".warning-api-flick").classList.add("none");
        document
            .querySelector(".input-api-flick")
            .classList.remove("warning-input");
        tagApiFlick = tagApiFlickNew;
        return await data.photos.photo[bgNum].url_l;
    } catch (e) {
        document
            .querySelector(".input-api-flick")
            .classList.add("warning-input");
        document.querySelector(".warning-api-flick").classList.remove("none");
    }
}

document
    .querySelector(".input-api-flick")
    .addEventListener("keydown", function (e) {
        if (e.keyCode == 13) {
            tagApiFlickNew = document.querySelector(".input-api-flick").value;
            console.log(tagApiFlickNew);
            console.log(bgNum);
            setBg();
        }
    });

document.querySelector(".input-api").addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        tagApiFlickNew = document.querySelector(".input-api").value;
        console.log(tagApiFlickNew);
        console.log(bgNum);
        setBg();
    }
});

window.submitApiFlick = submitApiFlick;

function submitApiFlick() {
    tagApiFlickNew = document.querySelector(".input-api-flick").value;
    console.log(tagApiFlickNew);
    console.log(bgNum);
    setBg();
}

window.submitApi = submitApi;

function submitApi() {
    tagApiFlickNew = document.querySelector(".input-api").value;
    console.log(tagApiNew);
    console.log(bgNum);
    setBg();
}

async function getLinkToImageAPI() {
    try {
        const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${tagApiNew}&client_id=PRWJMhoVxzNIMuMmp66jb7wKtFtV1kfdTNPLRfLlEC4`;
        console.log(url);
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.urls.regular);
        document.querySelector(".warning-api").classList.add("none");
        document
            .querySelector(".input-api")
            .classList.remove("warning-input");
        // tagApiFlick = tagApiFlickNew;
        tagApi = tagApiNew
        return await data.urls.regular;
    } catch (e) {
        document
            .querySelector(".input-api")
            .classList.add("warning-input");
        document.querySelector(".warning-api").classList.remove("none");
    }
}
//https://images.unsplash.com/photo-1659686353939-dd23ea1a310f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTIyMTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjAwODUwMzc&ixlib=rb-1.2.1&q=80&w=1080
// getLinkToImage()
let backGroundForm = "git";

async function setBg(bgNum) {
    const date = new Date();
    const hour = date.getHours();
    let hours = getTimeOfDay(hour, "EN");
    let body = document.querySelector("body");
    let str;
    switch (backGroundForm) {
        case "git":
            str = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${hours}/${bgNum}.jpg`;
            break;
        case "apiFlick":
            str = await getLinkToImage();
            break;
        case "api":
            str = await getLinkToImageAPI();
            break;
        // console.log(str)
    }
    const img = new Image();
    img.src = str;
    img.onload = () => {
        body.style.backgroundImage = `url(${str})`;
    };
}

setBg(bgNum);

function getSlideNext() {
    if (bgNum == 20) bgNum = 1;
    else bgNum = bgNum - 0 + 1;
    bgNum += "";
    if (bgNum.length < 2) bgNum = "0" + bgNum;
    setBg(bgNum);
}

const slideNext = document.querySelector(".slide-next.slider-icon");
slideNext.addEventListener("click", getSlideNext);

function getSlidePrev() {
    if (bgNum == 1) bgNum = "20";
    else bgNum = bgNum - 0 - 1;
    bgNum += "";
    if (bgNum.length < 2) bgNum = "0" + bgNum;
    setBg(bgNum);
}

const slidePrev = document.querySelector(".slide-prev.slider-icon");
slidePrev.addEventListener("click", getSlidePrev);

import getWeather from "./weatherGet.js";

getWeather(
    "https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=en&appid=cae18c1295bbc4a9cbbc5b3b676c530b&units=metric"
);

city.onchange = () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=cae18c1295bbc4a9cbbc5b3b676c530b&units=metric`;
    getWeather(url);
};

import getQuotes from "./quotesGet.js";

getQuotes();

const quoteChange = document.querySelector(".change-quote");
quoteChange.onclick = () => {
    getQuotes();
};

import {} from "./musicPlayer.js";

window.changeLangRus = changeLangRus;

function changeLangRus() {
    lang = "RU";
    document.getElementById("idName").placeholder = "[Введите текст]";
    showDate();
    showTime();
    showGreeting();
    city.onchange();
    // getLocalStorage()
    getQuotes();
    document.querySelector(".title__choosing-lang").innerText =
        "Выберите язык:";
    let langRUN = document.querySelector(".language");
    // document.getElementById('en').checked = true
    console.log(lang);
}

window.changeLangEn = changeLangEn;

function changeLangEn() {
    lang = "EN";
    document.getElementById("idName").placeholder = "[Input text]";
    showDate();
    showTime();
    showGreeting();
    city.onchange();
    getQuotes();
    document.querySelector(".title__choosing-lang").innerText =
        "Choose language:";
    let langRUN = document.querySelector(".language");
    // document.getElementById('en').checked = true
    console.log(lang);
}

import {} from "./todoList.js";
