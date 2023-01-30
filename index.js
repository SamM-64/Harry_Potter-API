/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */

let personnage = window.localStorage.getItem("personnage");

if (personnage === null) {
	// Récupération des pièces depuis l'API
	const reponse = await fetch("https://hp-api.onrender.com/api/characters");
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
		const nameElement = document.createElement("h2");
		nameElement.innerText = card.name;
		const houseElement = document.createElement("p");
		houseElement.innerText =`House: ${card.house}`;
		houseElement.dataset.id = card.house;
		const dateOfBirthElement = document.createElement("p");
		dateOfBirthElement.innerText = `date Of Birth: ${card.dateOfBirth}`;
		const wizardElement = document.createElement("p");
		wizardElement.innerText = `Wizard: ${card.wizard}`;
		const ancestryElement = document.createElement("p");
		ancestryElement.innerText =`Ancestry: ${card.ancestry}`;
		const patronusElement = document.createElement("p");
		patronusElement.innerText =`Patronus: ${card.patronus}`;
		const hogwartsStudentElement = document.createElement("p");
		hogwartsStudentElement.innerText =`hogwarts Student: ${card.hogwartsStudent}`;
		
		
		// On rattache la balise article a la section Fiches
		sectionFiches.appendChild(personnageElement);
		personnageElement.appendChild(imageElement);
		personnageElement.appendChild(nameElement);
		personnageElement.appendChild(houseElement);
		personnageElement.appendChild(dateOfBirthElement);
		personnageElement.appendChild(wizardElement);
		personnageElement.appendChild(ancestryElement);
		personnageElement.appendChild(patronusElement);
		personnageElement.appendChild(hogwartsStudentElement);
	}

}

genererPersonnage(personnage);

const boutonNoDescription = document.querySelector(".btn-nodesc");

boutonNoDescription.addEventListener("click", function () {
	const piecesFiltrees = personnage.filter(function (personnage) {
		return personnage.hogwartsHouse;
	});
	document.querySelector(".fiches").innerHTML = "";
	genererPersonnage(piecesFiltrees);
});



document.addEventListener("DOMContentLoaded", fetchImages);

searchUser.addEventListener("input", e => {
	const element = e.target.value.toLowerCase();
	const newUser = users.filter(user =>
	  // eslint-disable-next-line no-mixed-spaces-and-tabs
	  user.login.toLowerCase().includes(element)
	);
  
	showUsers(newUser);
  // eslint-disable-next-line indent
  });

	











// Ajout du listener pour mettre à jour des données du localStorage
// const boutonMettreAJour = document.querySelector(".btn-maj");
// boutonMettreAJour.addEventListener("click", function () {
// 	window.localStorage.removeItem("pieces");
// });




