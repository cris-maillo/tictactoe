let squares;

const gameBoard = (function() {
    const square = {
        mark: ""
    };
    
    const board = [" ", " ", " "," ", " ", " ", "X", "O", "X"];
    
    const createBoard = (function() {
        let container = document.getElementById("container");
        
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }

        for (let i = 0; i < board.length; i++){
            squares = document.createElement("div");
            squares.id = i;
            squares.className = "squares";
            squares.innerHTML = board[i];
            squares.addEventListener("click", addMark);
            container.appendChild(squares);
            
        }
        console.log(board.findIndex(squares => squares.innerHTML === "0"))
        console.log(board.indexOf(squares => squares.innerHTML === "0"))
        
    });
    
    const addMark = function(){
        console.log("adding Mark")

        let i = board.findIndex(squares => squares.id === this.parentNode.childNodes[0].innerHTML);

        console.log("id" + squares.id);
        console.log("hello" + (squares.id === this.parentNode.childNodes[0].innerHTML))


        console.log(i);
        board[i] = "X";
        console.log(board);
        createBoard();
    }
    
    return {square, board, createBoard, addMark}

})();



gameBoard.createBoard();

