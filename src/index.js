import * as Game from './game';
import * as Player from './player.js';

const player = Player.make('Perpooply');
const world = document.querySelector('#world');
const size = {
  width: 10,
  height: 10,
}

const game = Game.make(player, size);

const update = (action) => {
  const {value:state} = game.next(action);
  const playerMoney = `\$ ${state.player.money}`;

  let worldString = [
    '+'.padEnd(19, '-') + '+',
    `| ${playerMoney.padEnd(17)}|`,
    `${'+'.padEnd(19, '-')}+\n`
  ].join(`\n`);

  for(let y = 0; y < size.height; y++) {
    for(let x = 0; x < size.width; x++) {
      let characterToAdd = '.'
      if (state.player.x === x && state.player.y === y) {
        characterToAdd = '@';
      }
      if (state.money.find((money) => money.x == x && money.y == y)) {
        characterToAdd = '$';
      }
      if (state.rocks.find((rock) => rock.x == x && rock.y == y)) {
        characterToAdd = '#';
      }
      worldString += characterToAdd;
    }
    worldString += '\n';
  }

  world.innerHTML = worldString;
};

update();

document.addEventListener('keydown', (event) => {
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
