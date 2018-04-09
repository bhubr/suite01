/*
    Ecrire une fonction "boostedAddition",
    qui prend un paramètre un tableau de nombre,
    et qui retourne un nombre étant l'addition de tous les nombre du tableau

*/

//  écrire votre code sous ce commentaire
let tableau = []
function boostedAddition(tableau){
	let resultat = 0
	for (let i = 0; i < tableau.length ; i++) {
		resultat = resultat + tableau[i]
	}
	return resultat
}

/*
  Test 1
  Résultat attendu : 15
*/

boostedAddition([4, 5, 6]);
console.log(boostedAddition([4,5,6]))

/*
  Test 2
  Résultat attendu : 44
*/
boostedAddition([4, 4, 6, 8, 10, 12]);
console.log(boostedAddition([4, 4 , 6 , 8 , 10, 12]))

/* DO NOT TOUCH */
module.exports = {
  boostedAddition: boostedAddition
}
