let PlayerBtnOne = document.querySelector(".plsub1");
let PlayerBtnTwo = document.querySelector(".plsub2");
let PlayerBtnThree = document.querySelector(".plsub3");
let PlayerBtnFour = document.querySelector(".plsub4");
let PlayerBtnFive = document.querySelector(".plsub5");
let PlayerBtnSix = document.querySelector(".plsub6");
let PlayerBtnSeven = document.querySelector(".plsub7");
let PlayerBtnEight = document.querySelector(".plsub8");
let PlayerBtnNine = document.querySelector(".plsub9");
let PlayerBtnTen = document.querySelector(".plsub10");

let PlayerInputOne = document.querySelector(".inputone");
let PlayerInputTwo = document.querySelector(".inputtwo");
let PlayerInputThree = document.querySelector(".inputthree");
let PlayerInputFour = document.querySelector(".inputfour");
let PlayerInputFive = document.querySelector(".inputfive");
let PlayerInputSix = document.querySelector(".inputsix");
let PlayerInputSeven = document.querySelector(".inputseven");
let PlayerInputEight = document.querySelector(".inputeight");
let PlayerInputNine = document.querySelector(".inputnine");
let PlayerInputTen = document.querySelector(".inputten");

let playerboxone = document.querySelector(".playerboxone");
let playerboxtwo = document.querySelector(".playerboxtwo");
let playerboxthree = document.querySelector(".playerboxthree");
let playerboxfour = document.querySelector(".playerboxfour");
let playerboxfive = document.querySelector(".playerboxfive");
let playerboxsix = document.querySelector(".playerboxsix");
let playerboxseven = document.querySelector(".playerboxseven");
let playerboxeight = document.querySelector(".playerboxeight");
let playerboxnine = document.querySelector(".playerboxnine");
let playerboxten = document.querySelector(".playerboxten");

let InputOneStatus = document.querySelector(".inptuonestatus");
let InputTwoStatus = document.querySelector(".inputtwostatus");
let InputThreeStatus = document.querySelector(".inputthreestatus");
let InputFourStatus = document.querySelector(".inputfourstatus");
let InputFiveStatus = document.querySelector(".inputfivestatus");
let InputSixStatus = document.querySelector(".inputsixstatus");
let InputSevenStatus = document.querySelector(".inputsevenstatus");
let InputEightStatus = document.querySelector(".inputeightstatus");
let InputNineStatus = document.querySelector(".inputninestatus");
let InputTenStatus = document.querySelector(".inputtenstatus");

playerboxtwo.style.display = "none";
playerboxthree.style.display = "none";
playerboxfour.style.display = "none";
playerboxfive.style.display = "none";
playerboxsix.style.display = "none";
playerboxseven.style.display = "none";
playerboxeight.style.display = "none";
playerboxnine.style.display = "none";
playerboxten.style.display = "none";
document.querySelector(".result").style.display = "none";

let playernumber = document.querySelector(".playernumber");

let count = 5;
let winer = document.querySelector("b");

