// Använd XMLHttpRequest

// 1
// Skapa en textfil i aktuell mapp
// exempelvis en fil men namnet 'info.txt'

// 2
// Skapa dynamiskt en knapp som på ngt sätt
//  anger att filen ska håmtas

const button = document.createElement("button");
button.textContent = "Dubbelklicka för att läsa filen ";
document.body.appendChild(button);



// 3
// Lägg till en händelselyssnare för knappen
// När man dubbelklickar på knappen
// ska filen hämtas via XMLHttpRequest
// ...och innehållet ska visas ... var

button.addEventListener("dblclick", () => {
    console.log("dblklick...");

    // XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // med metoden open() anges parametrar: metod (ex GET) samt url
    xhr.open("GET", "info.txt");

    // lyssna på event 'load'
    xhr.addEventListener("load", (e) => {
        console.log("e", e);

        // hantera xhr properties, ex status, responseText 
        // const content = xhr.responseText;
        // console.log("content", content);

        // om xhr.status returnerar 200 finns filen 
        // - läs innehållet efter en sådan kontroll
        console.log("status:", xhr.status, xhr.statusText);

        if (xhr.status === 200) {
            const content = xhr.responseText;
            console.log("content", content);   
            
            // uppgift:
            // anropa en egen metod / funktion som kan visa innehållet
            // på DOM:en
            // om metoden hette render...
            render(content); 
        }
    });

    // med metoden send() initieras en request
    xhr.send();
});

function render(text) {
    const p = document.createElement("p");
    p.innerHTML = text;
    document.body.appendChild(p);
}