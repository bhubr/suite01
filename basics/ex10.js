/*
    Ecrire une fonction "shoppingList",
    qui prend un paramètre un tableau de paniers;

    Un panier est un tableau de mots;

    La fonction retourne un objet contenant:
        - comme clef le nom du produit rencontré
        - comme valeur le nombre de fois qu'il à été rencontré

    Important -> l'ordre n'a aucune importance
*/

//  écrire votre code sous ce commentaire

function shoppingList(paniers) {
    let objet = {};
    for (let i = 0; i < paniers.length; i++) {
       for (let a = 0; a < paniers[i].length; a++) {
           if (objet.hasOwnProperty(paniers[i][a])) {
                objet[paniers[i][a]]++;
            }
            else {
                objet[paniers[i][a]] = 1;
            }
        }
    }
    
    return objet;
 }
/*
  Test 1
  Résultat attendu : {
    "orange": 8,
    "kiwi": 4,
    "ananas": 3,
    "prune": 2,
    "banane": 2,
    "pamplemousse": 1
  }
*/

console.log(shoppingList([
    ["orange", "orange", "kiwi", "ananas"],
    ["kiwi", "ananas", "banane", "prune"],
    ["orange", "orange", "orange", "orange"],
    ["orange", "orange", "kiwi", "kiwi"],
    ["prune", "banane", "pamplemousse", "ananas"]
]));

/* DO NOT TOUCH */
module.exports = {
  shoppingList: shoppingList
}
