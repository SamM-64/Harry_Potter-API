/* eslint-disable no-mixed-spaces-and-tabs */
// /* eslint-disable indent */
// /* eslint-disable no-mixed-spaces-and-tabs */
// /* eslint-disable no-undef */

// let personnage = window.localStorage.getItem("personnage");

// if (personnage === null) {
// 	// Récupération des pièces depuis l'API
// 	const reponse = await fetch("https://hp-api.onrender.com/api/characters");
// 	console.log(reponse);
// 	personnage = await reponse.json();
// 	// Transformation des pièces en JSON
// 	const cardPersonnage = JSON.stringify(personnage);
// 	// Stockage des informations dans le localStorage
// 	window.localStorage.setItem("personnage", cardPersonnage);
// } else {
// 	personnage = JSON.parse(personnage);
// }



// // on appel la fonction pour ajouter le listener au formulaire
// function genererPersonnage(personnage) {
// 	for (let i = 0; i < personnage.length; i++) {

// 		const card = personnage[i];
// 		// Récupération de l'élément du DOM qui accueillera les fiches
// 		const sectionFiches = document.querySelector(".fiches");
// 		// Création d’une balise dédiée à une pièce automobile
// 		const personnageElement = document.createElement("personnages");
// 		personnageElement.dataset.id = personnage[i].id;
// 		// Création des balises 
// 		const imageElement = document.createElement("img");
// 		imageElement.src = card.image;
// 		const nameElement = document.createElement("h2");
// 		nameElement.innerText = card.name;
// 		const houseElement = document.createElement("p");
// 		houseElement.innerText =`House: ${card.house}`;
// 		houseElement.dataset.id = card.house;
// 		const dateOfBirthElement = document.createElement("p");
// 		dateOfBirthElement.innerText = `date Of Birth: ${card.dateOfBirth}`;
// 		const wizardElement = document.createElement("p");
// 		wizardElement.innerText = `Wizard: ${card.wizard}`;
// 		const ancestryElement = document.createElement("p");
// 		ancestryElement.innerText =`Ancestry: ${card.ancestry}`;
// 		const patronusElement = document.createElement("p");
// 		patronusElement.innerText =`Patronus: ${card.patronus}`;
// 		const hogwartsStudentElement = document.createElement("p");
// 		hogwartsStudentElement.innerText =`hogwarts Student: ${card.hogwartsStudent}`;
		
		
// 		// On rattache la balise article a la section Fiches
// 		sectionFiches.appendChild(personnageElement);
// 		personnageElement.appendChild(imageElement);
// 		personnageElement.appendChild(nameElement);
// 		personnageElement.appendChild(houseElement);
// 		personnageElement.appendChild(dateOfBirthElement);
// 		personnageElement.appendChild(wizardElement);
// 		personnageElement.appendChild(ancestryElement);
// 		personnageElement.appendChild(patronusElement);
// 		personnageElement.appendChild(hogwartsStudentElement);
// 	}

// }

// genererPersonnage(personnage);

// const boutonNoDescription = document.querySelector(".btn-nodesc");

// boutonNoDescription.addEventListener("click", function () {
// 	const piecesFiltrees = personnage.filter(function (personnage) {
// 		return personnage.hogwartsHouse;
// 	});
// 	document.querySelector(".fiches").innerHTML = "";
// 	genererPersonnage(piecesFiltrees);
// });



// document.addEventListener("DOMContentLoaded", fetchImages);

// searchUser.addEventListener("input", e => {
// 	const element = e.target.value.toLowerCase();
// 	const newUser = users.filter(user =>
// 	  // eslint-disable-next-line no-mixed-spaces-and-tabs
// 	  user.login.toLowerCase().includes(element)
// 	);
  
// 	showUsers(newUser);
//   // eslint-disable-next-line indent
//   });

const select = document.querySelector(".form select");
const grid = document.querySelector(".fiches");
  
