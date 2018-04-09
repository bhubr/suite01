/*
  Ecrire une fonction "editArrayAt"
  qui prend en paramètre un tableau, une position et une valeur.
  La fonction modifie la valeur à la position du tableau demandée.

  Prototype:
      void editArrayAt(arr, position, value);
*/

//  écrire votre code sous ce commentaire
function editArrayAt(table, position, value) {
  table.splice(position, 1, value)  
  return table
}
/*
  Test 1
  Résultat attendu : ["bonjour", "ça", 5]
*/
var arr1 = ["bonjour", 4, 5];
console.log(editArrayAt(arr1, 1, "ça"));

/*
  Test 2
  Résultat attendu : ["bonjour", "ça", "va?"]
*/
console.log(editArrayAt(arr1, 2, "va?"));

/* DO NOT TOUCH */
module.exports = {
  editArrayAt: editArrayAt
}
