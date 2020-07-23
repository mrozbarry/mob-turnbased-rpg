function* money(numberOfMoney, width, height) {
  const state = []

  while(numberOfMoney > 0) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);

    state.push({x, y});
    numberOfMoney--;
  }
  
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

export const make = (numberOfMoney, width, height) => {
  const atom = money(numberOfMoney, width, height)

  atom.next()

  return atom
}
