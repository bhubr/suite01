/*
  Entraînement String.prototype.split

  Ecrire une fonction "getTwoLastItems"
  qui permet de récupérer les 2 derniers éléments d'une chaine de caractère
  divisée en tableau par un pattern spécifique

  Prototype:
      arr getTwoLastItems(_str, _pattern);
*/

//  écrire votre code sous ce commentaire
  const getTwoLastItems = (string,pattern) => {
    const inverse = string.split(pattern).reverse();
    const tableau = `${inverse[0]},${inverse[1]}`
    const tableaufinal = tableau.split(',').reverse();
      return tableaufinal  
    
     
    // split mettre en tableau   
    //  reverse inverse
    //split limit 2
    //split reverse remettre dans l'odre
   
  }
/*
  Test 1
  Résultat attendu : ["Thursday", "Friday"]
*/

console.log(getTwoLastItems("Monday,Tuesday,Wednesday,Thursday,Friday", ","));

/*
  Test 2
  Résultat attendu : ["02", "2018"]
*/

console.log(getTwoLastItems("25/02/2018", "/"));

/* DO NOT TOUCH */
module.exports = {
  getTwoLastItems: getTwoLastItems
}
