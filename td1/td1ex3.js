const pays = ["Italie", "Japon", "Grèce", "Espagne", "Canada"];

// 1. Extraire le premier et le deuxième pays
const [pays1, pays2] = pays;

console.log("1. Premier pays :", pays1);
console.log("Deuxième pays :", pays2);

// 2. Extraire uniquement le troisième pays
const [, , pays3] = pays;

console.log("2. Troisième pays :", pays3);

// 3. Extraire le premier pays et récupérer les autres
const [destinationPrincipale, ...autresPays] = pays;

console.log("3. Destination principale :", destinationPrincipale);
console.log("Autres pays :", autresPays);


console.log("===== PARTIE B : DESTRUCTURATION D'UN OBJET =====");

const voyage = {
    destination: "Bali",
    prix: 1800,
    duree: 10,
    transport: "Avion",
    hotel: "5 étoiles"
};

// 1. Extraire destination et prix
const { destination, prix } = voyage;

console.log("1. Destination :", destination);
console.log("Prix :", prix);

// 2. Extraire destination dans une variable appelée ville
const { destination: ville } = voyage;

console.log("2. Ville :", ville);

// 3. Extraire prix et duree avec des valeurs par défaut
const { prix: prixVoyage = 1000, duree = 7 } = voyage;

console.log("3. Prix du voyage :", prixVoyage);
console.log("Durée :", duree);

// Exemple avec un objet dont les propriétés sont absentes
const voyage2 = {};

const { prix: prix2 = 1000, duree: duree2 = 7 } = voyage2;

console.log("Prix par défaut :", prix2);
console.log("Durée par défaut :", duree2);

// 4. Fonction avec destructuring dans les paramètres
function afficherVoyage({
    destination,
    prix,
    duree,
    transport,
    hotel
}) {
    console.log("Destination :", destination);
    console.log("Prix :", prix, "DT");
    console.log("Durée :", duree, "jours");
    console.log("Transport :", transport);
    console.log("Hôtel :", hotel);
}

console.log("4. Informations du voyage :");
afficherVoyage(voyage);