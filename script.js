const container = document.getElementById("container");
const noughts = document.getElementById("noughts");
const crosses = document.getElementById("crosses");
const overlay = document.getElementById("overlay");
const outcome = document.getElementById("outcome");
let winner;

crosses.classList = "active";

let board = [
    "", "", "",
    "", "", "",
    "", "", ""];

let turn = "X";
let startingPlayer = "X";



class Board{
    constructor(board){
        this.board = board;
    }

    createBoard(){
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
    
        for (let i = 0; i < board.length; i++){
            // create board in DOM, add marks and add function
            let square = document.createElement("div");
            square.id = i;
            square.className = "square";
            square.innerHTML = board[i];
            square.addEventListener("click", addMark);
            container.appendChild(square);
        }
    }

    addMark(){
        let i = this.id;
        // check if cell is already used
        if (!(board[i] == "X" || board[i] == "O")){
            board[i] = turn;
            if (checkIfWinner()){
                if (turn == "X"){
                    winner = "Crosses"
                }else{
                    winner = "Noughts"
                }
                outcome.innerHTML = winner +  " Wins";
                endGame();
            }
            switchPlayer();
        }
        console.log(checkIfWinner())
        

        if (isTie()){
            outcome.innerHTML = "It is a Tie";
            console.log("tie")
            endGame();
        }
    }
}

class Player{
    constructor(){
        
    }

    switchPlayer(){
        if (turn === "X"){
            noughts.classList = "active";
            crosses.classList.remove("active");
            turn = "O"
        }else{
            crosses.classList = "active";
            noughts.classList.remove("active")
            turn = "X"
        }
    
        createBoard();
    }
}




function isTie() {
    for (let i = 0; i < 9; i++) {
        if (board[i] == "") {
            return false
        }
    }
    return true
}




function checkIfWinner(){
    if  (board[0] === turn && board[1] === turn && board[2] === turn
        || board[3] === turn && board[4] === turn && board[5] === turn
        || board[6] === turn && board[7] === turn && board[8] === turn
        || board[0] === turn && board[3] === turn && board[6] === turn
        || board[1] === turn && board[4] === turn && board[7] === turn
        || board[2] === turn && board[5] === turn && board[8] === turn
        || board[0] === turn && board[4] === turn && board[8] === turn
        || board[2] === turn && board[4] === turn && board[6] === turn){
            console.log("winner")
            return true
        }
        
    else{
        console.log("loser")
        return false}
};

function endGame(){
    console.log("End of Game")
    for (let i = 0; i < overlay.length; i++) {
        overlay[i].style.display = "block";
      }
    overlay.style.display = "block";
    document.getElementById("reset").onclick = function(){
        resetBoard();
    };
    
}

function resetBoard(){
    console.log("reset")
    overlay.style.display = "none";
    board = [
        "", "", "",
        "", "", "",
        "", "", ""];
    if (startingPlayer === "X"){
        noughts.classList = "active";
        crosses.classList.remove("active");
        turn = "O"
    }else{
        crosses.classList = "active";
        noughts.classList.remove("active")
        turn = "X"
    }
    createBoard();
}


createBoard();


