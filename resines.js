// Récupération des infusions depuis le fichier JSON
const reponse = await fetch('resines-cbd.json');
const resines = await reponse.json();

for (let i=0; i < resines.length; i++) {
    
    const article =resines[i];
    // Récupération de l'élément DOM qui accueillera les fiches*
    const sectionResines = document.querySelector(".liste-produits");
    // Création d'une balise dédiée à une resine
    const resineElement = document.createElement("article");
    // Création des balises
    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;
    const prixElement = document.createElement("strong");
    prixElement.innerText = `Prix : ${article.prix} €/Gr`;
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description;
    const stockElement = document.createElement("strong");
    stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";

    // On rattache la balise article a la section liste-produits
    sectionResines.appendChild(resineElement);
    // On rattache l'image (et le reste) à resineElement (balise article)
    resineElement.appendChild(imageElement);
    resineElement.appendChild(nomElement);
    resineElement.appendChild(prixElement);
    resineElement.appendChild(descriptionElement);
    resineElement.appendChild(stockElement);


}

// gestion des boutons