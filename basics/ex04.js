/*
    Ecrire une fonction "isEven",
    qui prend un paramètre un nombre,
    et qui retourne un nombre:
        - 1 si le nombre est pair
        - 0 si le nombre est impair

*/

// Reste de la division de 8 par 5
console.log(8 % 5)
// Reste de la division de 6 par 2
console.log(6 % 2)
// Reste de la division de 5 par 2
console.log(5 % 2)

//  écrire votre code sous ce commentaire
function isEven(nombre) {
  if (nombre % 5 == 0) {
    return 1
  }
  else {
    return 0
  }
}

/*
  Test 1
  Résultat attendu : 1
*/

isEven(6);
console.log(isEven(6))

/*
  Test 2
  Résultat attendu : 0
*/

isEven(5);
console.log(isEven(5))

/* DO NOT TOUCH */
module.exports = {
  isEven: isEven
}
