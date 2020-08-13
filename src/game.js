import * as Money from './money.js';
import * as Terrain from './terrain.js';
import SimplexNoise from 'simplex-noise';

function* game(player, board) {
  const { width, height } = board;
  const money = Money.make(Math.floor(width * height / 100), width, height);
  const noise = new SimplexNoise(Math.random());
  const rocks = Terrain.make('*', ((x,y) => noise.noise2D(x,y)), board);

  let state = {
    board,
    player: player ? player.next().value : undefined,
    money: money.next().value,
    rocks: rocks.next().value,
  };

  while (true) {
    const action = yield state;
    // calculate next player here
    // Tell money, using moneyState = money.next({ type: 'player-move', player })
    // player.next({ type: 'add-money' })

    let nextPlayer = player
      ? player.next({ action, board: state.board, rocks: state.rocks }).value
      : undefined;

    const shouldPickUp = player && state.money.some(m => m.x === nextPlayer.x && m.y === nextPlayer.y);
    const pickupAction = shouldPickUp
      ? { action: 'pick-up', ...nextPlayer }
      : null;

    if (shouldPickUp) {
      nextPlayer = player.next({ action: 'add-money' }).value;
    }

    state = {
      ...state, 
      player: nextPlayer,
      money: money.next(pickupAction).value,
    }
  }
}

export const make = (player, board = { width: 10, height: 10 }) => {
  const atom = game(player, board);
  atom.next();
  return atom; 
}
