let currentTurn = 0;
document.querySelector(".playerTurn").textContent = "Current Player's Turn: X"

document.onclick = (e) => {
    if (currentTurn % 2 == 0) {
        document.querySelector(".playerTurn").textContent = "Current Player's Turn: O"
        e.target.textContent = "X";
        currentTurn++;
    } else {
        document.querySelector(".playerTurn").textContent = "Current Player's Turn: X";
        e.target.textContent = "O";
        currentTurn++;
    }
}


