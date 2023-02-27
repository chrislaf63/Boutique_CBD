// Récupération des infusions depuis le fichier JSON
const reponse = await fetch('infusions-cbd.json');
const infusions = await reponse.json();

for (let i=0; i < infusions.length; i++) {
    
    const article =infusions[i];
    // Récupération de l'élément DOM qui accueillera les fiches*
    const sectionInfusions = document.querySelector(".liste-produits");
    // Création d'une balise dédiée à une infusion
    const infusionElement = document.createElement("article");
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
    sectionInfusions.appendChild(infusionElement);
    // On rattache l'image (et le reste) à infusionElement (balise article)
    infusionElement.appendChild(imageElement);
    infusionElement.appendChild(nomElement);
    infusionElement.appendChild(prixElement);
    infusionElement.appendChild(descriptionElement);
    infusionElement.appendChild(stockElement);


}

// gestion des boutons