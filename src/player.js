function* player(name) {
  let state = {
    x: 0,
    y: 0,
    health: 100,
    money: 0,
    name
  };

  while (true) {
    const action = yield state;
    // ... update state
    if (!action) continue;
    switch (action.action) {
      case 'up':
        state.y--;
        break;
      case 'down':
        state.y++;
        break;
      case 'right':
        state.x++;
        break;
      case 'left':
        state.x--;
        break;
      case 'add-money':
        state.money += 10;
        break;
    }

  }
}

export const make = (name) => {
  const atom = player(name);
  atom.next();
  return atom; 
}
