import * as Money from './money.js';

function* game(player) {
  const money = Money.make();

  let state = {
    player: player ? player.next().value : undefined,
    money: money.next().value,
  };

  while (true) {
    const action = yield state;
    state = {
      ...state, 
      player: player? player.next(action).value : undefined,
      money: money.next(action).value,
    }
  }
}

export const make = (player) => {
  const atom = game(player);
  atom.next();
  return atom; 
}
