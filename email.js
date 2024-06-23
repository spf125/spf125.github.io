function encodeInput(input) {
	const encoded = document.createElement('div');
	encoded.innerText = input;
	return encoded.innerHTML;
}

var shown = false;
function showhideEmail() {
	if (shown) {
		document.getElementById('email').innerHTML = "Show my email";
		shown = false;
	} else {
		var myemail = "<a href='mailto:feistsp" + "@" + "mail.uc.edu'>feistsp" + "@" + "mail.uc.edu</a>";
		document.getElementById('email').innerHTML = myemail;
		shown = true;
	}
}