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
    if ((hours > 5) && (hours < 12))
        return 'morning'
    else if (hours > 11 && hours < 18)
        return 'afternoon'
    else if (hours > 17 && hours < 24)
        return 'evening'
    else
        return 'night'
}

showGreeting()

function setLocalStorage() {
    const name = document.querySelector('.name')
    // if (name != underfined)
    localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    const name = document.querySelector('.name')
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage)
