
let personnage = window.localStorage.getItem("personnage");

if (personnage === null) {
	// Récupération des pièces depuis l'API
	const reponse = await fetch("https://harry-potter-api-en.onrender.com/characters ");
	console.log(reponse);
	personnage = await reponse.json();
	// Transformation des pièces en JSON
	const cardPersonnage = JSON.stringify(personnage);
	// Stockage des informations dans le localStorage
	window.localStorage.setItem("personnage", cardPersonnage);
} else {
	personnage = JSON.parse(personnage);
}



// on appel la fonction pour ajouter le listener au formulaire
function genererPersonnage(personnage) {
	for (let i = 0; i < personnage.length; i++) {

		const card = personnage[i];
		// Récupération de l'élément du DOM qui accueillera les fiches
		const sectionFiches = document.querySelector(".fiches");
		// Création d’une balise dédiée à une pièce automobile
		const personnageElement = document.createElement("personnages");
		personnageElement.dataset.id = personnage[i].id;
		// Création des balises 
		const imageElement = document.createElement("img");
		imageElement.src = card.image;
		const characterElement = document.createElement("h2");
		characterElement.innerText = card.character;
		const hogwartsHouseElement = document.createElement("p");
		hogwartsHouseElement.innerText =`House: ${card.hogwartsHouse}`;
		hogwartsHouseElement.dataset.id = card.hogwartsHouse;
		const interpretedByElement = document.createElement("p");
		interpretedByElement.innerText = card.interpretedBy;
		const childElement = document.createElement("p");
		childElement.innerText = card.child;
		
		

		// On rattache la balise article a la section Fiches
		sectionFiches.appendChild(personnageElement);
		personnageElement.appendChild(imageElement);
		personnageElement.appendChild(characterElement);
		personnageElement.appendChild(hogwartsHouseElement);
		personnageElement.appendChild(interpretedByElement);
		personnageElement.appendChild(childElement);
		// pieceElement.appendChild(panierElement);
		// pieceElement.appendChild(avisBouton);
		//Code aJouté
		

	}

}

genererPersonnage(personnage);









// Ajout du listener pour mettre à jour des données du localStorage
// const boutonMettreAJour = document.querySelector(".btn-maj");
// boutonMettreAJour.addEventListener("click", function () {
// 	window.localStorage.removeItem("pieces");
// });
// await afficherGraphiqueAvis();

