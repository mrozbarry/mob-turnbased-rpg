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
        if (action.board && state.y===0) continue;
        state.y--;
        break;

      case 'down':
        if (action.board && state.y===action.board.height - 1) continue;
        state.y++;
        break;

      case 'right':
        if (action.board && state.x===action.board.width - 1) continue;
        state.x++;
        break;

      case 'left':
        if (action.board && state.x===0) continue;
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
