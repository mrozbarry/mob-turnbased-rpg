function* game() {
  let state = {
    foo: 'bar',
  };

  while (true) {
    const action = yield state;
    // ... update state
  }
}

export const make = () => {
  const atom = game();
  atom.next();
  return atom; 
}
