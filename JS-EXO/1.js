// -- 1 --
// Afficher tous les nombres pairs entre 30 et 75 (inclus)

function evenBetween () {
    for (let i = 30; i <= 75; i++) {
        if (i % 2 === 0) {
            console.log(i);
        };
    };
}
evenBetween();