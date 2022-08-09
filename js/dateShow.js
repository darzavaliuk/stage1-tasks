export default function showDate() {
    const dat = document.querySelector(".date");
    const date = new Date();
    const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    };
    const currentDate = date.toLocaleDateString(`${lang}-Br`, options);
    dat.textContent = currentDate;
    setTimeout(showDate, 10);
}
