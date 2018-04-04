/*
  Entraînement Array.prototype.includes

  Ecrire une fonction "checkVehicles"
  qui permet de savoir si un véhicule est présent dans la liste de véhicules
  proposés. Renvoie 'true' si le véhicule est présent, renvoie 'false' s'il
  n'y es pas.

  Prototype:
      arr checkVehicles(arr, str);
*/

//  écrire votre code sous ce commentaire
const checkVehicles = (Array, string) => Array.includes(string);

/*
  Test 1
  Résultat attendu : true
*/

console.log(checkVehicles(["subaru", "volkswagen", "mercedes", "peugeot"], "mercedes"));

/*
  Test 2
  Résultat attendu : false
*/

console.log(checkVehicles(["suzuki", "honda", "ducati"], "bmw"));

/* DO NOT TOUCH */
module.exports = {
  checkVehicles: checkVehicles
}
