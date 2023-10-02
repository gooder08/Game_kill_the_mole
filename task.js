const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

let dead = 0; 
let lost = 0; 


function handleMoleClick() {
  if (this.classList.contains('hole_has-mole')) {
    dead++; 
    deadCounter.textContent = dead; 
  } else {
    lost++; 
    lostCounter.textContent = lost; 
  }

  if (dead === 10) {
    alert('Вы победили!');
    resetGame();
  } else if (lost === 5) {
    alert('Вы проиграли!');
    resetGame();
  }

  this.classList.remove('hole_has-mole');
}

function resetGame() {
  dead = 0;
  lost = 0;
  deadCounter.textContent = dead;
  lostCounter.textContent = lost;

}

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
  const hole = getHole(i);
  hole.addEventListener('click', handleMoleClick);
}

resetGame();