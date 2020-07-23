import * as Game from './game';
import * as Player from './player.js';

const player = Player.make('Perpooply');
const world = document.querySelector('#world');
const size = {
  width: 80,
  height: 25,
}

const game = Game.make(player, size);
console.log(game);

const update = (action) => {
  const {value:state} = game.next(action);
  let worldString = '';
  for(let y = 0; y < size.height; y++) {
    for(let x = 0; x < size.width; x++) {
      let characterToAdd = '.'
      if (state.player.x === x && state.player.y === y) {
        characterToAdd = '@';
      }
      if (state.money.find((money) => money.x == x && money.y == y)) {
        characterToAdd = '$';
      }
      worldString += characterToAdd;
    }
    worldString += '\n';
  }

  world.innerHTML = worldString;
};

update();

document.addEventListener('keydown', (event) => {
  console.log(event.key);
  switch(event.key) {
    case 'ArrowUp':
      return update('up');
    case 'ArrowDown':
      return update('down');
    case 'ArrowLeft':
      return update('left');
    case 'ArrowRight':
      return update('right');

  }
});
