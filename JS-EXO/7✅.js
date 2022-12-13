// -- 7 --
// Créer une fonction qui prend une string en paramètre et la renvoie à l'envers

function backwards (str) {
    let strArr = str.split('');
    let reversed  = strArr.reverse();
    let reversedStr = reversed.toString();
    console.log(reversedStr. replaceAll(',', ''));
}
backwards();