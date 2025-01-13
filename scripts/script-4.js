// HTML struktur
// 1 skapa knapp
const button = document.createElement("button");
button.textContent = "Hämta data med fetch";
button.addEventListener("click", buttonClick);
document.body.appendChild(button);


// 2 skapa element för att visa innehåll
const ul = document.createElement("ul");
document.body.appendChild(ul);



// event lyssnare - funktioner
function buttonClick(e) {
    console.log("click");

    // använd fetch API 
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

    // const url = "info.txt";
    const url = "info.json";

    // här anges ett tomt objekt som en parameter efter url
    // objektet kan innehålla ex request metod (förvalt 'GET'), api nyckel etc...
    fetch(url, {})
        // OBS - om innehållet är i json format kan metoden json() användas
        // om innhållet inte är i json format uppstår ett fel...  
        // vid behov testa att använda metoden text() istället för josn() 
        .then(response => response.json())
        .then((data) => {
            console.log("data", data);

            // om metoden json() används i responsen ovan så ska data hanteras som
            // ett objekt i JavaScript, dvs metoden använder internt JSON.parse()
            // att använda ett API innebär att man måste läsa dokumentation av hur
            // data tillhandahålls, ex som en array av objekt eller inte...

            // här bör man kontrollera datatyper för att ta höjd för hur man väljer att visualisera ngt

            if (Array.isArray(data)) {
                // ul.textContent = `Landet ${data[0].country} har ${data[0].population} invånare`;

                const countries = data;

                // foreach
                countries.forEach(country => {
                    renderLi(country.country, country.population);
                });

            } else {
                // ul.textContent = `Landet ${data.country} har ${data.population} invånare`;
                renderLi(data.country, data.population);
            }


        }).catch((error) => {
            console.log("error", error);
            div.textContent = "Det gick inte att hantera den data som gavs..."
        }).finally(() => {
            console.log("Metoden fetch har använts");
        });
}


// funktioner
function renderLi(country, population) {

    // skapa ett li element
    const li = document.createElement("li");

    // presentera resultatet i li elementet
    li.textContent = `Landet ${country} har ${population} invånare`;

    // visa på sidan
    ul.appendChild(li);
}