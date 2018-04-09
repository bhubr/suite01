/*
  Entraînement Array.prototype.filter

  Ecrire une fonction "filterEvenNumbers"
  qui permet de filtrer un tableau d'entiers (positifs) passé en paramètre
  et de retourner la liste des nombres pairs de ce tableau.

  Prototype:
      arr filterEvenNumbers(arr);
*/

//  écrire votre code sous ce commentaire
function filterEvenNumbers(tableau) {
  const nombresPair = tableau.filter(objet => objet % 2 === 0)
  return nombresPair
}
/*
  Test 1
  Résultat attendu : [2, 6, 8]
*/

console.log(filterEvenNumbers([2, 5, 6, 8]));

/*
  Test 2
  Résultat attendu : []
*/

console.log(filterEvenNumbers([1, 3, 5, 7]));

/*
  Test 3
  Résultat attendu : [0, 8]
*/

console.log(filterEvenNumbers([0, 3, 8, 11]));


/* DO NOT TOUCH */
module.exports = {
  filterEvenNumbers: filterEvenNumbers
}
