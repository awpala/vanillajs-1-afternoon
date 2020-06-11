// console.log('this is a test!');

let board = [];

/* 
N.B. Adopted O(1) algorithm described in https://medium.com/@shray.7/check-tic-tac-toe-winner-at-o-1-time-complexity-a86e644aae13
using a tabular technique to memoize the current results of X & O 
after each move (i.e., row ---, column |, diagonal \, or anti-diagonal /).
*/

const sideLength = 3;

// Initialize tally counters for X and O
let rowX = Array(sideLength).fill(0), colX = Array(sideLength).fill(0), diagX = 0, antiDiagX = 0;
let rowO = Array(sideLength).fill(0), colO = Array(sideLength).fill(0), diagO = 0, antiDiagO = 0;

let totalMoves = 0;


function play(clickedId) {
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId);

    if(playerSpan.innerText === 'X') {
        // Update 'X' entry on board
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';

        totalMoves++;

        // Tally 'X' counters
        rowX[clickedId % sideLength]++;
        colX[Math.floor(clickedId / sideLength)]++;

        switch(clickedId) {
            case 0:
            case 8:
                diagX++;
                break;
            case 2:
            case 6:
                antiDiagX++;
                break;
            case 4:
                diagX++;
                antiDiagX++;
                break;
        }
        // console.log(rowX, colX, diagX, antiDiagX);
    } else {
        // Update 'O' entry on board
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';

        totalMoves++;

        // Tally 'O' counters
        rowO[clickedId % sideLength]++;
        colO[Math.floor(clickedId / sideLength)]++;

        switch(clickedId) {
            case 0:
            case 8:
                diagO++;
                break;
            case 2:
            case 6:
                antiDiagO++;
                break;
            case 4:
                diagO++;
                antiDiagO++;
                break;
        }
        // console.log(rowO, colO, diagO, antiDiagO);
    }
    // console.log(board);

    // Evaluate final result (all rows, all columns, 
    // diagonals, or anti-diagonals), output as alert
    if(rowX.find(el => el === sideLength) === sideLength ||
        colX.find(el => el === sideLength) === sideLength ||
        diagX === sideLength ||
        antiDiagX === sideLength) {
            alert('X is the winner');
        } 
        else if (rowO.find(el => el === sideLength) === sideLength ||
        colO.find(el => el === sideLength) === sideLength ||
        diagO === sideLength ||
        antiDiagO === sideLength) {
            alert('O is the winner');
        } 
        else if (totalMoves === sideLength*sideLength) {
            alert(`Cat's game, no winner!`);
        }
}