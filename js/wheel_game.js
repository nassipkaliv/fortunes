const gameButton = document.querySelector(".button_game"),
gameField = document.querySelector(".field"),
oneMore = document.querySelector(".one-more");
let counter = 0;
gameButton.addEventListener("click", (() => {
	if (0 === counter) gameButton.setAttribute("disabled", "true"), gameField.animate([{
		transform: "rotate(1290deg)"
	}], {
		duration: 3e3,
		iterations: 1,
		easing: "ease-in-out",
		fill: "forwards"
	}), counter++, setTimeout((() => {
		$("#firstTurn").modal(), gameButton.removeAttribute("disabled")
	}), 3300);
	else if (1 === counter) {
		gameButton.setAttribute("disabled", "true"), gameField.animate([{
			transform: "rotate(2430deg)"
		}], {
			duration: 3e3,
			iterations: 1,
			easing: "ease-in-out",
			fill: "forwards"
		}), counter++, setTimeout((() => {
			$("#secondTurn").modal(), gameButton.removeAttribute("disabled")
		}), 3300);
		document.querySelector(".btn-reg").classList.toggle("active")
	}
})), oneMore.addEventListener("click", (() => {
	gameButton.setAttribute("disabled", "true"), gameField.animate([{
		transform: "rotate(2430deg)"
	}], {
		duration: 3e3,
		iterations: 1,
		easing: "ease-in-out",
		fill: "forwards"
	}), setTimeout((() => {
		$("#secondTurn").modal(), gameButton.removeAttribute("disabled")
	}), 3300);
	document.querySelector(".btn-reg").classList.toggle("active")
}));