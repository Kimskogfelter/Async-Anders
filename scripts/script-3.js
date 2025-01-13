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

        // spara id så att intervallet kan avbrytas 
        let id = setInterval(() => {

            // slumpat värde för antal graders rotation...
            const r = Math.floor(Math.random() * 360);

            // påverka utseendet på elementet spanDice
            spanDice.style.transform = `rotateZ(${r}deg)`;
            // console.log("tick");

            // hur kan man sen få värdet i span elementet att påverkas?
            // ett utav talen 123456 - en array ....
            const numbers = [1,2,3,4,5,6];

            // ett av talen kan fås genom att ange index: positionen 
            // ex så ger följande värdet 2 eftersom en array är 0 index baserad
            // numbers[1] 
            spanDice.textContent = numbers[Math.floor(Math.random() * 6)];
        }, 1000 / 60);

        setTimeout(() => {
            
            // svaret ska ett heltal mellan 1  och 6 
            // stegvis...
            // ett slumptal mellan 0 och 1
            // let randomNumber = Math.random(); 

            // omvandla talet så att det kan avrundas till ett heltal mellan 1 och 6
            // randomNumber = randomNumber * 6;

            // avrunda uppåt till närmsta heltal med Math.ceil()
            // resolve(Math.ceil(randomNumber));
            // resolve(2);

            // som en enrads kod...
            const value = Math.ceil(Math.random() * 6);
            resolve(value);

            // avbryt intervallet
            clearInterval(id);

            // manuellt ange vilket värdet blev så att det överensstämmer med
            // tärningen
            spanDice.textContent = value;


        }, Math.random() * 1000);
        
    })
}

// en promise baserad funktion hanteras med nyckelordet 'then'
dice().then((value) => {
    console.log(`... ${value}`);
    const p = document.createElement("p");
    p.textContent = `Tärningen ovan visar ${value}`;
    document.body.appendChild(p);
});