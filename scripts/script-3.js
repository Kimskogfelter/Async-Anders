const spanDice = document.getElementById("dice");


console.log("Promise...ett löfte om ngt framtida...");

function flipCoin() {

    // const random = Math.random();
    // console.log("random", random);

    // const result = Math.random() < 0.5 ? "krona" : "klave";
    return Math.random() < 0.5 ? "krona" : "klave";
    // return result;
}

// flipCoin();

const result = flipCoin();
console.log("Krona eller klave...:", result);

// Uppgift
// Se om ni kan göra ett förslag på funktionen ovan som har färre rader kod

let counter = 60 * 5;
setInterval(() => {
    counter--;

    if (counter % 10 === 0) {
        // console.log(`${counter}sekunder kvar`)
    }
    // console.log(counter);
}, 1000)

// Uppgift
// använd funktionen flipCoin och visa en bild på sidan (DOM:n) som
// motsvarar vad slumpen gav...
// kanske en funktion som renderar till DOM

// Daniels förslag
function flipCoin3() {
    const div = document.createElement("div");
    const random = Math.random();

    if (random > 0.5) {
        div.innerHTML = `<p>Krona:</p><img src="https://www.slumpgenerator.se/krona-klave/krona.png">`;
    } else {
        div.innerHTML = `<p>Klave:</p><img src="https://www.slumpgenerator.se/krona-klave/klave.png">`
    }
    document.body.appendChild(div);
}
flipCoin3();

// En tärning

// funktion som använder Promise object - hanteras med nyckelordet 'then' 
function dice() {
    return new Promise((resolve, reject) => {

        console.log("Tärningen visar...");

        // simulera...
        setInterval(() => {

            // påverka utseendet på elementet spanDice

        }, 1000 / 60);

        setTimeout(() => {
            resolve(2);
        }, Math.random() * 3000);
        
    })
}

dice().then((value) => {
    console.log(`... ${value}`);
});

// Uppgift: istället för att funktionen dice ger ett resultat efter en bestämd tid
// ... ange ett slumvärde: 2000ms ... 1432ms ... 405ms ... 5703ms ...

// simulera att tärningen spinner i väntan på ett resultat

// Uppgift: fortsätt koda tärningen som snurrar