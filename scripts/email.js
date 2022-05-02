window.onload = function() {
	var button = document.getElementById("signup");
	button.onclick = submitForm;
	var zip = document.getElementById("zip");
	zip.onkeypress = handleKeyPress;
}

function Person(first, last, email, address, city, state, zip) {
	this.firstName = first;
	this.lastName = last;
	this.email = email;
	this.address = address;
	this.city = city;
	this.state = state;
	this.zip = zip;
}
function handleKeyPress(e) {
	var button = document.getElementById("signup");
	if (e.keyCode === 13) {
		button.click();
		return false;
	}
}
function submitForm() {	
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var email =  document.getElementById("email").value;
	var address = document.getElementById("address").value;
	var city = document.getElementById("city").value;
	var state = document.getElementById("state").value;
	var zip = document.getElementById("zip").value;

	var newEmail = new Person(firstName, lastName, email, address, city, state, zip);
	alert(JSON.stringify(newEmail));
}