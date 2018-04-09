const choses = ['fleur', 'voiture', 'chateau', 'fleur']

let resultat = {}

for ( let chose of choses ) {
console.log(chose, resultat[chose])
if (resultat[chose] === undefined) {
resultat[chose] = 1
}

else {
resultat[chose] += 1
}
}

// resultat.fleur = 2
// resultat.voiture = 1
// resultat.chateau = 1

console.log(resultat.fleur)
console.log(resultat.voiture)
console.log(resultat['chateau'])
console.log(resultat)