function one() {
  PlayerBtnOne.addEventListener("click", () => {
    // console.log(PlayerInputOne.value);

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
        playerboxfive.style.display = "block";
        playernumber.innerHTML = "Player 5";
        count = 5;
      }
      if (PlayerInputOne.value == PlayerInputFour.value) {
        playerboxone.style.display = "none";
        playerboxtwo.style.display = "none";
        playerboxthree.style.display = "none";
        playerboxfour.style.display = "none";
        playerboxfive.style.display = "block";
        playernumber.innerHTML = "Player 5";
        count = 5;
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
function five() {
  PlayerBtnFive.addEventListener("click", () => {
    if (
      !PlayerInputFive ||
      PlayerInputFive.value < 1 ||
      PlayerInputFive.value > 10 ||
      isNaN(PlayerInputFive.value)
    ) {
      InputFiveStatus.innerHTML = `
      <i class="fa-solid fa-triangle-exclamation"></i> Please Enter a number between 1-10`;
      InputFiveStatus.style.color = "#ff0000";
    } else {
      count -= 1;
      InputFiveStatus.style.color = "#ff0000";
      InputFiveStatus.innerHTML = `You can try ${count} times`;
      if (PlayerInputOne.value != PlayerInputFive.value && count < 1) {
        playerboxone.style.display = "none";
        playerboxtwo.style.display = "none";
        playerboxthree.style.display = "none";
        playerboxfour.style.display = "none";
        playerboxfive.style.display = "none";
        playerboxsix.style.display = "block";
        playernumber.innerHTML = "Player 6";
        count = 5;
      }
      if (PlayerInputOne.value == PlayerInputFive.value) {
        playerboxone.style.display = "none";
        playerboxtwo.style.display = "none";
        playerboxthree.style.display = "none";
        playerboxfour.style.display = "none";
        playerboxfive.style.display = "none";
        playerboxsix.style.display = "block";
        playernumber.innerHTML = "Player 6";
        count = 5;
      }
    }
  });
  let eyefive = document.querySelector("#eyefive");
  eyefour.addEventListener("click", () => {
    if (PlayerInputFive.type === "text") {
      PlayerInputFive.type = "password";
      eyefive.classList = "fa-regular fa-eye-slash";
    } else {
      PlayerInputFive.type = "text";
      eyefive.classList = "fa-regular fa-eye";
    }
  });
}
five();
function six() {
  PlayerBtnSix.addEventListener("click", () => {
    if (
      !PlayerInputSix ||
      PlayerInputSix.value < 1 ||
      PlayerInputSix.value > 10 ||
      isNaN(PlayerInputSix.value)
    ) {
      InputSixStatus.innerHTML = `
      <i class="fa-solid fa-triangle-exclamation"></i> Please Enter a number between 1-10`;
      InputSixStatus.style.color = "#ff0000";
    } else {
      count -= 1;
      InputSixStatus.style.color = "#ff0000";
      InputSixStatus.innerHTML = `You can try ${count} times`;
      if (PlayerInputOne.value != PlayerInputSix.value && count < 1) {
        playerboxone.style.display = "none";
        playerboxtwo.style.display = "none";
        playerboxthree.style.display = "none";
        playerboxfour.style.display = "none";
        playerboxfive.style.display = "none";
        playerboxsix.style.display = "none";
        playerboxseven.style.display = "block";
        playernumber.innerHTML = "Player 7";
        count = 5;
      }
      if (PlayerInputOne.value == PlayerInputSix.value) {
        playerboxone.style.display = "none";
        playerboxtwo.style.display = "none";
        playerboxthree.style.display = "none";
        playerboxfour.style.display = "none";
        playerboxfive.style.display = "none";
        playerboxsix.style.display = "none";
        playerboxseven.style.display = "block";
        playernumber.innerHTML = "Player 7";
        count = 5;
      }
    }
  });
  let eyesix = document.querySelector("#eyesix");
  eyesix.addEventListener("click", () => {
    if (PlayerInputSix.type === "text") {
      PlayerInputSix.type = "password";
      eyesix.classList = "fa-regular fa-eye-slash";
    } else {
      PlayerInputSix.type = "text";
      eyesix.classList = "fa-regular fa-eye";
    }
  });
}
six();

function seven() {
  PlayerBtnSeven.addEventListener("click", () => {
    if (
      !PlayerInputSeven ||
      PlayerInputSeven.value < 1 ||
      PlayerInputSeven.value > 10 ||
      isNaN(PlayerInputSeven.value)
    ) {
      InputSevenStatus.innerHTML = `
      <i class="fa-solid fa-triangle-exclamation"></i> Please Enter a number between 1-10`;
      InputSevenStatus.style.color = "#ff0000";
    } else {
      count -= 1;
      InputSevenStatus.style.color = "#ff0000";
      InputSevenStatus.innerHTML = `You can try ${count} times`;
      if (PlayerInputOne.value != PlayerInputSeven.value && count < 1) {
        playerboxone.style.display = "none";
        playerboxtwo.style.display = "none";
        playerboxthree.style.display = "none";
        playerboxfour.style.display = "none";
        playerboxfive.style.display = "none";
        playerboxsix.style.display = "none";
        playerboxseven.style.display = "none";
        playerboxeight.style.display = "block";
        playernumber.innerHTML = "Player 8";
        count = 5;
      }
      if (PlayerInputOne.value == PlayerInputSeven.value) {
        playerboxone.style.display = "none";
        playerboxtwo.style.display = "none";
        playerboxthree.style.display = "none";
        playerboxfour.style.display = "none";
        playerboxfive.style.display = "none";
        playerboxsix.style.display = "none";
        playerboxseven.style.display = "none";
        playerboxeight.style.display = "block";
        playernumber.innerHTML = "Player 8";
        count = 5;
      }
    }
  });
  let eyeseven = document.querySelector("#eyeseven");
  eyeseven.addEventListener("click", () => {
    if (PlayerInputSeven.type === "text") {
      PlayerInputSeven.type = "password";
      eyeseven.classList = "fa-regular fa-eye-slash";
    } else {
      PlayerInputSeven.type = "text";
      eyeseven.classList = "fa-regular fa-eye";
    }
  });
}
seven();
function eight() {
  PlayerBtnEight.addEventListener("click", () => {
    if (
      !PlayerInputEight ||
      PlayerInputEight.value < 1 ||
      PlayerInputEight.value > 10 ||
      isNaN(PlayerInputEight.value)
    ) {
      InputEightStatus.innerHTML = `
      <i class="fa-solid fa-triangle-exclamation"></i> Please Enter a number between 1-10`;
      InputEightStatus.style.color = "#ff0000";
    } else {
      count -= 1;
      InputEightStatus.style.color = "#ff0000";
      InputEightStatus.innerHTML = `You can try ${count} times`;
      if (PlayerInputOne.value != PlayerInputEight.value && count < 1) {
        playerboxone.style.display = "none";
        playerboxtwo.style.display = "none";
        playerboxthree.style.display = "none";
        playerboxfour.style.display = "none";
        playerboxfive.style.display = "none";
        playerboxsix.style.display = "none";
        playerboxseven.style.display = "none";
        playerboxeight.style.display = "none";
        playerboxnine.style.display = "block";
        playernumber.innerHTML = "Player 9";
        count = 5;
      }
      if (PlayerInputOne.value == PlayerInputEight.value) {
        playerboxone.style.display = "none";
        playerboxtwo.style.display = "none";
        playerboxthree.style.display = "none";
        playerboxfour.style.display = "none";
        playerboxfive.style.display = "none";
        playerboxsix.style.display = "none";
        playerboxseven.style.display = "none";
        playerboxeight.style.display = "none";
        playerboxnine.style.display = "block";
        playernumber.innerHTML = "Player 9";
        count = 5;
      }
    }
  });
  let eyenine = document.querySelector("#eyenine");
  eyenine.addEventListener("click", () => {
    if (PlayerInputEight.type === "text") {
      PlayerInputEight.type = "password";
      eyenine.classList = "fa-regular fa-eye-slash";
    } else {
      PlayerInputEight.type = "text";
      eyenine.classList = "fa-regular fa-eye";
    }
  });
}
eight();
function nine() {
  PlayerBtnNine.addEventListener("click", () => {
    if (
      !PlayerInputNine ||
      PlayerInputNine.value < 1 ||
      PlayerInputNine.value > 10 ||
      isNaN(PlayerInputNine.value)
    ) {
      InputNineStatus.innerHTML = `
      <i class="fa-solid fa-triangle-exclamation"></i> Please Enter a number between 1-10`;
      InputNineStatus.style.color = "#ff0000";
    } else {
      count -= 1;
      InputNineStatus.style.color = "#ff0000";
      InputNineStatus.innerHTML = `You can try ${count} times`;
      if (PlayerInputOne.value != PlayerInputNine.value && count < 1) {
        playerboxone.style.display = "none";
        playerboxtwo.style.display = "none";
        playerboxthree.style.display = "none";
        playerboxfour.style.display = "none";
        playerboxfive.style.display = "none";
        playerboxsix.style.display = "none";
        playerboxseven.style.display = "none";
        playerboxeight.style.display = "none";
        playerboxnine.style.display = "none";
        playerboxten.style.display = "block";
        playernumber.innerHTML = "Player 10";
        count = 5;
      }
      if (PlayerInputOne.value == PlayerInputNine.value) {
        playerboxone.style.display = "none";
        playerboxtwo.style.display = "none";
        playerboxthree.style.display = "none";
        playerboxfour.style.display = "none";
        playerboxfive.style.display = "none";
        playerboxsix.style.display = "none";
        playerboxseven.style.display = "none";
        playerboxeight.style.display = "none";
        playerboxnine.style.display = "none";
        playerboxten.style.display = "block";
        playernumber.innerHTML = "Player 10";
        count = 5;
      }
    }
  });
  let eyenine = document.querySelector("#eyenine");
  eyenine.addEventListener("click", () => {
    if (PlayerInputNine.type === "text") {
      PlayerInputNine.type = "password";
      eyenine.classList = "fa-regular fa-eye-slash";
    } else {
      PlayerInputNine.type = "text";
      eyenine.classList = "fa-regular fa-eye";
    }
  });
}
nine();
function ten() {
  PlayerBtnTen.addEventListener("click", () => {
    if (
      !PlayerInputTen ||
      PlayerInputTen.value < 1 ||
      PlayerInputTen.value > 10 ||
      isNaN(PlayerInputTen.value)
    ) {
      InputTenStatus.innerHTML = `
      <i class="fa-solid fa-triangle-exclamation"></i> Please Enter a number between 1-10`;
      InputTenStatus.style.color = "#ff0000";
    } else {
      count -= 1;
      InputTenStatus.style.color = "#ff0000";
      InputTenStatus.innerHTML = `You can try ${count} times`;
      if (PlayerInputOne.value != PlayerInputTen.value && count < 1) {
        playerboxone.style.display = "none";
        playerboxtwo.style.display = "none";
        playerboxthree.style.display = "none";
        playerboxfour.style.display = "none";
        playerboxfive.style.display = "none";
        playerboxsix.style.display = "none";
        playerboxseven.style.display = "none";
        playerboxeight.style.display = "none";
        playerboxnine.style.display = "none";
        playerboxten.style.display = "none";
        playernumber.innerHTML = "R E S U L T";
        document.querySelector(".result").style.display = "grid";
        Result();
      }
      if (PlayerInputOne.value == PlayerInputTen.value) {
        playerboxone.style.display = "none";
        playerboxtwo.style.display = "none";
        playerboxthree.style.display = "none";
        playerboxfour.style.display = "none";
        playerboxfive.style.display = "none";
        playerboxsix.style.display = "none";
        playerboxseven.style.display = "none";
        playerboxeight.style.display = "none";
        playerboxnine.style.display = "none";
        playerboxten.style.display = "none";
        playernumber.innerHTML = "R E S U L T";
        document.querySelector(".result").style.display = "grid";
        Result();
      }
    }
  });
  let eyeten = document.querySelector("#eyeten");
  eyeten.addEventListener("click", () => {
    if (PlayerInputTen.type === "text") {
      PlayerInputTen.type = "password";
      eyeten.classList = "fa-regular fa-eye-slash";
    } else {
      PlayerInputTen.type = "text";
      eyeten.classList = "fa-regular fa-eye";
    }
  });
}
ten();

function Result() {
  const inputs = [
    PlayerInputOne,
    PlayerInputTwo,
    PlayerInputThree,
    PlayerInputFour,
    PlayerInputFive,
    PlayerInputSix,
    PlayerInputSeven,
    PlayerInputEight,
    PlayerInputNine,
    PlayerInputTen,
  ];

  let winners = [];
  let correctNumber = PlayerInputOne.value;

  inputs.forEach((input, index) => {
    if (input.value === correctNumber) {
      winners.push(index + 1);
    }
  });

  let resultMessage;
  if (winners.length === 0) {
    resultMessage = "All Players Failed";
  } else if (winners.length === inputs.length) {
    resultMessage = "All Players Winner";
  } else {
    resultMessage = `Player${winners.length > 1 ? "s" : ""} ${winners.join(
      " , "
    )} Winner`;
  }

  winer.innerHTML = resultMessage;

  let givennmbr = document.querySelector(".givennmbr");
  givennmbr.innerHTML = `Correct Number Was: ${PlayerInputOne.value}`;
  typecontent = givennmbr.innerHTML;
  givennmbr.innerHTML = "";
  let count = -1;
  function counter() {
    if (count < typecontent.length) {
      count++;
      givennmbr.innerHTML += typecontent.charAt(count);
    } else {
      clearInterval(givenNmbrCount);
    }
  }
  let givenNmbrCount = setInterval(counter, 200);
}

document.querySelector(".reset").addEventListener("click", () => {
  location.reload();
});
