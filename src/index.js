import * as Game from './game';
import * as Player from './player.js';

const world = document.querySelector('#world');

const player = Player.make('Perpooply');
const game = Game.make(player);

const update = (action) => {
  const {
    value: state,
    done,
  } = game.next(action);

  if (done) return;

  let worldString = '';
  for(let y = 0; y < state.size.height; y++) {
    for(let x = 0; x < state.size.width; x++) {
      worldString += state.player.x === x && state.player.y === y 
        ? '@'
        :'.';

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
