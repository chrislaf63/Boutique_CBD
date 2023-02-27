// Récupération des cosmétiques depuis le fichier JSON
const reponse = await fetch('cosmetiques-cbd.json');
const cosmetiques = await reponse.json();

for (let i=0; i < cosmetiques.length; i++) {
    
    const article = cosmetiques[i];
    // Récupération de l'élément DOM qui accueillera les fiches*
    const sectionCosmetiques = document.querySelector(".liste-produits");
    // Création d'une balise dédiée à un cosmétique
    const cosmetiqueElement = document.createElement("article");
    // Création des balises
    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;
    const prixElement = document.createElement("strong");
    prixElement.innerText = `Prix : ${article.prix} €`;
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description;
    const stockElement = document.createElement("strong");
    stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";

    // On rattache la balise article a la section liste-produits
    sectionCosmetiques.appendChild(cosmetiqueElement);
    // On rattache l'image (et le reste) à cosmetiqueElement (balise article)
    cosmetiqueElement.appendChild(imageElement);
    cosmetiqueElement.appendChild(nomElement);
    cosmetiqueElement.appendChild(prixElement);
    cosmetiqueElement.appendChild(descriptionElement);
    cosmetiqueElement.appendChild(stockElement);


}

// gestion des boutons