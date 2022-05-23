
// Ho aggiunto questo file JS per fare la cosa dei profili che voleva fare davide
// Per ora non modificatelo in nessun modo, lo ho già importato in Home.html
// Deve andare solo in home HTML
// Ho chiesto il permesso ad Emanuele quindi non stiamo cheattando.

// PHP $_GET Request Equivalent
// Da utente di PHP ho rubato questo Gist, che mi crea quello che il comando $_GET['variabile']
// Su PHP permette di scrivere una variabile nell'url, e potremo passare il valore
// Nella pagina html e sostituire l'immagine linkano diversi URL dalla index

var $_GET = new Array();
function GET() {
	var url = location.search.replace("?", "").split("&");
	for (var index = 0; index < url.length; index++) {
		var value = url[index].split("=");
		$_GET[value[0]] = value[1];
	}
}
GET();

window.onload = function() {
document.getElementById("profile-picture").innerHTML = `<img src="./assets/img/profiles/ProfilePicture2.png" alt="Profileimg">`;
}