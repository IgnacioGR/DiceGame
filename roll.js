let randomNumber1 = 0;
let randomNumber2 = 0;

document.getElementById("start-btn").addEventListener("click", function (e) {
	randomNumber1 = Math.floor(Math.random() * 6) + 1;
	randomNumber2 = Math.floor(Math.random() * 6) + 1;

	document
		.querySelector(".img1")
		.setAttribute("src", "images/dice" + randomNumber1 + ".png");

	document
		.querySelector(".img2")
		.setAttribute("src", "images/dice" + randomNumber2 + ".png");

	winner();
});

function winner() {
	if (randomNumber1 === randomNumber2) {
		document.querySelector("h1").innerHTML = "It is a draw";
	} else if (randomNumber1 > randomNumber2) {
		document.querySelector("h1").innerHTML =
			'<i class="fa fa-flag" aria-hidden="true"></i> Player1 wins';
	} else {
		document.querySelector("h1").innerHTML =
			'Player2 wins <i class="fa fa-flag" aria-hidden="true"></i>';
	}
}
