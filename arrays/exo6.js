/*
  Ecrire une fonction "sortNumbers" qui va trier un tableau de nombres.
  
  Prototype:
      void sortNumbers(arr);

  Fonctions interdites:
      Array.prototype.sort
*/

//  écrire votre code sous ce commentaire
function sortNumbers(table) {
  let answer = []  
  for(first of table) {
    let min = first
    for(second of table) {
      if(first == "a" && Number.isSafeInteger(second)) {
        min = second
      }
      else if(first >= second && second <= min) {
        min = second
      }
    }
    answer.push(min)
    for(k = 0; k < table.length; k++) {
      if(table[k] == min) {
        table.splice(k, 1, "a")
        break
      }
    }
  }
  console.log(answer)
  return answer
}
/*
  Test 1
  Résultat attendu : [2, 3, 4, 5]
*/
sortNumbers([4, 3, 5, 2]);

/*
  Test 2
  Résultat attendu : [-10, 2, 10, 28]
*/
sortNumbers([10, 2, 28, -10]);

/* DO NOT TOUCH */
module.exports = {
  sortNumbers: sortNumbers
}
