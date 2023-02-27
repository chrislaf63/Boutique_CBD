// Récupération des fleurs depuis le fichier JSON
const reponse = await fetch('fleurs-cbd.json');
const fleurs = await reponse.json();

for (let i=0; i < fleurs.length; i++) {
    
    const article = fleurs[i];
    // Récupération de l'élément DOM qui accueillera les fiches*
    const sectionFleurs = document.querySelector(".liste-produits");
    // Création d'une balise dédiée à une fleur
    const fleurElement = document.createElement("article");
    // Création des balises
    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;
    const prixElement = document.createElement("strong");
    prixElement.innerText = `Prix : ${article.prix} €/Gr`;
    const cultElement = document.createElement("p");
    cultElement.innerText = article.culture;
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description;
    const stockElement = document.createElement("strong");
    stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";

    // On rattache la balise article a la section liste-produits
    sectionFleurs.appendChild(fleurElement);
    // On rattache l'image (et le reste) à fleurElement (balise article)
    fleurElement.appendChild(imageElement);
    fleurElement.appendChild(nomElement);
    fleurElement.appendChild(prixElement);
    fleurElement.appendChild(cultElement);
    fleurElement.appendChild(descriptionElement);
    fleurElement.appendChild(stockElement);


}

// gestion des boutons