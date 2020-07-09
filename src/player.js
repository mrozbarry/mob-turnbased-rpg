function* player(name) {
  let state = {
    x: 0,
    y: 0,
    health: 100,
    name
  };

  while (true) {
    const action = yield state;
    // ... update state
  }
}

export const make = (name) => {
  const atom = player(name);
  atom.next();
  return atom; 
}
