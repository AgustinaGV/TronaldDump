//Declaro mi constante "handler", que busca en mi HTML el <p> donde voy a colocar las frases de Trump;
const $quotes = document.getElementById("quotesTrump");

//Modifico HTML;
//$quotes.innerHTML = "red";

//Llamado a API;

const getData = async () => {

    const baseURL = 'https://www.tronalddump.io/random/quote';
    const response = await fetch(baseURL);
    const quotes = await response.json();
    return quotes;
}

const getQuote = async () => {

    const quote = await getData();
}

const trumpSays = async () => {

    try {
        const trump = await getData();
        const trumpQuote = trump.value;
        $quotes.innerHTML = '';
        $quotes.innerHTML = trumpQuote;
        console.log(trumpQuote);
    }
    catch (error) {
        console.log(error);
    }
}

const boton = document.getElementById('botonPrueba');
boton.addEventListener("click", function () {
    console.log("click");
    getQuote();
    trumpSays();
})

getQuote();
trumpSays();