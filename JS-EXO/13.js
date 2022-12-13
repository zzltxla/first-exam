// -- 13 --
// Créer une fonction qui demande à l'utilisateur son age et lui indique dans combien d'années il aura 100 ans

function age () {
    let user = prompt('How old are you ?');
    let result = 100 - user;
    alert(result);
}
age();