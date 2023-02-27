// Récupération des huiles depuis le fichier JSON
const reponse = await fetch('vapote-cbd.json');
const vapotes = await reponse.json();

for (let i=0; i < vapotes.length; i++) {
    
    const article = vapotes[i];
    // Récupération de l'élément DOM qui accueillera les fiches*
    const sectionVapotes = document.querySelector(".liste-produits");
    // Création d'une balise dédiée à une vapote
    const vapoteElement = document.createElement("article");
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
    sectionVapotes.appendChild(vapoteElement);
    // On rattache l'image (et le reste) à huileElement (balise article)
    vapoteElement.appendChild(imageElement);
    vapoteElement.appendChild(nomElement);
    vapoteElement.appendChild(prixElement);
    vapoteElement.appendChild(descriptionElement);
    vapoteElement.appendChild(stockElement);


}

// gestion des boutons