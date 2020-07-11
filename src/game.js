export const defaultState = {
  size: {
    width: 80,
    height: 20,
  },
  player: undefined,
};

function* game(player) {
  let state = {
    ...defaultState,
    player: player ? player.next().value : undefined
  };

  while (true) {
    const action = yield state;
    state = {
      ...state, 
      player: player? player.next(action).value: undefined
    }
  }
}

export const make = (player) => {
  const atom = game(player);
  atom.next();
  return atom; 
}
