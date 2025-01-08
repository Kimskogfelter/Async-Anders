// Använd XMLHttpRequest

// 1
// skapa en textfil i aktuell mapp
// exempelvis en fil med namnet info.txt

// 2
// skapa en knapp som anger att filen ska hämtas

let button = document.createElement("button");
button.textContent = "Hämta fil";
document.body.appendChild(button);

// 3
// lägg till en händelselyssnare för knappen
// när man dubbelklickar på knappen
// ska filen hämtas via XMLHttpRequest
// ... och innehållet ska visas ... var

button.addEventListener("dblclick")