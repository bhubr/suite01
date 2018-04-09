/*
  Entraînement Array.prototype.sort

  Ecrire une fonction "sortMyWords"
  qui permet de trier un tableau de mots afin de reconstituer
  une phrase cohérente.

  Prototype:
      str sortMyWords(_arr);
*/

function sortMyWords(anArray){
  const sortedArray = anArray.sort(function(a,b){
    return a.order - b.order
  })
  return sortedArray.map(item => item.word).join(" ")
}

//  écrire votre code sous ce commentaire

/*
  Test 1
  Résultat attendu : "Wild Code School Bordeaux"
*/

sortMyWords([{order: 2, word: 'Code'}, {order: 4, word: 'Bordeaux'}, {order: 1, word: 'Wild'}, {order: 3, word: 'School'}]);

/*
  Test 2
  Résultat attendu : "J'adore programmer en Javascript"
*/

sortMyWords([{order: 4, word: 'Javascript'}, {order: 1, word: 'J\'adore'}, {order: 3, word: 'en'}, {order: 2, word: 'programmer'}]);

/* DO NOT TOUCH */
module.exports = {
  sortMyWords: sortMyWords
}
