/*
    Ecrire une fonction "isAllEven",
    qui prend un paramètre un tableau de nombre,
    et qui retourne un nombre:
        - 1 si tous les nombres du tableau sont pair
        - 0 si au moins un nombre du tableau est impair

    CRITERE DE VALIDATION OBLIGATOIRE
    --> Réutiliser la fonction isEven
        que vous aviez codé dans les exercices précédents ;)
        INTERDICTION d'écrire le contenu de isEven dans la même fonction
        Vous devez donc bien avoir 2 fonctions différentes;

*/

//  écrire votre code sous ce commentaire
let tableau = []
function isAllEven(tableau) {
  let nombre = 0
  for (let i = 0; i < tableau.length; i++) {
  nombre = nombre + tableau[i];}
  if (nombre % 2 == 0) {
    return 1; 
  } else {
    return 0;
  }
}
  

/*
  Test 1
  Résultat attendu : 0
*/

console.log(isAllEven([4, 5, 6]));

/*
  Test 2
  Résultat attendu : 1
*/

console.log(isAllEven([4, 4, 6, 8, 10, 12]));

/* DO NOT TOUCH */
module.exports = {
  isAllEven: isAllEven
}
