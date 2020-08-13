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
    let desiredState = { ...state };
    // ... update state
    if (!action) continue;
    switch (action.action) {
      case 'up':
        if (action.board && state.y===0) continue;
        desiredState.y--;
        break;

      case 'down':
        if (action.board && state.y===action.board.height - 1) continue;
        desiredState.y++;
        break;

      case 'right':
        if (action.board && state.x===action.board.width - 1) continue;
        desiredState.x++;
        break;

      case 'left':
        if (action.board && state.x===0) continue;
        desiredState.x--;
        break;

      case 'add-money':
        desiredState.money += 10;
        break;
    }

    if(!isCollidingWithRocks(desiredState, action.rocks)) {
      state = { ...desiredState };
    }
  }
}

function isCollidingWithRocks(desiredState, rocks) {
  if (!rocks) return false;

  return rocks.some((rock) => rock.x === desiredState.x && rock.y === desiredState.y);
}

export const make = (name) => {
  const atom = player(name);
  atom.next();
  return atom; 
}
