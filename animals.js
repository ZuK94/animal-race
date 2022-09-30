const dogBox = document.getElementById("dog-box");
const horseBox = document.getElementById("horse-box");
const duckBox = document.getElementById("duck-box");
const chickBox = document.getElementById("chick-box");
const masterBtn = document.getElementById("master-btn");
const winnerBoard = document.getElementById("winner-board");
const horseSound = new Audio("./media/horse.wav");
const dogSound = new Audio("./media/dog.wav");
const duckSound = new Audio("./media/duck.mp3");
const chickSound = new Audio("./media/chick.wav");

let rendered = false;

let animalTimer0;
let animalTimer1;
let animalTimer2;
let animalTimer3;

let horseChance;
let dogChance;
let chickChance;
let duckChance;

const runners = [
  {
    name: "dog",
    id: dogBox,
    voice: dogSound,
    img: "dog.gif",
    step: 50,
    position: 0,
    ifChosen: false,
  },
  {
    name: "horse",
    id: horseBox,
    voice: horseSound,
    img: "horse.gif",
    step: 70,
    position: 0,
  },
  {
    name: "duck",
    id: duckBox,
    voice: duckSound,
    img: "duck.gif",
    step: 40,
    position: 0,
  },
  {
    name: "chick",
    id: chickBox,
    voice: chickSound,
    img: "chick.gif",
    step: 30,
    position: 0,
  },
];

if (rendered) {
  masterBtn.innerHTML = "start the race";
}

let myInterval;
masterBtn.addEventListener("click", function () {
  if (rendered) {
    setBorder();
    myInterval = setInterval(function () {
      for (let runner of runners)
        if (parseInt(runner.position) >= window.innerWidth - 204) {
          clearInterval(myInterval);
          showWinner(runner);
        }
      chooseRandomPlayer();
      rendered = false;
    }, 500);
    masterBtn.innerText = "set to start";
  } else {
    clearInterval(myInterval);
    clearTimeout(animalTimer0);
    clearTimeout(animalTimer1);
    clearTimeout(animalTimer2);
    clearTimeout(animalTimer3);
    clearBorder();
    setToStart();
  }
});

function renderPosition() {
  dogBox.style.left = runners[0].position + "px";
  horseBox.style.left = runners[0].position + "px";
  duckBox.style.left = runners[0].position + "px";
  chickBox.style.left = runners[0].position + "px";
  rendered = true;
}

function setToStart() {
  for (let runner of runners) {
    runner.position = 0;
    masterBtn.innerText = "start the race";
  }

  renderPosition();
}
function chooseRandomPlayer() {
  let randomPlayer = getRandomInt(runners.length);
  theChosenPlayer(randomPlayer);
}
let myPlayer;
function setBorder() {
  let myPlayerId = getRandomInt(runners.length);
  runners[myPlayerId].id.style.boxShadow = "0 12px 10px -8px black";

  return (myPlayer = runners[myPlayerId]);
}

function getRandomInt(run) {
  return Math.floor(Math.random() * run);
}
function clearBorder() {
  for (const runner of runners) {
    runner.id.style.boxShadow = "";
  }
}

function theChosenPlayer(randomPlayer) {
  switch (runners[randomPlayer].name) {
    case `dog`:
      dogChance = Math.random();
      if (dogChance < 0.5) {
        animalTimer0 = setTimeout(function () {
          moveLeft(0);
          addSound(0);
        }, 500);
      } else {
      }

      break;
    case `horse`:
      horseChance = Math.random();
      if (horseChance < 0.3) {
        animalTimer1 = setTimeout(function () {
          moveLeft(1);
          addSound(1);
        }, 500);
      } else {
      }
      break;
    case `duck`:
      duckChance = Math.random();
      if (duckChance < 0.6) {
        animalTimer2 = setTimeout(
          function () {
            moveLeft(2);
            addSound(2);
          },

          500
        );
      } else {
      }
      break;
    case `chick`:
      chickChance = Math.random();
      if (chickChance < 0.7) {
        animalTimer3 = setTimeout(
          function () {
            moveLeft(3);
            addSound(3);
          },

          500
        );
      } else {
      }
      break;
  }
}

function showWinner(winner) {
  alert(`the ${winner.name} has won`);
}

let runnerStep;
function moveLeft(index) {
  runners[index].position += runners[index].step;
  runners[index].id.style.left = runners[index].position + "px";
}
function addSound(index) {
  runners[index].voice.play();
}
