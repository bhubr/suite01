/*
  Entraînement Array.prototype.every

  Ecrire une fonction "verifyHumans"
  qui permet de cérifier si toutes les personnes présentes font au moins 1m60

  Prototype:
      bool verifyHumans(_arr);
*/

//  écrire votre code sous ce commentaire
//const verifyHumans = (arr) => {
 //const tableau = arr.size.split();
  //return tableau
//}

function notM(objet) {
  return objet.size.split("m").join(".")  
}
 function verifyHumans(tableau) {
   return tableau.every(objet => notM(objet) >= 1.60)
   
}





// split et join 
//every
//return
/*
  Test 1
  Résultat attendu : true
*/

console.log(verifyHumans([{name: 'John', size: '1m80'}, {name: 'Patrick', size: '1m75'}, {name: 'Marie', size: '1m68'}]));

/*
  Test 2
  Résultat attendu : false
*/

console.log(verifyHumans([{name: 'John', size: '1m80'}, {name: 'Nicolas', size: '1m55'}, {name: 'Marie', size: '1m68'}]));

/* DO NOT TOUCH */
// module.exports = {
//   verifyHumans: verifyHumans
// }
