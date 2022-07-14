let currentTurn = 0;
document.querySelector(".playerTurn").textContent = "Current Player's Turn: X"

//Possible cell combinations for winner
const winningCells = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

const playerX = [];
const playerO = [];

function check(playerCells, winningCells) {
    for (let i = 0; i < winningCells.length; i++) {
        let count = 0;
        for (let j = 0; j < playerCells.length; j++) {
            if (winningCells[i].includes(playerCells[j])) {
                count++;
            }

            if (count === 3) {
                //document.getElementById("result").textContent = "winner:"


                for (let x = 0; x < winningCells[i].length; x++) {
                    if (currentTurn % 2 == 0) {
                        document.getElementById(winningCells[i][x] + "").style.cssText = 'background-color: yellow; color: black;';
                    } else {
                        document.getElementById(winningCells[i][x] + "").style.cssText = 'background-color: red; color: black;';
                    }

                    //console.log(winningCells[x]);
                }


                //console.log(winningCells[i]);


                return true;
            }
        }
    }

    return false;
}

document.onclick = (e) => {
    if (currentTurn % 2 == 0) {
        document.querySelector(".playerTurn").textContent = "Current Player's Turn: O"
        playerX.push(parseInt(e.target.textContent));
        e.target.classList.add("reveal");
        e.target.textContent = "X";
        currentTurn++;
        if (check(playerX, winningCells)) {
            document.getElementById("result").textContent = "winner! Player X";
            document.querySelector(".playerTurn").textContent = "--";
        }
    } else {
        document.querySelector(".playerTurn").textContent = "Current Player's Turn: X";
        playerO.push(parseInt(e.target.textContent));
        e.target.classList.add("reveal");
        e.target.textContent = "O";
        currentTurn++;
        if (check(playerO, winningCells)) {
            document.getElementById("result").textContent = "winner! Player O";
            document.querySelector(".playerTurn").textContent = "--";
        }

    }
}




