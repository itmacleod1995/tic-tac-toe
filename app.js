let currentTurn = 1;

document.onclick = (e) => {
    if (currentTurn % 2 == 0) {
        e.target.textContent = "X";
        currentTurn++;
    } else {
        e.target.textContent = "O";
        currentTurn++;
    }
}


console.log(`Current turn is ${currentTurn}`);

