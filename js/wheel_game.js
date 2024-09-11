function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return "";
}

const gameButton = document.querySelector(".button_game"),
  gameField = document.querySelector(".field"),
  oneMore = document.querySelector(".one-more");
let counter = 0;

if (getCookie('spinCount')) {
  counter = parseInt(getCookie('spinCount'));
  if (counter >= 2) {
    $("#secondTurn").modal();
    gameButton.setAttribute("disabled", "true");
  }
}

gameButton.addEventListener("click", () => {
  if (counter === 0) {
    gameButton.setAttribute("disabled", "true");
    gameField.animate([{
      transform: "rotate(1395deg)"
    }], {
      duration: 3000,
      iterations: 1,
      easing: "ease-in-out",
      fill: "forwards"
    });
    counter++;
    setCookie('spinCount', counter, 7);
    setTimeout(() => {
      $("#firstTurn").modal();
      gameButton.removeAttribute("disabled");
    }, 3300);
  } else if (counter === 1) {
    gameButton.setAttribute("disabled", "true");
    gameField.animate([{
      transform: "rotate(3430deg)"
    }], {
      duration: 3000,
      iterations: 1,
      easing: "ease-in-out",
      fill: "forwards"
    });
    counter++;
    setCookie('spinCount', counter, 7);
    setTimeout(() => {
      $("#secondTurn").modal();
      gameButton.removeAttribute("disabled");
    }, 3300);
    document.querySelector(".btn-reg").classList.toggle("active");
  }
});

oneMore.addEventListener("click", () => {
  gameButton.setAttribute("disabled", "true");
  gameField.animate([{
    transform: "rotate(3734deg)"
  }], {
    duration: 3000,
    iterations: 1,
    easing: "ease-in-out",
    fill: "forwards"
  });
  setTimeout(() => {
    $("#secondTurn").modal();
    gameButton.removeAttribute("disabled");
  }, 3300);
  document.querySelector(".btn-reg").classList.toggle("active");
});
