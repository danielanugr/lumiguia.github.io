let order = [];
let playerOrder = [];
let flash;
let turn;
let isCorrect;
let compTurn;
let intervalId;
let strict = true;
let noise = true;
let win = true;
let on = true;

const buttonSoal1 = document.querySelector("#left_1");
const buttonSoal2 = document.querySelector("#left_2");
const buttonSoal3 = document.querySelector("#left_3");
const buttonSoal4 = document.querySelector("#left_4");
const buttonSoal5 = document.querySelector("#left_5");
const buttonSoal6 = document.querySelector("#left_6");
const buttonSoal7 = document.querySelector("#left_7");
const buttonSoal8 = document.querySelector("#left_8");
const buttonSoal9 = document.querySelector("#left_9");

const buttonAns1 = document.querySelector("#right_1");
const buttonAns2 = document.querySelector("#right_2");
const buttonAns3 = document.querySelector("#right_3");
const buttonAns4 = document.querySelector("#right_4");
const buttonAns5 = document.querySelector("#right_5");
const buttonAns6 = document.querySelector("#right_6");
const buttonAns7 = document.querySelector("#right_7");
const buttonAns8 = document.querySelector("#right_8");
const buttonAns9 = document.querySelector("#right_9");

const turnCounter = document.querySelector("#score");
const startButton = document.querySelector("#start");

startButton.addEventListener('click', (event) => {
    if (on || win) {
        let sound = document.getElementById("startAudio");
        sound.play();
        play();
    }
});

function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;
    for (var i = 0; i < 99; i++) {
        order.push(Math.floor(Math.random() * 9) + 1);
    }
    compTurn = true;

    intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
    on = false;

    if (flash == turn) {
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
        on = true;
    }

    if (compTurn) {
        clearColor();
        setTimeout(() => {
            if (order[flash] == 1) one();
            if (order[flash] == 2) two();
            if (order[flash] == 3) three();
            if (order[flash] == 4) four();
            if (order[flash] == 5) five();
            if (order[flash] == 6) six();
            if (order[flash] == 7) seven();
            if (order[flash] == 8) eight();
            if (order[flash] == 9) nine();
            flash++;
        }, 200);
    }
}

function one() {
    noise = true;
    buttonSoal1.style.backgroundColor = "lightblue";
}

function two() {
    noise = true;
    buttonSoal2.style.backgroundColor = "lightblue";
}
function three() {
    noise = true;
    buttonSoal3.style.backgroundColor = "lightblue";
}
function four() {
    noise = true;
    buttonSoal4.style.backgroundColor = "lightblue";
}
function five() {
    noise = true;
    buttonSoal5.style.backgroundColor = "lightblue";
}
function six() {
    noise = true;
    buttonSoal6.style.backgroundColor = "lightblue";
}
function seven() {
    noise = true;
    buttonSoal7.style.backgroundColor = "lightblue";
}
function eight() {
    noise = true;
    buttonSoal8.style.backgroundColor = "lightblue";
}
function nine() {
    noise = true;
    buttonSoal9.style.backgroundColor = "lightblue";
}

function oneAns() {
    noise = true;
    buttonAns1.style.backgroundColor = "lightblue";
}

function twoAns() {
    noise = true;
    buttonAns2.style.backgroundColor = "lightblue";
}
function threeAns() {
    noise = true;
    buttonAns3.style.backgroundColor = "lightblue";
}
function fourAns() {
    noise = true;
    buttonAns4.style.backgroundColor = "lightblue";
}
function fiveAns() {
    noise = true;
    buttonAns5.style.backgroundColor = "lightblue";
}
function sixAns() {
    noise = true;
    buttonAns6.style.backgroundColor = "lightblue";
}
function sevenAns() {
    noise = true;
    buttonAns7.style.backgroundColor = "lightblue";
}
function eightAns() {
    noise = true;
    buttonAns8.style.backgroundColor = "lightblue";
}
function nineAns() {
    noise = true;
    buttonAns9.style.backgroundColor = "lightblue";
}

function clearColor() {
    buttonSoal1.style.backgroundColor = "black";
    buttonSoal2.style.backgroundColor = "black";
    buttonSoal3.style.backgroundColor = "black";
    buttonSoal4.style.backgroundColor = "black";
    buttonSoal5.style.backgroundColor = "black";
    buttonSoal6.style.backgroundColor = "black";
    buttonSoal7.style.backgroundColor = "black";
    buttonSoal8.style.backgroundColor = "black";
    buttonSoal9.style.backgroundColor = "black";
    buttonAns1.style.backgroundColor = "grey";
    buttonAns2.style.backgroundColor = "grey";
    buttonAns3.style.backgroundColor = "grey";
    buttonAns4.style.backgroundColor = "grey";
    buttonAns5.style.backgroundColor = "grey";
    buttonAns6.style.backgroundColor = "grey";
    buttonAns7.style.backgroundColor = "grey";
    buttonAns8.style.backgroundColor = "grey";
    buttonAns9.style.backgroundColor = "grey";
}

function flashColor() {
    buttonAns1.style.backgroundColor = "red";
    buttonAns2.style.backgroundColor = "red";
    buttonAns3.style.backgroundColor = "red";
    buttonAns4.style.backgroundColor = "red";
    buttonAns5.style.backgroundColor = "red";
    buttonAns6.style.backgroundColor = "red";
    buttonAns7.style.backgroundColor = "red";
    buttonAns8.style.backgroundColor = "red";
    buttonAns9.style.backgroundColor = "red";
}

buttonAns1.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(1);
        check();
        oneAns();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
buttonAns2.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(2);
        check();
        twoAns();
        if (!win) {
            setTimeout(() => {
                flashColor();
            }, 300);
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
buttonAns3.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(3);
        check();
        threeAns();
        if (!win) {
            setTimeout(() => {
                flashColor();
            }, 300);
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
buttonAns4.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(4);
        check();
        fourAns();
        if (!win) {
            setTimeout(() => {
                flashColor();
            }, 300);
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
buttonAns5.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(5);
        check();
        fiveAns();
        if (!win) {
            setTimeout(() => {
                flashColor();
            }, 300);
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
buttonAns6.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(6);
        check();
        sixAns();
        if (!win) {
            setTimeout(() => {
                flashColor();
            }, 300);
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
buttonAns7.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(7);
        check();
        sevenAns();
        if (!win) {
            setTimeout(() => {
                flashColor();
            }, 300);
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
buttonAns8.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(8);
        check();
        eightAns();
        if (!win) {
            setTimeout(() => {
                flashColor();
            }, 300);
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
buttonAns9.addEventListener("click", (event) => {
    if (on) {
        playerOrder.push(9);
        check();
        nineAns();
        if (!win) {
            setTimeout(() => {
                flashColor();
            }, 300);
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

function check() {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
        good = false;

    if (playerOrder.length == 99 && good) {
        winGame();
    }

    if (good == false) {
        let audio = document.getElementById("lose");
        audio.play();
        flashColor();
        turnCounter.innerHTML = turn;
        setTimeout(() => {
            turnCounter.innerHTML = turn;
            clearColor();

            if (strict) {
                winGame();
            }
        }, 800);

        noise = false;
    }

    if (turn == playerOrder.length && good && !win) {
        turn++;
        playerOrder = [];
        compTurn = true;
        flash = 0;
        turnCounter.innerHTML = turn;
        intervalId = setInterval(gameTurn, 800);
    }

}

function winGame() {
    flashColor();
    clearColor();
    turnCounter.innerHTML = turn;
    on = false;
    win = true;
}