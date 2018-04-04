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

/*function shoppingList(Panier) {
    let objet = {};
    for (i = 0; i < Panier.length; i++) {
        for (j = 0; j < Panier.length - 1; j++) {
            let fruit = Panier[i][j];
            if (objet[fruit]) {
                objet[fruit]++;
            }
            else {
                objet[fruit] = 1;
            }
        }
    }
    return objet;
} */


//  écrire votre code sous ce commentaire

function shoppingList(listPanier) {
    let objet = {}
    for (let panier of listPanier) {
        for (let fruit of panier) {
            if(objet[fruit] === undefined) {
                objet[fruit] = 1
            } 

        else { objet[fruit] = objet[fruit] + 1
        }
       } 
    }
    console.log(objet)
    return objet
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

shoppingList([
    ["orange", "orange","kiwi", "ananas"],
    ["kiwi", "ananas", "banane", "prune"],
    ["orange", "orange", "orange", "orange"],
    ["orange", "orange", "kiwi", "kiwi"],
    ["prune", "banane", "pamplemousse", "ananas"]
]);

/* DO NOT TOUCH */
module.exports = {
  shoppingList: shoppingList
}
