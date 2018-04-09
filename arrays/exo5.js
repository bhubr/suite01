/*
  Ecrire une fonction "mergeArrays"
  qui prend deux tableaux et qui renvoie un tableau constitué du contenu des deux tableaux.

  Prototype:
      arr mergeArrays(arr1, arr2);

  Fonctions interdites:
      - Array.prototype.concat

  La fonction ne doit pas modifier les tableaux sources.
*/

//  écrire votre code sous ce commentaire
function mergeArrays(table1, table2) {
  let answer = []  
  for(item of table1) {
    // let link = table1.shift()
    // answer.push(link)
    // table1.push(link)
    answer.push(item)
  }
  for(item of table2) {
    // let link = table2.shift()
    // answer.push(link)
    // table2.push(link)
    answer.push(item)
  }
  return answer
}

/*
  Test 1
  Résultat attendu : ["bonjour", "ça", "va?", 3, 4]
*/
console.log(mergeArrays(["bonjour"], ["ça", "va?", 3, 4]));

/*
  Test 2
  Résultat attendu : ["enchanté", "je", "m'appelle", "comment?"]
*/
console.log(mergeArrays(["enchanté", "je"], ["m'appelle", "comment?"]));

/* DO NOT TOUCH */
module.exports = {
  mergeArrays: mergeArrays
}
