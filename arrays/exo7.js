/*
  Ecrire une fonction "splitStr" qui, d'où son nom,
  sépare une chaine de caractères sur une occurence donnée,
  et renvoie un tableau contenant le résultat de la séparation des données.
  
  Prototype:
      arr splitStr(str, occurence);

  Fonctions interdites:
      - String.prototype.split
*/

//  écrire votre code sous ce commentaire
function splitStr(string, separator) {
  let indexSeparator = []
  let answer = []
  for(i = 0; i < string.length; i++) {
    if(string[i] == separator) {      
        indexSeparator.push(i)
    }
  }
  indexSeparator.push(string.length)
  let start = 0
  let word = ""
  for(index of indexSeparator) {
    for(j = start; j < index; j++) {
      word += string[j]
    }
    answer.push(word)
    start = index + 1
    word = ""
  }
  console.log(answer)
  return answer
}
/*
  Test 1
  Résultat attendu : ["Bonjour", "comment", "tu", "vas", "?", "ça", "va", "merci."]
*/
splitStr("Bonjour comment tu vas ? ça va merci.", " ");

/*
  Test 2
  Résultat attendu : ["06", "20", "42", "18", "54"]
*/
splitStr("06-20-42-18-54", "-");

/* DO NOT TOUCH */
module.exports = {
  splitStr: splitStr
}
