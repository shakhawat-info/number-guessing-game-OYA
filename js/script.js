let PlayerBtnOne = document.querySelector(".plsub1");
let PlayerBtnTwo = document.querySelector(".plsub2");
let PlayerBtnThree = document.querySelector(".plsub3");
let PlayerBtnFour = document.querySelector(".plsub4");

let PlayerInputOne = document.querySelector(".inputone");
let PlayerInputTwo = document.querySelector(".inputtwo");
let PlayerInputThree = document.querySelector(".inputthree");
let PlayerInputFour = document.querySelector(".inputfour");

let playerboxone = document.querySelector(".playerboxone");
let playerboxtwo = document.querySelector(".playerboxtwo");
let playerboxthree = document.querySelector(".playerboxthree");
let playerboxfour = document.querySelector(".playerboxfour");

let InputOneStatus = document.querySelector(".inptuonestatus");
let InputTwoStatus = document.querySelector(".inputtwostatus");
let InputThreeStatus = document.querySelector(".inputthreestatus");
let InputFourStatus = document.querySelector(".inputfourstatus");

playerboxtwo.style.display = "none";
playerboxthree.style.display = "none";
playerboxfour.style.display = "none";
document.querySelector(".result").style.display = "none";

let playernumber = document.querySelector(".playernumber");

let count = 5;
let winner = document.querySelector("b");

function one() {
  PlayerBtnOne.addEventListener("click", () => {
    if (
      !PlayerInputOne ||
      PlayerInputOne.value < 1 ||
      PlayerInputOne.value > 10 ||
      isNaN(PlayerInputOne.value)
    ) {
      document.querySelector(".inptuonestatus").style.color = "#ff0000";
    } else {
      InputOneStatus.style.color = "transparent";
      playerboxone.style.display = "none";
      playerboxtwo.style.display = "block";
      playernumber.innerHTML = "Player 2";
    }
  });
  let eyeone = document.querySelector("#eyeone");
  eyeone.addEventListener("click", () => {
    if (PlayerInputOne.type === "text") {
      PlayerInputOne.type = "password";
      eyeone.classList = "fa-regular fa-eye-slash";
    } else {
      PlayerInputOne.type = "text";
      eyeone.classList = "fa-regular fa-eye";
    }
  });
}
one();

function two() {
  PlayerBtnTwo.addEventListener("click", () => {
    if (
      !PlayerInputTwo ||
      PlayerInputTwo.value < 1 ||
      PlayerInputTwo.value > 10 ||
      isNaN(PlayerInputTwo.value)
    ) {
      InputTwoStatus.innerHTML = `
      <i class="fa-solid fa-triangle-exclamation"></i> Please Enter a number between 1-10`;
      InputTwoStatus.style.color = "#ff0000";
    } else {
      count -= 1;
      InputTwoStatus.style.color = "#ff0000";
      InputTwoStatus.innerHTML = `You can try ${count} times`;
      if (PlayerInputOne.value != PlayerInputTwo.value && count < 1) {
        playerboxone.style.display = "none";
        playerboxtwo.style.display = "none";
        playerboxthree.style.display = "block";
        playernumber.innerHTML = "Player 3";
        count = 5;
      }
      if (PlayerInputOne.value == PlayerInputTwo.value) {
        playerboxone.style.display = "none";
        playerboxtwo.style.display = "none";
        playerboxthree.style.display = "block";
        playernumber.innerHTML = "Player 3";
        count = 5;
      }
    }
  });
  let eyetwo = document.querySelector("#eyetwo");
  eyetwo.addEventListener("click", () => {
    if (PlayerInputTwo.type === "text") {
      PlayerInputTwo.type = "password";
      eyetwo.classList = "fa-regular fa-eye-slash";
    } else {
      PlayerInputTwo.type = "text";
      eyetwo.classList = "fa-regular fa-eye";
    }
  });
}
two();

function three() {
  PlayerBtnThree.addEventListener("click", () => {
    if (
      !PlayerInputThree ||
      PlayerInputThree.value < 1 ||
      PlayerInputThree.value > 10 ||
      isNaN(PlayerInputThree.value)
    ) {
      InputThreeStatus.innerHTML = `
      <i class="fa-solid fa-triangle-exclamation"></i> Please Enter a number between 1-10`;
      InputThreeStatus.style.color = "#ff0000";
    } else {
      count -= 1;
      InputThreeStatus.style.color = "#ff0000";
      InputThreeStatus.innerHTML = `You can try ${count} times`;
      if (PlayerInputOne.value != PlayerInputThree.value && count < 1) {
        playerboxone.style.display = "none";
        playerboxtwo.style.display = "none";
        playerboxthree.style.display = "none";
        playerboxfour.style.display = "block";
        playernumber.innerHTML = "Player 4";
        count = 5;
      }
      if (PlayerInputOne.value == PlayerInputThree.value) {
        playerboxone.style.display = "none";
        playerboxtwo.style.display = "none";
        playerboxthree.style.display = "none";
        playerboxfour.style.display = "block";
        playernumber.innerHTML = "Player 4";
        count = 5;
      }
    }
  });
  let eyethree = document.querySelector("#eyethree");
  eyethree.addEventListener("click", () => {
    if (PlayerInputThree.type === "text") {
      PlayerInputThree.type = "password";
      eyethree.classList = "fa-regular fa-eye-slash";
    } else {
      PlayerInputThree.type = "text";
      eyethree.classList = "fa-regular fa-eye";
    }
  });
}
three();

