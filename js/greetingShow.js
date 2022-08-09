let morning = { EN: "morning", RU: "Доброе утро" };
let afternoon = { EN: "afternoon", RU: "Добрый день" };
let evening = { EN: "evening", RU: "Добрый вечер" };
let night = { EN: "night", RU: "Доброй ночи" };

function getTimeOfDay(hours, lang) {
    //console.log(hours)
    if (hours > 5 && hours < 12) return morning[lang];
    else if (hours > 11 && hours < 18) return afternoon[lang];
    else if (hours > 17 && hours < 24) return evening[lang];
    else if (hours > 23 || hours < 6) return night[lang];
}

export default function showGreeting() {
    const greet = document.querySelector(".greeting");
    const date = new Date();
    const hours = date.getHours();
    const timeOfDay = getTimeOfDay(hours, lang);
    const greeting = { EN: `Good ${timeOfDay}`, RU: `${timeOfDay}` };

    const greetingText = greeting[lang];
    greet.textContent = greetingText;
    setTimeout(showGreeting, 1000);
}
