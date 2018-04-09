/*
  Entraînement String.prototype.split

  Ecrire une fonction "getTwoLastItems"
  qui permet de récupérer les 2 derniers éléments d'une chaine de caractère
  divisée en tableau par un pattern spécifique

  Prototype:
      arr getTwoLastItems(_str, _pattern);
*/

//  écrire votre code sous ce commentaire

function getTwoLastItems(items, separator) {
  const separatedItems = items.split(separator);
  const lastItems = []
    lastItems.push(separatedItems[separatedItems.length - 2])
    lastItems.push(separatedItems[separatedItems.length - 1])
  return lastItems
}

// function getTwoLastItems(items, separator) {
//   const reverseString = items.split(separator).reverse().join(separator)
//   const lastItems = reverseString.split(separator, 2).reverse()
//   return lastItems
// }


/*
  Test 1
  Résultat attendu : ["Thursday", "Friday"]
*/

getTwoLastItems("Monday,Tuesday,Wednesday,Thursday,Friday", ",");

/*
  Test 2
  Résultat attendu : ["02", "2018"]
*/

getTwoLastItems("25/02/2018", "/");

/* DO NOT TOUCH */
module.exports = {
  getTwoLastItems: getTwoLastItems
}
