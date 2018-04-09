/*
  Entraînement Array.prototype.find

  Ecrire une fonction "findYellowFruit"
  qui permet de trouver le 1er fruit jaune d'un tableau de fruits passé
  en paramètre. Cette fonction retournera le nom du fruit en question.

  Prototype:
      arr findYellowFruit(arr);
*/

//  écrire votre code sous ce commentaire
function findYellowFruit(AnArray) { 
  const fruitJaune = AnArray.find(fruit => fruit.color === 'jaune')
  return fruitJaune !== undefined ? fruitJaune.name : ''
}

// function findYellowFruit(AnArray) { 
//   const fruitsJaunes = AnArray.filter(fruit => fruit.color === 'jaune')
//   return fruitsJaunes.length > 0 ? fruitsJaunes[0].name : ''
// }
/*
  Test 1
  Résultat attendu : "banane"
*/

findYellowFruit([{name: 'orange', color: 'orange'}, {name: 'banane', color: 'jaune'},{name: 'pomme', color: 'rouge'}]);

/*
  Test 2
  Résultat attendu : ""
*/

findYellowFruit([{name: 'orange', color: 'orange'}, {name: 'pomme', color: 'vert'}]);

/* DO NOT TOUCH */
module.exports = {
  findYellowFruit: findYellowFruit
}
