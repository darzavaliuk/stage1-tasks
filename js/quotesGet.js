export default async function getQuotes() {
    let coef = { EN: 40, RU: 10 };
    let quot = "data" + lang + ".json";
    const quote = document.querySelector(".quote");
    const author = document.querySelector(".author");
    const res = await fetch(quot);
    const data = await res.json();
    let rand = Math.floor(Math.random() * coef[lang]);
    quote.textContent = data.quotes[rand].quote;
    author.textContent = data.quotes[rand].author;
}