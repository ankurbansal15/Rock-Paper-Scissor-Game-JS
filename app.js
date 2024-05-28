let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}
let msg = document.querySelector(".msg");
const playGame = (userChoice)=>{
     const compChoice = genCompChoice();
     console.log(`User choice is ${userChoice} & Computer choice is ${compChoice}`);
     let userBoard = document.querySelector("#user-score");
     let compBoard = document.querySelector("#computer-score");
     if(userChoice == "rock" && compChoice == "paper"){
        compScore++;
        msg.innerText = "You Loose!";
     }else if(userChoice == "paper" && compChoice == "scissors"){
        compScore++;
        msg.innerText = "You Loose!";
     }else if(userChoice == "scissors" && compChoice == "rock"){
        compScore++;
        msg.innerText = "You Loose!";
     }else if(userChoice == "rock" && compChoice == "scissors"){
        userScore++;
        msg.innerText = "You Win!"
     }else if(userChoice == "paper" && compChoice == "rock"){
        userScore++;
        msg.innerText = "You Win!"
     }else if(userChoice == "scissors" && compChoice == "paper"){
        userScore++;
        msg.innerText = "You Win!"
     }else{
        msg.innerText = "Game is Draw! Play Again"
     }
     userBoard.innerText = userScore;
     compBoard.innerText = compScore;

}
choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
    const userChoice = choice.getAttribute("id");
     playGame(userChoice);
    })
})