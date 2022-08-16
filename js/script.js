window.lang = "EN";
document.getElementById("idName").placeholder = "[Input text]";

import showTime from "./timeShow.js";

showTime();

import showDate from "./dateShow.js";

// console.log(showDate);

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

window.clickTodo = clickTodo;

function clickTodo() {
    // changeSettings()
    // console.log(document.querySelector('.todo-list').classList)
    document.querySelector(".todo-list").classList.toggle("disappear");
    document.querySelector(".todo-list").classList.toggle("apppear");
    document.querySelector('.change__quote').classList.toggle('addZIndex')
    setTimeout(200, func1)
}

function func1() {
    document.querySelector(".todo-list").classList.toggle("none");
}

window.clickRsShool = clickRsShool

function clickRsShool() {
    window.open('https://rs.school/js/')
}

window.clickGitIcon = clickGitIcon

function clickGitIcon() {
    window.open('https://github.com/darzavaliuk')//
}

window.generalFunc = generalFunc;

window.changeSettings = changeSettings;

function changeSettings() {
    // clickTodo()
    document.getElementById("panel").classList.toggle("disappear");
    document.querySelector('.change__quote').classList.toggle('addZIndex')
    setTimeout(func, 200)
    generalFunc();
}

function func() {
    document.getElementById("panel").classList.toggle("none");
}

function generalFunc() {
    document.querySelector(".choose-api").classList.add("none");
    document.querySelector(".choose-lang").classList.add("none");
    document.querySelector(".visibility-panel").classList.remove("none");
    document.querySelector(".generalTitle").classList.add("api_chose");
    document.querySelector(".photosTitle").classList.remove("api_chose");
    document.querySelector(".languageTitle").classList.remove("api_chose");
}

window.photosFunc = photosFunc;

function photosFunc() {
    document.querySelector(".choose-api").classList.remove("none");
    document.querySelector(".choose-lang").classList.add("none");
    document.querySelector(".visibility-panel").classList.add("none");
    document.querySelector(".generalTitle").classList.remove("api_chose");
    document.querySelector(".photosTitle").classList.add("api_chose");
    document.querySelector(".languageTitle").classList.remove("api_chose");
}

window.languageFunc = languageFunc;

function languageFunc() {
    document.querySelector(".choose-api").classList.add("none");
    document.querySelector(".choose-lang").classList.remove("none");
    document.querySelector(".visibility-panel").classList.add("none");
    document.querySelector(".generalTitle").classList.remove("api_chose");
    document.querySelector(".photosTitle").classList.remove("api_chose");
    document.querySelector(".languageTitle").classList.add("api_chose");
}

window.typeApi = typeApi;

function typeApi() {
    document.querySelector(".type-api").classList.remove("none");
    document.querySelector(".input-api").classList.remove("none");
    document.querySelector(".type-api-flick").classList.add("none");
    document.querySelector(".input-api-flick").classList.add("none");
    document.querySelector(".button-submit-api").classList.remove("none");
    document.querySelector(".button-submit-api-flick").classList.add("none");
    backGroundForm = "api";
}

window.typeGitHub = typeGitHub;

function typeGitHub() {
    document.querySelector(".type-api").classList.add("none");
    document.querySelector(".input-api").classList.add("none");
    document.querySelector(".type-api-flick").classList.add("none");
    document.querySelector(".input-api-flick").classList.add("none");
    document.querySelector(".button-submit-api").classList.add("none");
    document.querySelector(".button-submit-api-flick").classList.add("none");
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
    document.querySelector(".button-submit-api-flick").classList.remove("none");
    backGroundForm = "api-flick";
}

import showGreeting from "./greetingShow.js";

showGreeting();

document.getElementById("git").checked = true;

let langRUN = document.querySelector(".language");
document.getElementById("en").checked = true;
// console.log(langRUN.value);

// console.log(document.getElementById("switch").checked)

// localStorage.clear()

