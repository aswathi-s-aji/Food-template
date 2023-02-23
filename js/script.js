function validate() {
	let name = document.getElementById("a").value;
	let nregx = /^[a-z A-Z]{2,15}$/;
	let mail = document.getElementById("b").value;
	let eregx = /^[a-zA-Z0-9+_.-]+@[a-zA-Z]+\.[a-z A-Z]{2,4}$/;
	let msg = document.getElementById("c").value;

	if (name == "") {
		alert("Name field is mandatory");
		return false;
	} else if (!nregx.test(name)) {
		alert("Enter a valid name");
		return false;
	} else if (mail == "") {
		alert("Email field is mandatory");
		return false;
	} else if (!eregx.test(mail)) {
		alert("Enter a valid mail id");
		return false;
	} else if (msg == "") {
		alert("Message field is mandatory");
		return false;
	} else {
		return true;
	}
}
