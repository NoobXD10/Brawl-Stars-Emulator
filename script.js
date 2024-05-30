// Constants
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const resultText = document.getElementById('resultText');

// Game variables
let playerHealth = 100;
let computerHealth = 100;
let round = 0;

// Helper functions
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decreaseHealth(healthElement, damage) {
  healthElement.textContent = parseInt(healthElement.textContent) - damage;
}

// Game functions
function startRound() {
  round++;
  const playerDamage = getRandomNumber(10, 20);
  const computerDamage = getRandomNumber(10, 20);

  decreaseHealth(player.getElementsByClassName('health')[0], computerDamage);
  decreaseHealth(computer.getElementsByClassName('health')[0], playerDamage);

  if (playerHealth <= 0 || computerHealth <= 0) {
    endGame();
  }
}

function endGame() {
  if (playerHealth <= 0) {
    resultText.textContent = 'You lost!';
  } else {
    resultText.textContent = 'You won!';
  }

  // Disable buttons
  const buttons = document.getElementsByTagName('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}

// Event listeners
document.getElementById('attackButton').addEventListener('click', startRound);
