const messages = [
    "oscar",
    "diego",
    "laura",
    "eduardo",
    "caro",
    "paulina",
    "camila"
];
const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
};
module.exports = {randomMsg};