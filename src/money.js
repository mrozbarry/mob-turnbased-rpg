function* money(noise2dFunction, board) {
  // initial placement
  const state = []
  console.log("money before placement", { noise2dFunction, board });
  try {
    for(let x = 0; x <= board.width; x++) {
      for(let y = 0; y <= board.height; y++) {
        if (noise2dFunction(x, y) < 0.5) continue;
        console.log("money should be placed once");
        state.push({ x, y });
      }
    }
  } catch (err) {
    console.log('ERROR', err);
  }

  // interaction
  while (true) {
    const action = yield state;
    if (!action) continue;
    switch (action.action) {
      case 'pick-up':
        let index = state.findIndex(m => m.x === action.x && m.y === action.y);
        while (index !== -1) {
          state.splice(index, 1);
          index = state.findIndex(m => m.x === action.x && m.y === action.y);
        }
        break;
    }
  }
}

export const make = (noise2dFunction, board) => {
  const atom = money(noise2dFunction, board)

  atom.next()

  return atom
}
