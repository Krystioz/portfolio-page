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
    // makes the letters not separated by comma
    textDisplay.innerHTML = currentPhrase.join("");
    // if there are things in the array - loop
    if (i < phrases.length) {
        // loop over word, if there are letters in the word - push them to tag inner text
        if (!isDeleting && x <= phrases[i].length) {
            currentPhrase.push(phrases[i][x]);
            x++;
            textDisplay.innerHTML = currentPhrase.join("");
        }
        // is deleting true and x smaller or equal words length start removing letters from tag inner text
        if (isDeleting && x <= phrases[i].length) {
            currentPhrase.pop(phrases[i][x]);
            x--;
        }
        // if we reached to the end of the word set variable to true
        if (x == phrases[i].length) {
            ifEnd = true;
            isDeleting = true;
        }
        //if we looped over one phrase move to the next one
        if (isDeleting && x === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            // if we reached the end of phrases in the array, set i to 0 and loop again
            if (i == phrases.length) {
                i = 0;
            }
        }
        // set various speeds if variables boolean value is true
        const speedUp = Math.random() * (80 - 50) + 50;
        const normalSpeed = Math.random() * (300 - 200) + 200;
        const time = ifEnd ? 2000 : isDeleting ? speedUp : normalSpeed;
        setTimeout(typeLoop, time);
    }
}
typeLoop();
