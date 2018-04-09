/*
  Entraînement Array.prototype.every

  Ecrire une fonction "verifyHumans"
  qui permet de cérifier si toutes les personnes présentes font au moins 1m60

  Prototype:
      bool verifyHumans(_arr);
*/

//  écrire votre code sous ce commentaire

// function verifyHumans(people) {
//   const sizes = []
//   for (let item of people){
//     sizes.push(item.size.split("m").join("."))
//   }
//   const resultat = sizes.every(taille => taille > 1.60)
//   return resultat
// }

function getPersonSize(person) {
  return person.size.split("m").join(".")
}

function verifyHumans(people) {
  return people.every(person => getPersonSize(person) > 1.60)
}

/*
  Test 1
  Résultat attendu : trueperson
*/


console.log(verifyHumans([{name: 'John', size: '1m80'}, {name: 'Patrick', size: '1m75'}, {name: 'Marie', size: '1m68'}]));

/*
  Test 2
  Résultat attendu : false
*/

verifyHumans([{name: 'John', size: '1m80'}, {name: 'Nicolas', size: '1m55'}, {name: 'Marie', size: '1m68'}]);

/* DO NOT TOUCH */
module.exports = {
  verifyHumans: verifyHumans
}