function setLocalStorage() {
    const name = document.querySelector(".name");
    let city = document.querySelector(".city");
    let switc = [];
    switc[0] = document.getElementById("switch").checked;
    for (let i = 1; i < 6; i++) {
        switc[i] = document.getElementById(`switch${i}`).checked;
    }
    // console.log(switc);
    let photos = document.querySelector('input[name="api"]:checked').id;
    // console.log(photos);
    let input;
    if (photos.includes("api")) {
        input = document.querySelector(`.input-${photos}`).value;
    }
    // console.log(input);
    ;
    localStorage.setItem("name", name.value);
    localStorage.setItem("city", city.value);
    localStorage.setItem("lang", lang);
    localStorage.setItem("switc", switc);
    localStorage.setItem("photos", photos);
    localStorage.setItem("input", input);
}

// let  r = (document.querySelector('input[name="api"]:checked'))
// console.log(r.id)

// let swtc = [];
// swtc[0] = document.getElementById("switch").checked;
// for (let i = 1; i < 6; i++) {
//     swtc[i] = document.getElementById(`switch${i}`).checked;
// }
// console.log(swtc)

window.addEventListener("beforeunload", setLocalStorage);

// localStorage.clear()

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
    // console.log(localStorage.getItem("switc"));
    if (localStorage.getItem("switc")) {
        let switc = localStorage.getItem("switc").split(",");
        // console.log(switc);
        document.getElementById("switch").checked = JSON.parse(switc[0]);
        if (JSON.parse(switc[0])) {
            document.getElementById(`switch`).onclick();
        }
        for (let i = 1; i < 6; i++) {
            document.getElementById(`switch${i}`).checked = JSON.parse(
                switc[i]
            );
            if (JSON.parse(switc[i])) {
                document.getElementById(`switch${i}`).onclick();
            }
        }
    }
    if (localStorage.getItem("photos")) {
        backGroundForm = localStorage.getItem("photos");
        let photos = localStorage.getItem("photos");
        // console.log(photos);
        document.getElementById(localStorage.getItem("photos")).checked = true;
        // setBg(bgNum)
        document.getElementById(localStorage.getItem("photos")).onclick();
        if (localStorage.getItem("input") != "undefined") {
            document.querySelector(`.input-${photos}`).value =
                localStorage.getItem("input");
            document.querySelector(`.button-submit-${photos}`).onclick();
        }
    } else {
        setBg(bgNum);
    }
}

window.addEventListener("load", getLocalStorage);

import getRandomNum from "./randomNumGet.js";

window.changeVisibPlayer = changeVisibPlayer;

function changeVisibPlayer() {
    document.querySelector(".player").classList.toggle("hide");
    document.querySelector(".player").classList.toggle("appear");
}

window.changeVisibCitate = changeVisibCitate;
window.changeVisibDate = changeVisibDate;
window.changeVisibGreeting = changeVisibGreeting;
window.changeVisibTime = changeVisibTime;
window.changeVisibWeather = changeVisibWeather;

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
        let url;
        if (tagApiFlickNew != "")
            url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=87a9b11236cba2acb7861c36f7ab39bb&tags=${tagApiFlickNew}&extras=url_l&format=json&nojsoncallback=1`;
        else {
            url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=87a9b11236cba2acb7861c36f7ab39bb&tags=nature&extras=url_l&format=json&nojsoncallback=1`;
        }
        // console.log(url);
        // console.log(tagApiFlickNew);
        // console.log(bgNum);
        const res = await fetch(url);
        const data = await res.json();
        let r = parseInt(bgNum);
        // console.log(r);
        // console.log(data.photos.photo[r].url_l);
        document.querySelector(".warning-api-flick").classList.add("none");
        document
            .querySelector(".input-api-flick")
            .classList.remove("warning-input");
        tagApiFlick = tagApiFlickNew;
        return await data.photos.photo[r].url_l;
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
            // console.log(tagApiFlickNew);
            // console.log(bgNum);
            setBg();
        }
    });

document.querySelector(".input-api").addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        tagApiNew = document.querySelector(".input-api").value;
        // console.log(tagApiNew);
        // console.log(bgNum);
        setBg();
    }
});

window.submitApiFlick = submitApiFlick;

