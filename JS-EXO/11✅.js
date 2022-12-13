// -- 11 --
// Créer une fonction qui compte le nombre de fois un caractère passé en argument est trouvé dans une string lui aussi passé en argument
// Ex : countChar("Hello World!", "l") => 3

function countCharacter (str) {
    console.log((str.match(/n/g).length));
}
countCharacter();