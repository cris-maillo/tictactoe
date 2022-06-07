const container = document.getElementById("container");
const noughts = document.getElementById("noughts");
const crosses = document.getElementById("crosses");
crosses.classList = "active";

let board = [
    "", "", "",
    "", "", "",
    "", "", ""];
let turn = "X";



const createBoard = function() {
    
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    console.log("turn" + turn)

    for (let i = 0; i < board.length; i++){
        // create board in DOM, add marks and add function
        let square = document.createElement("div");
        square.id = i;
        square.className = "square";
        square.innerHTML = board[i];
        square.addEventListener("click", addMark);
        container.appendChild(square);
    }
};

// 3. check if win / tie
// 4. check for remaining cells -> tie

const addMark = function(){
    let i = this.id;
    // check if cell is already used
    if (!(board[i] == "X" || board[i] == "O")){
        board[i] = turn;
        switchPlayer();
    }
    
};

const switchPlayer = function(){
    if (turn === "X"){
        noughts.classList = "active";
        crosses.classList.remove("active");
        turn = "O"
    }else{
        crosses.classList = "active";
        noughts.classList.remove("active")
        turn = "X"
    }
    // playerDiv.classList.toggle = "active";
    createBoard();
}


    // const checkIfWinner = function(){
    //     const winningFormulas = [
    //         [1, 2, 3],
    //         [4, 5, 6],
    //         [7, 8, 9],
    //         [1, 4, 7],
    //         [2, 5, 8],
    //         [3, 6, 9],
    //         [1, 5, 9],
    //         [3, 5, 7],
    //       ];
    // }
    

createBoard();