function submitApiFlick() {
    tagApiFlickNew = document.querySelector(".input-api-flick").value;
    // console.log(tagApiFlickNew);
    ;
    // console.log(bgNum);
    setBg();
    ;
}

window.submitApi = submitApi;

function submitApi() {
    tagApiNew = document.querySelector(".input-api").value;
    // console.log(tagApiNew);
    // console.log(bgNum);
    setBg();
}

// localStorage.clear();

async function getLinkToImageAPI() {
    try {
        let url;
        if (tagApiNew != "")
            url = `https://api.unsplash.com/photos/random?query=${tagApiNew}&client_id=PRWJMhoVxzNIMuMmp66jb7wKtFtV1kfdTNPLRfLlEC4`;
        else {
            url = `https://api.unsplash.com/photos/random?query=nature&client_id=PRWJMhoVxzNIMuMmp66jb7wKtFtV1kfdTNPLRfLlEC4`
        }
        // console.log(url);
        // console.log(tagApiFlickNew)
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data.urls.regular);
        document.querySelector(".warning-api").classList.add("none");
        document.querySelector(".input-api").classList.remove("warning-input");
        // tagApiFlick = tagApiFlickNew;
        tagApi = tagApiNew;
        return await data.urls.regular;
    } catch (e) {
        document.querySelector(".input-api").classList.add("warning-input");
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
        case "api-flick":
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

// setBg(bgNum);

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
    document.querySelector(".generalTitle").innerText = "Общие";
    document.querySelector(".photosTitle").innerText = "Фотографии";
    document.querySelector(".languageTitle").innerText = "Язык";
    document.querySelector(".title__choosing-api").innerText = "Выберите фото:";
    document.querySelector(".visibility__title").innerText =
        "Выберите элементы для скрытия:";
    document.getElementById("switch_content").textContent = "Плеер";
    document.getElementById("switch1_content").textContent = "Погода";
    document.getElementById("switch2_content").textContent = "Дата";
    document.getElementById("switch3_content").textContent = "Время";
    document.getElementById("switch4_content").textContent = "Приветствие";
    document.getElementById("switch5_content").textContent = "Цитата";
    document.getElementById("ru_text").innerText = "Русский";
    document.getElementById("en_text").innerText = "Английский";
    document.getElementById("all").innerText = "Все";
    document.getElementById("pending").innerText = "В работе";
    document.getElementById("completed").innerText = "Завершенные";
    document.querySelector(".clear-btn").innerText = "Очистить все";
    document.getElementById("input-text__plc").placeholder =
        "Добавьте новую задачу";
    // document.getElementById('en').checked = true
    // console.log(lang);
    if (city.value == 'Minsk') {
        city.value = cityLang[lang]
    }
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
    document.querySelector(".generalTitle").innerText = "General";
    document.querySelector(".photosTitle").innerText = "Photos";
    document.querySelector(".languageTitle").innerText = "Language";
    document.querySelector(".title__choosing-api").innerText = "Choose image:";
    document.querySelector(".visibility__title").innerText =
        "Choose to turn off elements:";
    document.getElementById("switch_content").textContent = "Player";
    document.getElementById("switch1_content").textContent = "Weather";
    document.getElementById("switch2_content").textContent = "Date";
    document.getElementById("switch3_content").textContent = "Time";
    document.getElementById("switch4_content").textContent = "Greeting";
    document.getElementById("switch5_content").textContent = "Quote";
    document.getElementById("ru_text").innerText = "Russian";
    document.getElementById("en_text").innerText = "English";
    document.getElementById("all").innerText = "All";
    document.getElementById("pending").innerText = "Pending";
    document.getElementById("completed").innerText = "Completed";
    document.querySelector(".clear-btn").innerText = "Clear All";
    document.getElementById("input-text__plc").placeholder = "Add a new task";
    // document.getElementById('en').checked = true
    // console.log(lang);
    if (city.value == 'Минск') {
        city.value = cityLang[lang]
    }
}

import {} from "./todoList.js";


