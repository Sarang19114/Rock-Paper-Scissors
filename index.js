let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const usp = document.querySelector("#user-score");
const csp = document.querySelector("#comp-score");

const gencomp = () => {
    const opt= ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return opt[randIdx];
};

const drawg = () => {
    msg.innerText = "Game was draw. Play again!";
    msg.style.backgroundColor = "#153243";
};

const showWinner = (userWin, userChoice, compch) => {
    if(userWin) {
        userScore++;
        usp.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compch}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        csp.innerText = compScore;
        msg.innerText = `You lose! ${compch} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    const compch = gencomp();
    if(userChoice === compch) {
        drawg();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compch === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compch === "scissors" ? false : true;
        } else {
            userWin = compch === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compch);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});