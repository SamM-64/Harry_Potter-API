/* eslint-disable no-empty */
/* eslint-disable no-mixed-spaces-and-tabs */
// /* eslint-disable indent */
// /* eslint-disable no-mixed-spaces-and-tabs */
// /* eslint-disable no-undef */



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

				  const dateOfBirth = document.createElement("p");
				  dateOfBirth.textContent = `Date Of Birth: ${el.dateOfBirth}`;

				  const wizard = document.createElement("p");
				  wizard.textContent = `Wizard: ${el.wizard}`;

				  const patronus = document.createElement("p");
				  patronus.textContent = `Patronus: ${el.patronus}`;
				  
				  const house = document.createElement("p");
				  house.textContent = el.house;
				  // eslint-disable-next-line no-empty
				  if(el.house == "Gryffindor") {
					  
				  }
				  else if(el.house == "Slytherin") {
					 
				  }
				  else if(el.house == "Hufflepuff") {
					 
				  }
				  else if(el.house == "Ravenclaw") {
					
				  }
				  
				  const img = document.createElement("img");
				  img.setAttribute("src", el.image);
				 
  
				  grid.appendChild(card);
				  card.appendChild(img);
				  card.appendChild(name);
				  card.appendChild(house);
				  card.appendChild(dateOfBirth);
				  card.appendChild(wizard);
				  card.appendChild(patronus);
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
					  house.style.color = "blue";
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


/* interval timer */
const
	timer = 10000,
	ui = document.getElementById("ui");

setInterval(function() {
	ui.classList.toggle("switch");
}, timer);
















