
const gameBoard = (function() {
    const board = [" ", " ", " "," ", " ", " ", " ", " ", " "];
    
    const createBoard = (function() {
        let container = document.getElementById("container");
        
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }

        for (let i = 0; i < board.length; i++){
            let square = document.createElement("div");
            square.id = i;
            square.className = "square";
            square.innerHTML = board[i];
            square.addEventListener("click", addMark);
            container.appendChild(square);
            
        }
    });
    
    const addMark = function(){
        let i = this.id;
        // check if cell is already used
        if (board[i] == "X" || board[i] == "O"){
            console.log("in")
        }else{
            board[i] = "X";
            createBoard();
        }
        
    }
    
    return {board, createBoard, addMark}

})();



gameBoard.createBoard();

