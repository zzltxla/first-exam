// -- 3 --
// Afficher toutes les tables de multiplication des nombres pairs uniquement entre 10 et 20 (inclus)

let number = 10;

while (number < 30) {
    number++;
    for (i = number; i <= 30; i++) {
        if (number % 2 == 0) {
            for (let i = 1; i <= 10; i++) {
                let result = i * number;
                console.log(result);
            }
        } else {
            break;
        }
    }
}