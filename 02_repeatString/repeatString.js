const number = Math.floor(Math.random() * 1000);
const word = "hey";
let times = number;

const repeatString = (word, times) => {
    if (times < 0)
        return "ERROR";
    let string = "";
    for (let i = 0; i < times; i++) {
        string += word;
    }
    return string;
}


// Do not edit below this line
module.exports = repeatString;
