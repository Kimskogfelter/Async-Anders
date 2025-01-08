// laboration 1
// ----------------------------------------

// console.log("Hello world");

// lyssna på event som anger om sidan är klar...
window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM inläst och redo för ev manipulering...");
});

// oavsett var följande rad placeras så loggas den innan DOMContentLoaded 
console.log("Hello world");



// laboration 2
// ----------------------------------------

console.log("vinter");


// setTimeout - ange en tid i antal ms efter kodblocket

// med nyckelordet 'function':  function() {}
setTimeout(function() {
    console.log("vår");
}, 1000);

// som en arrow function: () => {}
setTimeout(() => {
    console.log("sommar");
}, 900);

console.log("höst");

// uppgift: kör en kod - ex console.log() efter 2 minuter
setTimeout(() => {
    console.log("En paus på 2 minuter");
}, 1000 * 60 * 2);

// för att avbryta setTimeout tar man hand om det unika id som ...
// genereras när metoden körs 

const id = setTimeout(() => {
    console.log("En paus på 10 sekunder");
}, 10000);

// skapa en knapp dynamiskt som kan avbryta en metod som setTimeout
// metoden heter clearTimeout, och ska ange id som parameter
const button = document.createElement("button");
button.textContent = "Avbryt timeout";

// Uppgift: lägg till en händelselyssnare som avbryter koden...!
button.addEventListener("click", () => {
    clearTimeout(id);

    // visuellt - ange attributet disabled
    button.setAttribute("disabled", true);
    button.textContent = "Kod avbruten - ladda om sidan igen";
});


document.body.appendChild(button);