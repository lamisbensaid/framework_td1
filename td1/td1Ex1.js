const destinations = [
{ id: 1, ville: "Santorin", pays: "Grèce", prix: 1200, duree: 7,
disponible: true },
{ id: 2, ville: "Bali", pays: "Indonésie", prix: 1800, duree: 10,
disponible: true },
{ id: 3, ville: "Istanbul", pays: "Turquie", prix: 750, duree: 5,
disponible: false },
{ id: 4, ville: "Rome", pays: "Italie", prix: 950, duree: 4,
disponible: true },
{ id: 5, ville: "Tokyo", pays: "Japon", prix: 2500, duree: 12,
disponible: true },
{ id: 6, ville: "Djerba", pays: "Tunisie", prix: 500, duree: 6,
disponible: false }
];
destinations.forEach(D => {
    console.log(D.ville);
});
const villes = destinations.map(D => D.ville);
console.log(villes);
// 3. Destinations dont le prix est inférieur à 1500 DT
console.log("3. Prix inférieur à 1500 DT :");
const destinationsMoinsCheres = destinations.filter(
    D => D.prix < 1500
);
//ou bien
//const destinationsMoinsCheres = destinations.filter(D =>{return D.prix < 1500});
console.log(destinationsMoinsCheres);

// 4. Rechercher la destination dont l'identifiant est 3
const destination_id3 = destinations.find(
    D => D.id === 3
);
//ou bien 
//const destination_id33 = destinations.findIndex(D =>{return D.id === 3});
console.log(destination_id3);
//EXEMPLE
const prix1500 = destinations.filter(destination => destination.prix < 1500);
prix1500[0].prix += 1000;
console.log(prix1500);
console.log(destinations);
//exemple 2
//const prix1500 = destinations.filter(destination => destination.prix < 1500);
//prix1500.map(D => D.prix += 1000);
//console.log(prix1500);
co//nsole.log(destinations);
// 5. Trouver la position de Tokyo
console.log("5. Position de Tokyo :");
const positionTokyo = destinations.findIndex(
    D => D.ville === "Tokyo"
);
console.log(positionTokyo);

// 6. Vérifier s'il existe au moins une destination disponible
console.log("6. Au moins une destination disponible :");
const existeDisponible = destinations.some(
    D => D.disponible === true
);
console.log(existeDisponible);

// 7. Vérifier si toutes les destinations ont un prix supérieur à zéro
console.log("7. Tous les prix sont positifs :");
const tousPrixPositifs = destinations.every(
    D => D.prix > 0
);
console.log(tousPrixPositifs);

// 8. Calculer le budget total
console.log("8. Budget total :");
const t = destinations.reduce(
    (s, D) => s + D.prix,
    0
);
console.log(t);
//Prix1500[0].prix+=1000; console.log(prix1500);console.log(destinations);
//par adress les deux tableau a part cest un copie 
//ca change dans prix1500 et ne change pas dans destination