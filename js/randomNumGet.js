export default function getRandomNum() {
    let bgNum = Math.floor(Math.random() * 19 + 1);
    bgNum += "";
    if (bgNum.length < 2) bgNum = "0" + bgNum;
    return bgNum;
}
