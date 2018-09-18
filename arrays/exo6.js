/*
  Ecrire une fonction "sortNumbers" qui va trier un tableau de nombres.
  
  Prototype:
      void sortNumbers(arr);

  Fonctions interdites:
      Array.prototype.sort
*/

//  écrire votre code sous ce commentaire

function sortNumbers(arr) {
  let result = [];
  let arrCopy = arr.slice()
  lenArr = arrCopy.length;
  let mini;
  let maxi = -100000000;
  for (let i = 0; i < arr.length; i++) {
    mini = 1000000000;
    for (let j = 0; j < lenArr; j++) {
      if (arrCopy[j] < mini && arrCopy[j] > maxi) {
        mini = arrCopy[j];
      }
    }
    result.push(mini)
    maxi = mini;
  }
  return result;
};

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
