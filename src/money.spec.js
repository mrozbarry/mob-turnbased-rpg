import * as  Money from './money.js';

describe('money', () => {
  it('place money in world', () => {
    const numberOfMoney = 33;
    const money = Money.make(numberOfMoney);
    const state = money.next().value;

    expect(state).toHaveLength(numberOfMoney);
  });
});
