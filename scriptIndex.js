const textDisplay = document.getElementById("text");
const phrases = [
    "I'm happy to have you on my site today ! ",
    "Please have a look around ",
    "Be sure to check the about section !",
    "Try grabbing the photo there ",
];
let currentPhrase = [];
let isDeleting = false;

let i = 0;
let x = 0;

function typeLoop() {
    ifEnd = false;
    textDisplay.innerHTML = currentPhrase.join("");
    if (i < phrases.length) {
        if (!isDeleting && x <= phrases[i].length) {
            currentPhrase.push(phrases[i][x]);
            x++;
            textDisplay.innerHTML = currentPhrase.join("");
        }
        if (isDeleting && x <= phrases[i].length) {
            currentPhrase.pop(phrases[i][x]);
            x--;
        }
        if (x == phrases[i].length) {
            ifEnd = true;
            isDeleting = true;
        }
        if (isDeleting && x === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i == phrases.length) {
                i = 0;
            }
        }
        const speedUp = Math.random() * (80 - 50) + 50;
        const normalSpeed = Math.random() * (300 - 200) + 200;
        const time = ifEnd ? 2000 : isDeleting ? speedUp : normalSpeed;
        setTimeout(typeLoop, time);
    }
}
typeLoop();
