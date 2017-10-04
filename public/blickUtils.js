let url = "http://demo6292426.mockable.io/blickTest";

let btn = document.getElementById("contacto");
btn.addEventListener("click", info);


function info() {
	let info = new XMLHttpRequest();
	info.open('GET', url);
	info.onload = function () {
		let data = JSON.parse(info.response);
		let name = data.name;
    let email = data.email;
		console.log(name);

		alert(name + email)

	}
	info.send();
}


