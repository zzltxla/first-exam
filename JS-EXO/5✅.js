// -- 5 --
// Créer une fonction qui convertit n'importe quelle monnaie (avec le taux de change en paramètre) en Euros

let usr = prompt("Please type in the amount of money you want to exchange (USD to Euros)");
let euro = 1.06;

function moneyChange() {
    let amount = usr / euro;
    alert(usr + " USD is equal to " + parseFloat(amount) + " €");
}
moneyChange();