console.log('Часы и календарь +15\n\
время выводится в 24-часовом формате, например: 21:01:00 +5\n\
время обновляется каждую секунду - часы идут. Когда меняется одна из цифр, остальные при этом не меняют своё положение на странице (время не дёргается) +5\n\
выводится день недели, число, месяц, например: "Воскресенье, 16 мая" / "Sunday, May 16" / "Нядзеля, 16 траўня" +5\n\
Язык и формат вывода даты определяется языком приложения.\n\
при изменении дня недели, даты, месяца эти данные меняются в приложении (в ходе кросс-чека этот пункт не проверяется)\n\
Приветствие +10\n\
текст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь) +5\n\
с 6:00 до 11:59 - Good morning / Доброе утро \n\
с 12:00 до 17:59 - Good afternoon / Добрый день \n\
с 18:00 до 23:59 - Good evening / Добрый вечер\n\
с 00:00 до 5:59 - Good night / Доброй/Спокойной ночи\n\
при изменении времени суток, если в это время приложение открыто, меняется текст приветствия (в ходе кросс-чека этот пункт не проверяется)\n\
пользователь может ввести своё имя. При перезагрузке страницы приложения имя пользователя сохраняется, данные о нём хранятся в local storage +5\n\
Смена фонового изображения +20\n\
При загрузке или перезагрузке приложения фоновое изображение выбирается из расположенной на GitHub коллекции изображений.\n\
Репозиторий с изображениями необходимо форкнуть, и использовать изображения форкнутого репозитория, а не школьного.\n\
Сами изображения желательно оптимизировать, например, конвертировать в формат WebP с целью уменьшения веса и увеличения скорости загрузки.\n\
Также можно использовать свою собственную коллекцию изображений.\n\
Скачать картинки на компьютер и использовать локальные файлы нельзя.\n\
ссылка на фоновое изображение формируется с учётом времени суток и случайного номера изображения (от 01 до 20) +5\n\
Пример ссылки на фоновое изображение: https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg, здесь\n\
evening - время суток, другие значения afternoon, morning, night\n\
18 - рандомный (случайный) номер изображения, от 01 до 20.\n\
изображения можно перелистывать кликами по стрелкам, расположенным по бокам экрана.\n\
изображения перелистываются последовательно - после 18 изображения идёт 19 (клик по правой стрелке), перед 18 изображением идёт 17 (клик по левой стрелке) +5\n\
изображения перелистываются по кругу: после двадцатого изображения идёт первое (клик по правой стрелке), перед 1 изображением идёт 20 (клик по левой стрелке) +5\n\
при смене слайдов важно обеспечить плавную смену фоновых изображений. Не должно быть состояний, когда пользователь видит частично загрузившееся изображение или страницу без фонового изображения. Плавную смену фоновых изображений не проверяем: 1) при загрузке и перезагрузке страницы 2) при открытой консоли браузера 3) при слишком частых кликах по стрелкам для смены изображения +5\n\
Виджет погоды +15\n\
город по умолчанию - Минск, пока пользователь не ввёл другой город\n\
при перезагрузке страницы приложения указанный пользователем город сохраняется, данные о нём хранятся в local storage +5\n\
для указанного пользователем населённого пункта выводятся данные о погоде, если их возвращает API\n\
данные о погоде включают в себя: иконку погоды, описание погоды, температуру в °C, скорость ветра в м/с, относительную влажность воздуха в %. Числовые параметры погоды округляются до целых чисел +5\n\
выводится уведомление об ошибке при вводе некорректных значений, для которых API не возвращает погоду (пустая строка или бессмысленный набор символов) +5\n\
Виджет цитата дня +10\n\
при загрузке страницы приложения отображается рандомная цитата и её автор +5\n\
В качестве источника цитаты можно использовать как API, так и созданный вами или найденный в интернете JSON-файл с цитатами и их авторами. API с цитатами не отличаются надёжностью и долговечностью, используемый в качестве источника цитат собственный JSON-файл гарантирует работоспособность вашего приложения. Запросы к JSON также осуществляются асинхронно, таким образом необходимые знания о работе с асинхронными запросами вы получите\n\
при перезагрузке страницы цитата обновляется (заменяется на другую). Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +5\n\
Аудиоплеер +15\n\
при клике по кнопке Play/Pause проигрывается первый трек из блока play-list, иконка кнопки меняется на Pause +3\n\
при клике по кнопке Play/Pause во время проигрывания трека, останавливается проигрывание трека, иконка кнопки меняется на Play +3\n\
треки можно пролистывать кнопками Play-next и Play-prev\n\
треки пролистываются по кругу - после последнего идёт первый (клик по кнопке Play-next), перед первым - последний (клик по кнопке Play-prev) +3\n\
трек, который в данный момент проигрывается, в блоке Play-list выделяется стилем +3\n\
после окончания проигрывания первого трека, автоматически запускается проигрывание следующего. Треки проигрываются по кругу: после последнего снова проигрывается первый. +3\n\
Для удобства проверки треки возьмите небольшой продолжительности. Обрезать треки можно здесь: https://mp3cut.net/ru/\n\
плейлист генерируется средствами JavaScript (в ходе кросс-чека этот пункт не проверяется)\n\
Продвинутый аудиоплеер (реализуется без использования библиотек) +20\n\
примерные внешний вид и функциональность плеера https://howlerplayer.github.io/\n\
добавлен прогресс-бар в котором отображается прогресс проигрывания +3\n\
при перемещении ползунка прогресс-бара меняется текущее время воспроизведения трека +3\n\
над прогресс-баром отображается название трека +3\n\
отображается текущее и общее время воспроизведения трека +3\n\
есть кнопка звука при клике по которой можно включить/отключить звук +2\n\
добавлен регулятор громкости, при перемещении ползунка регулятора громкости меняется громкость проигрывания звука +3\n\
можно запустить и остановить проигрывания трека кликом по кнопке Play/Pause рядом с ним в плейлисте +3\n\
Перевод приложения на два языка (en/ru или en/be) +15\n\\n\
Для перевода приложения может использоваться библиотека, например, i18n или аналогичная.\n\
переводится язык и меняется формат отображения даты +3\n\
переводится приветствие и placeholder +3\n\
переводится прогноз погоды в т.ч описание погоды (OpenWeatherMap API предоставляет такую возможность) и город по умолчанию +3\n\
переводится цитата дня (используйте подходящий для этой цели API, возвращающий цитаты на нужном языке или создайте с этой целью JSON-файл с цитатами на двух языках) +3\n\
переводятся настройки приложения. При переключении языка приложения в настройках, язык настроек тоже меняется +3\n\
не переводятся данные, которые вводит пользователь: имя, город, тег для получения фонового изображения от API\n\
Получение фонового изображения от API +10 Пункт считается выполненным, если фоновые изображения, полученные от API, отвечают требованиям к фоновым изображениям, указанным в пункте 3: их можно перелистывать кликами по стрелкам, обеспечивается плавная смена фоновых изображений, ссылка на фоновое изображение формируется с учётом времени суток, если пользователь не указал другие теги для их получения. Не проверяем и не реализуем последовательное перелистывание изображений и перелистывание изображений по кругу.\n\
в качестве источника изображений может использоваться Unsplash API +5\n\
в качестве источника изображений может использоваться Flickr API +5\n\
Настройки приложения +20\n\
в настройках приложения можно указать язык приложения (en/ru или en/be) +3\n\
в настройках приложения можно указать источник получения фото для фонового изображения: коллекция изображений GitHub, Unsplash API, Flickr API +3\n\
если источником получения фото указан API, в настройках приложения можно указать тег/теги, для которых API будет присылает фото +3\n\
Например, nature - фото про природу\n\
в настройках приложения можно скрыть/отобразить любой из блоков, которые находятся на странице: время, дата, приветствие, цитата дня, прогноз погоды, аудиоплеер, список дел/список ссылок/ваш собственный дополнительный функционал +3\n\
скрытие и отображение блоков происходит плавно, не влияя на другие элементы, которые находятся на странице, или плавно смещая их +3\n\
настройки приложения сохраняются при перезагрузке страницы +5\n\
Дополнительный функционал на выбор +10\n\
Достаточно выполнить только один из предложенных пунктов на ваш выбор.\n\
ToDo List - список дел (как в оригинальном приложении) +10')
