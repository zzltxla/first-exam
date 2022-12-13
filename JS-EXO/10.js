// -- 10 -- 
// Créer une fonction qui met la première lettre de chaque mot d'un texte en majuscules

function capLetter (str) {
    let firstChar = str.charAt(0);
    let strWithoutFirst = str.substring(1);
    let result = firstChar.toUpperCase();
    console.log(result += strWithoutFirst);
}
capLetter();