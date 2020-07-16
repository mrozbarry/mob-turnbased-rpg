function* money(numberOfMoney) {
  const state = []
  for (let i = 0; i < numberOfMoney; i++) {
    state.push({
      x: Math.floor(Math.random() * 30),
      y: Math.floor(Math.random() * 30),
      amount: 10
    })
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
