// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Declare variables for the form elements and their values.
var synth = window.speechSynthesis;
var speakButton = document.querySelector('button');

/* Arrays */
var ONE = ["turn around", "laugh", "reach for the sky", "clap", "stick out your tongue", "say your name"];
var TWO = ["once", "two times", "three times", "four times", "five times"];
var THREE = ["rub", "shake", "ticke", "touch", "twist", "pat"];
var FOUR = ["toes", "ears", "tummy", "hair", "nose"];
var FIVE = ["march", "make a funny face", "say meow", "yell surprise", "blink", "walk like a monster"];

/* Functions
-------------------------------------------------- */
function speakNow(string) {
    // Create a new speech object, attaching the string of text to speak
    var utterThis = new SpeechSynthesisUtterance(string);
    // Actually speak the text
    synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.addEventListener('mousedown', function() {
    var randomNoun = ONE[Math.floor(Math.random() * ONE.length)];
    speakNow(randomNoun);
});

speakButton.addEventListener('mouseup', function() {
    synth.cancel(); 
});

document.getElementById("btn1").addEventListener("click", function() {
    var randomWord = ONE[Math.floor(Math.random() * ONE.length)];
    speakNow(randomWord);
});

document.getElementById("btn2").addEventListener("click", function() {
    var randomWord = TWO[Math.floor(Math.random() * TWO.length)];
    speakNow(randomWord);
});

document.getElementById("btn3").addEventListener("click", function() {
    var randomWord = THREE[Math.floor(Math.random() * THREE.length)];
    speakNow(randomWord);
});

document.getElementById("btn4").addEventListener("click", function() {
    var randomWord = FOUR[Math.floor(Math.random() * FOUR.length)];
    speakNow(randomWord);
});

document.getElementById("btn5").addEventListener("click", function() {
    var randomWord = FIVE[Math.floor(Math.random() * FIVE.length)];
    speakNow(randomWord);
});
