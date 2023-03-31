const cells = document.querySelectorAll('.cell');
const resetButton = document.querySelector('#reset');
let currentPlayer = 'X';

cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', handleResetButtonClick);

function handleCellClick(event) {
  const cell = event.target;
  if (cell.classList.contains('x') || cell.classList.contains('o')) {
    return;
  }
  cell.classList.add(currentPlayer);
  cell.textContent = currentPlayer;
  if (checkWin()) {
    alert(`${currentPlayer} wins!`);
    resetGame();
  } else if (checkTie()) {
    alert('Tie!');
    resetGame();
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWin() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];
  return winningCombos.some(combo => {
    return combo.every(index => {
      return cells[index].classList.contains(currentPlayer);
    });
  });
}