
const destinationsEurope = ["Rome", "Paris", "Madrid"];
const destinationsAsie = ["Tokyo", "Bali", "Bangkok"];

// 1. Copier le tableau destinationsEurope
const copie= [...destinationsEurope];
console.log(copie);

// 2. Fusionner les deux tableaux
const fusion = [...destinationsEurope, ...destinationsAsie];
console.log(fusion);

// 3. Ajouter Lisbonne au début sans modifier le tableau original
const ajout= ["Lisbonne", ...destinationsEurope];
console.log(ajout);

// 4. Ajouter Londres à la fin sans modifier le tableau original
const Ajoutfin = [...destinationsEurope, "Londres"];
console.log(Ajoutfin);

// 5. Créer un tableau contenant toutes les destinations sauf Paris
const sansParis = toutesDestinations.filter(ville => ville !== "Paris");
console.log("5. Sans Paris :", sansParis);

// Vérification : les tableaux originaux restent inchangés
console.log("Europe originale :", destinationsEurope);
console.log("Asie originale :", destinationsAsie);
