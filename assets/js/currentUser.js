// JS Facile Facile Plug and Play, Cosi possiamo toglierlo quando useremo ReactJS

// Ho aggiunto questo file JS per fare la cosa dei profili che voleva fare davide
// Per ora non modificatelo in nessun modo, lo ho già importato in Home.html
// Deve andare solo in home HTML
// Ho chiesto il permesso ad Emanuele quindi non stiamo cheattando.

// PHP $_GET Request Equivalent
// Da utente di PHP ho rubato questo Gist, che mi crea quello che è il comando $_GET['variabile']
// Su PHP permette di scrivere una variabile nell'url, e potremo passare il valore
// Nella pagina html e sostituire l'immagine linkando diversi URL dalla index

// Emulate PHP $_GET
var $_GET = new Array();
function GET() {
	var url = location.search.replace("?", "").split("&");
	for (var index = 0; index < url.length; index++) {
		var value = url[index].split("=");
		$_GET[value[0]] = value[1];
	}
}
GET();



// Replace User Profile on Page Load
window.onload = function() {

	// No User - Show Default Profile Icon

	let profile = document.getElementById("profile-picture");
	let god = document.getElementById("god-name");


	if ($_GET['user'] == '') {
		profile.innerHTML = `<img src="./assets/img/profiles/ProfilePicture2.png" alt="Profileimg">`;
		god.innerHTML = `Zeus`;
	}

	if ($_GET['user'] == "zeus") {
		profile.innerHTML = `<img src="./assets/img/profiles/ProfilePicture1.png" alt="Profileimg">`;
		god.innerHTML = `Zeus`;
	}

	if ($_GET['user'] == "ade") {
		profile.innerHTML = `<img src="./assets/img/profiles/ProfilePicture2.png" alt="Profileimg">`;
		god.innerHTML = `Ade`;
	}

	if ($_GET['user'] == "poseidone") {
		profile.innerHTML = `<img src="./assets/img/profiles/ProfilePicture3.png" alt="Profileimg">`;
		god.innerHTML = `Poseidone`;
	}

	if ($_GET['user'] == "apollo") {
		profile.innerHTML = `<img src="./assets/img/profiles/ProfilePicture4.png" alt="Profileimg">`;
		god.innerHTML = `Apollo`;
	}

	if ($_GET['id'] == "god") {
		profile.innerHTML = `<img src="./assets/img/profiles/ProfilePicture5.jpg" alt="Profileimg">`;
		god.innerHTML = $_GET['user'];
	}

}


// Funzione Place Holder
function AddGod() {
	
	const gods = ["Era", "Demetra", "Estia", "Atena", "Artemide", "Afrodite", "Ares", "Efesto", "Hermes", "Dioniso"];
	const randomElement = gods[Math.floor(Math.random() * gods.length)];
	let newGod = randomElement;
	let newUser = document.getElementById("profiles");
	newUser.innerHTML = `<div class="profile"><a href="./home.html?user=${newGod}&id=god"><img src="./assets/img/profiles/ProfilePicture5.jpg" alt="Profile5"></a><h4>${newGod}</h4></div>` + newUser.innerHTML;

}