function showAll() {
	  // eslint-disable-next-line no-mixed-spaces-and-tabs
	  fetch("https://hp-api.onrender.com/api/characters")
		  .then((res) => res.json())
		  .then((data) => {
			  data.forEach(el => {
				  const card = document.createElement("div");
				  card.classList.add("card");
				  
				  const name = document.createElement("p");
				  name.textContent = el.name;
				  
				  const house = document.createElement("p");
				  house.textContent = el.house;
				  if(el.house == "Gryffindor") {
					  house.style.color = "red";
				  }
				  else if(el.house == "Slytherin") {
					  house.style.color = "green";
				  }
				  else if(el.house == "Hufflepuff") {
					  house.style.color = "orange";
				  }
				  else if(el.house == "Ravenclaw") {
					  house.style.color = "lightgreen";
				  }
				  
				  const img = document.createElement("img");
				  img.setAttribute("src", el.image);
				  const dateOfBirth = document.createElement("p");
				  dateOfBirth.setAttribute("src", el.dateOfBirth);
  
				  grid.appendChild(card);
				  card.appendChild(img);
				  card.appendChild(name);
				  card.appendChild(house);
				  card.appendChild(dateOfBirth);
			  });
		  })
		  .catch((e) => console.log(e));
}
  
function showHouse(house) {
	  fetch("https://hp-api.onrender.com/api/characters/house/" + house)
		  .then((res) => res.json())
		  .then((data) => {
			  data.forEach(el => {
				  const card = document.createElement("div");
				  card.classList.add("card");
				  
				  const name = document.createElement("p");
				  name.textContent = el.name;
  
				  const actor = document.createElement("p");
				  actor.textContent = "Actor: " + el.actor;
				  
				  const house = document.createElement("p");
				  house.textContent = el.house;
				  if(el.house == "Gryffindor") {
					  house.style.color = "red";
				  }
				  else if(el.house == "Slytherin") {
					  house.style.color = "green";
				  }
				  else if(el.house == "Hufflepuff") {
					  house.style.color = "orange";
				  }
				  else if(el.house == "Ravenclaw") {
					  house.style.color = "lightgreen";
				  }
				  
				  let img = document.createElement("img");
				  img.setAttribute("src", el.image);
  
				  grid.appendChild(card);
				  card.appendChild(img);
				  card.appendChild(name);
				  card.appendChild(actor);
				  card.appendChild(house);
			  });
		  })
		  .catch((e) => console.log(e));
}
  
function hogwartsType(type) {
	  fetch("https://hp-api.onrender.com/api/characters/" + type)
		  .then((res) => res.json())
		  .then((data) => {
			  data.forEach(el => {
				  const card = document.createElement("div");
				  card.classList.add("card");
				  
				  const name = document.createElement("p");
				  name.textContent = el.name;
  
				  const actor = document.createElement("p");
				  actor.textContent = "Actor: " + el.actor;
				  
				  const house = document.createElement("p");
				  house.textContent = el.house;
				  if(el.house == "Gryffindor") {
					  house.style.color = "red";
				  }
				  else if(el.house == "Slytherin") {
					  house.style.color = "green";
				  }
				  else if(el.house == "Hufflepuff") {
					  house.style.color = "orange";
				  }
				  else if(el.house == "Ravenclaw") {
					  house.style.color = "lightgreen";
				  }
				  
				  let img = document.createElement("img");
				  img.setAttribute("src", el.image);
  
				  grid.appendChild(card);
				  card.appendChild(img);
				  card.appendChild(name);
				  card.appendChild(actor);
				  card.appendChild(house);
			  });
		  })
		  .catch((e) => console.log(e));
}
  
  
  
select.addEventListener("change", () => {
	  console.log(select.value);
	  if(select.value == "All") {
		  grid.innerHTML = "";
		  showAll();
	  }
	  else if(select.value == "Gryffindor") {
		  grid.innerHTML = "";
		  showHouse("gryffindor");
	  }
	  else if(select.value == "Hufflepuff") {
		  grid.innerHTML = "";
		  showHouse("hufflepuff");
	  }
	  else if(select.value == "Ravenclaw") {
		  grid.innerHTML = "";
		  showHouse("ravenclaw");
	  }
	  else if(select.value == "Slytherin") {
		  grid.innerHTML = "";
		  showHouse("slytherin");
	  }
	  else if(select.value == "Students") {
		  grid.innerHTML = "";
		  hogwartsType("students");
	  }
	  else if(select.value == "Staff") {
		  grid.innerHTML = "";
		  hogwartsType("staff");
	  }
});
  
showAll();
















