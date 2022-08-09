export default function showTime() {
    const time = document.querySelector(".time");
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
}