function four() {
  PlayerBtnFour.addEventListener("click", () => {
    if (
      !PlayerInputFour ||
      PlayerInputFour.value < 1 ||
      PlayerInputFour.value > 10 ||
      isNaN(PlayerInputFour.value)
    ) {
      InputFourStatus.innerHTML = `
      <i class="fa-solid fa-triangle-exclamation"></i> Please Enter a number between 1-10`;
      InputFourStatus.style.color = "#ff0000";
    } else {
      count -= 1;
      InputFourStatus.style.color = "#ff0000";
      InputFourStatus.innerHTML = `You can try ${count} times`;
      if (PlayerInputOne.value != PlayerInputFour.value && count < 1) {
        playerboxone.style.display = "none";
        playerboxtwo.style.display = "none";
        playerboxthree.style.display = "none";
        playerboxfour.style.display = "none";
        playernumber.innerHTML = "RESULT";
        document.querySelector(".result").style.display = "grid";
        Result();
      }
      if (PlayerInputOne.value == PlayerInputFour.value) {
        playerboxone.style.display = "none";
        playerboxtwo.style.display = "none";
        playerboxthree.style.display = "none";
        playerboxfour.style.display = "none";
        playernumber.innerHTML = "RESULT";
        document.querySelector(".result").style.display = "grid";
        Result();
      }
    }
  });
  let eyefour = document.querySelector("#eyefour");
  eyefour.addEventListener("click", () => {
    if (PlayerInputFour.type === "text") {
      PlayerInputFour.type = "password";
      eyefour.classList = "fa-regular fa-eye-slash";
    } else {
      PlayerInputFour.type = "text";
      eyefour.classList = "fa-regular fa-eye";
    }
  });
}
four();

function Result() {
  if (
    PlayerInputOne.value == PlayerInputTwo.value &&
    PlayerInputOne.value != PlayerInputThree.value &&
    PlayerInputOne.value != PlayerInputFour.value
  ) {
    winner.innerHTML = "WINNER PLAYER 2";
  } else if (
    PlayerInputOne.value != PlayerInputTwo.value &&
    PlayerInputOne.value == PlayerInputThree.value &&
    PlayerInputOne.value != PlayerInputFour.value
  ) {
    winner.innerHTML = "WINNER PLAYER 3";
  } else if (
    PlayerInputOne.value != PlayerInputTwo.value &&
    PlayerInputOne.value != PlayerInputThree.value &&
    PlayerInputOne.value == PlayerInputFour.value
  ) {
    winner.innerHTML = "WINNER PLAYER 4";
  } else if (
    PlayerInputOne.value == PlayerInputTwo.value &&
    PlayerInputOne.value == PlayerInputThree.value &&
    PlayerInputOne.value != PlayerInputFour.value
  ) {
    winner.innerHTML = "WINNER PLAYER 2 & 3";
  } else if (
    PlayerInputOne.value == PlayerInputTwo.value &&
    PlayerInputOne.value != PlayerInputThree.value &&
    PlayerInputOne.value == PlayerInputFour.value
  ) {
    winner.innerHTML = "WINNER PLAYER 2 & 4";
  } else if (
    PlayerInputOne.value != PlayerInputTwo.value &&
    PlayerInputOne.value == PlayerInputThree.value &&
    PlayerInputOne.value == PlayerInputFour.value
  ) {
    winner.innerHTML = "WINNER PLAYER 3 & 4";
  } else if (
    PlayerInputOne.value == PlayerInputTwo.value &&
    PlayerInputOne.value == PlayerInputThree.value &&
    PlayerInputOne.value == PlayerInputFour.value
  ) {
    winner.innerHTML = "ALL PLAYER WINNER";
  } else {
    winner.innerHTML = "WINNER PLAYER 1";
  }
  let givennmbr = document.querySelector(".givennmbr");
  givennmbr.innerHTML = `Correct Number Was : ${PlayerInputOne.value}`;


  let correctNumber = givennmbr.innerHTML;
  givennmbr.innerHTML = "";
  
  let count = 0;
  function counter() {
    givennmbr.innerHTML += correctNumber.charAt(count);
    count++;
    if (count == correctNumber.length) {
      clearInterval(givenNmbrCount);
    }
  }
  let givenNmbrCount = setInterval(() => {
    counter();
  }, 200);
}

document.querySelector(".reset").addEventListener("click", () => {
  location.reload();
});
