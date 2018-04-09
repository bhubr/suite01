/*
  Ecrire une fonction "getCharAt"
  qui retourne le caractère à une certaine position.
  Si la position demandée est inexistante, retourner une chaine vide.

  Prototype:
      str getCharAt(str, position);

  Fonctions interdites:
    - String.prototype.charAt
*/

//  écrire votre code sous ce commentaire
const getCharAt = (str, position) => {
 if (str[position] === undefined) {
  return('')
 } else {
  return(str[position])
 }}
/*
  Test 1
  Résultat attendu : "j"
*/

console.log((getCharAt("bonjour",3)));

/*
  Test 2
  Résultat attendu : "v"
*/

console.log((getCharAt("comment ça va?", 11)));

/* DO NOT TOUCH */
module.exports = {
  getCharAt: getCharAt
}
