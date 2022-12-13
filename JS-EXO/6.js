// -- 6 --
// Calculer la moyenne de chiffres provenant d'un array

function sumOfArray (arr) {
    let sum = 0;
    arr.forEach((element) => sum += element);
    let result  = ( sum / arr.length);
    console.log(result);
}
sumOfArray();