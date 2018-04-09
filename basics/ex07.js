/*
    Ecrire une fonction "boostedAddition",
    qui prend un paramètre un tableau de nombre,
    et qui retourne un nombre étant l'addition de tous les nombre du tableau

*/

//  écrire votre code sous ce commentaire
function boostedAddition(tabl) {
	// const nb = tabl.length
	let somme = 0
	for (nombre of tabl ){
		somme += nombre
	}

	// for (i=0; i<nb; i++){
	// 	somme += tabl[i]
	// }
	return somme;

	// body...
}


/*
  Test 1
  Résultat attendu : 15
*/

boostedAddition([4, 5, 6]);

/*
  Test 2
  Résultat attendu : 44
*/
boostedAddition([4, 4, 6, 8, 10, 12]);

/* DO NOT TOUCH */
module.exports = {
  boostedAddition: boostedAddition
}
