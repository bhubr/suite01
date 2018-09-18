/*
    Ecrire une fonction "getHumanTypeByAge",
    qui prend un paramètre un nombre,
    et qui retourne une chaine de caractère:
        - "enfant" si le nombre est strictement inférieur à 12
        - "ado" si le nombre est supérieur ou égal à 12 et strictement inférieur à 18
        - "adulte" si le nombre est supérieur ou égal à 18 et strictement inférieur à 124
        - "impossible... ou encore jamais vu" si le nombre est supérieur ou égal à 124
            ou si le nombre est strictement inférieur à 1;

*/

//  écrire votre code sous ce commentaire

function getHumanTypeByAge(nbr) {
  switch(true) {
    case (nbr < 12 && nbr >= 1):
      return "enfant";
      break;
    case (nbr >= 12 && nbr < 18):
      return "ado";
      break;
    case (nbr >= 18 && nbr < 124):
      return "adulte";
      break;
    default:
      return "impossible... ou encore jamais vu";
  }
};

/*
  Test 1
  Résultat attendu : "impossible... ou encore jamais vu"
*/

getHumanTypeByAge(-5);

/*
  Test 2
  Résultat attendu : "enfant"
*/

getHumanTypeByAge(6);

/*
  Test 3
  Résultat attendu : "ado"
*/

getHumanTypeByAge(17);

/*
  Test 4
  Résultat attendu : "adulte"
*/

getHumanTypeByAge(33);

/*
  Test 5
  Résultat attendu : "impossible... ou encore jamais vu"
*/

getHumanTypeByAge(140);

/* DO NOT TOUCH */
module.exports = {
  getHumanTypeByAge: getHumanTypeByAge
}
