/*
  Entraînement Array.prototype.map

  Ecrire une fonction "getAllLastnames"
  qui retourne un tableau contenant la liste des prénoms des utilisateurs
  passés en paramètre.

  Prototype:
      arr getAllLastnames(arr);
*/

//  écrire votre code sous ce commentaire

function getAllLastnames(arr) {
  let result = arr.map(obj => {
    if (obj.name !== undefined) {
      return obj.name
    } else {
      return ''
    }
  });
  return result;
};

/*
  Test 1
  Résultat attendu : ["John", "Judith", "Julia"]
*/

getAllLastnames([{name: 'John'}, {name: 'Judith'}, {name: 'Julia'}]);

/*
  Test 2
  Résultat attendu : ["Marc", "", "Robert"]
*/

getAllLastnames([{name: 'Marc'}, {age: 18}, {name: 'Robert'}]);

/* DO NOT TOUCH */
module.exports = {
  getAllLastnames: getAllLastnames
}
