function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

const gameButton = document.querySelector(".button_game"),
  gameField = document.querySelector(".field"),
  oneMore = document.querySelector(".one-more");
let counter = 0;

const spinCountCookie = getCookie('spinCount');
if (spinCountCookie) {
  counter = parseInt(spinCountCookie, 10);
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
