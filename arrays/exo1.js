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
const getCharAt = (str, nb) => {
  if (nb < 0 || nb >= str.length) {
    return ""
  }
  else {
    return str[nb]
  }

  // condition ? valeurSiConditionVraie : valeurSiConditionFausse

  // return (nb >= 0 && nb < str.length) ? str[nb] : ""

}
/*
  Test 1
  Résultat attendu : "j"
*/

getCharAt("bonjour", 3);

/*
  Test 2
  Résultat attendu : "v"
*/

getCharAt("comment ça va?", 11);

/* DO NOT TOUCH */
module.exports = {
  getCharAt: getCharAt
}
