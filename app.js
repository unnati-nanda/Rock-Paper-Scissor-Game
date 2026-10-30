let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genComputerChoice=()=>{
    const option=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    // yaha [0 to 2 ]chahiye isliye 3 se multiply kr rhe . range hmesha multiply kr rhe number se ek km aata hai 
    //Math.floor is used for removing the decimal 
    return option[randIdx];
};

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="draw!";
    msg.style.backgroundColor="#081b31";

}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`you win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`you lose!  ${compChoice} beats ${userChoice}`;
         msg.style.backgroundColor="red";

    }
}

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=genComputerChoice();
    //generate computer choice
    console.log("comp choice= ",compChoice);
    //Draw game
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin= true;
        if(userChoice === "rock"){
            userWin = compChoice==="paper"? false:true;
        }else if(userChoice === "paper"){
            userWin = compChoice==="scissor"? false:true;
    }else{
        userWin=compChoice==="rock"? false:true;
    }
 showWinner(userWin,userChoice,compChoice);
}
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    console.log("choice was clicked");
    playGame(userChoice);

    });
});