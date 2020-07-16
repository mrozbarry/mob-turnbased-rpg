function* money(numberOfMoney) {
  const state = []
  for (let i = 0; i < numberOfMoney; i++) {
    state.push({})
  }

  while (true) {
    const action = yield state;
  }
}

export const make = (numberOfMoney) => {
  const atom = money(numberOfMoney)

  atom.next()

  return atom
}
