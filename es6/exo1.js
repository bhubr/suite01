/*
  Entraînement Array.prototype.map

  Ecrire une fonction "getAllLastnames"
  qui retourne un tableau contenant la liste des prénoms des utilisateurs
  passés en paramètre.

  Prototype:
      arr getAllLastnames(arr);
*/

//  écrire votre code sous ce commentaire

// function getAllLastnames(names) {
//   let answer =[]
//   for (item of names) {
//     if (item.name === undefined) {
//       answer.push("")
//     }
//     else {
//       answer.push(item.name)
//     }
//   }
//   return answer
// }

function getAllLastnames(names) {
  const map = names.map(list => {
    if (list.name === undefined) {
      return ""
    }
    else {
      return list.name
    }
  })
  return map
}

// function getAllLastnames(names) {
//   const map = names.map(list => list.name === undefined ? "" : list.name)
//   return map
// }
  

/*
  Test 1
  Résultat attendu : ["John", "Judith", "Julia"]
*/

console.log(getAllLastnames([{name: 'John'}, {name: 'Judith'}, {name: 'Julia'}]));

/*
  Test 2
  Résultat attendu : ["Marc", "", "Robert"]
*/
console.log(getAllLastnames([{name: 'Marc'}, {age: 18}, {name: 'Robert'}]));

/* DO NOT TOUCH */
module.exports = {
  getAllLastnames: getAllLastnames
}
