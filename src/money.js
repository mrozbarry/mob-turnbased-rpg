function* money() {
  const state = [{
    x: 69,
    y: 20,
    amount: 420,
  }]

  while (true) {
    const action = yield state;
  }
}

export const make = () => {
  const atom = money()

  atom.next()

  return atom
}
