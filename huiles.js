// Récupération des huiles depuis le fichier JSON
const reponse = await fetch('huiles-cbd.json');
const huiles = await reponse.json();

for (let i=0; i < huiles.length; i++) {
    
    const article = huiles[i];
    // Récupération de l'élément DOM qui accueillera les fiches*
    const sectionHuiles = document.querySelector(".liste-produits");
    // Création d'une balise dédiée à une huile
    const huileElement = document.createElement("article");
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
    sectionHuiles.appendChild(huileElement);
    // On rattache l'image (et le reste) à huileElement (balise article)
    huileElement.appendChild(imageElement);
    huileElement.appendChild(nomElement);
    huileElement.appendChild(prixElement);
    huileElement.appendChild(descriptionElement);
    huileElement.appendChild(stockElement);


}

// gestion des boutons