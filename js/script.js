const gameArea = document.getElementById('game_area'),
      boxes = document.querySelectorAll('.box'),
      modal = document.querySelector('.modal'),
      overlay = modal.querySelector('.overlay'),
      newGameBtn = modal.querySelector('button');

let move = 0;

gameArea.addEventListener('click', e => {

  if (e.target && e.target.matches('.box')) {
     if (move % 2 === 0) {
        e.target.innerHTML = `<div class="element cross"></div>`
      } else {
        e.target.innerHTML = `<div class="element circle"></div>`
      }
      move++;
      check();
  }

})

const check = () => {
  const victory = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  let result;

  for (let i = 0; i < victory.length; i++) {
    if (
      boxes[victory[i][0]].innerHTML == `<div class="element cross"></div>` && boxes[victory[i][1]].innerHTML == `<div class="element cross"></div>` && boxes[victory[i][2]].innerHTML == `<div class="element cross"></div>`
    ) {
      result = 'crosses';
      winnerResult(result)
    } 
    else if (
      boxes[victory[i][0]].innerHTML == `<div class="element circle"></div>` && boxes[victory[i][1]].innerHTML == `<div class="element circle"></div>` && boxes[victory[i][2]].innerHTML == `<div class="element circle"></div>`
    ) {
      result = 'circles';
      winnerResult(result)
    }
  }   
}

const winnerResult = winner => {
  modal.classList.add('active');
  document.querySelector('.winner').textContent = winner; 
  newGameBtn.addEventListener('click', e => {
    location.reload();
  })
}