import * as  Money from './money.js';

describe('money', () => {
  it('place money in world', () => {
    const money = Money.make();
    const state = money.next().value;

    expect(state).toEqual([{
      x: 69,
      y: 20,
      amount: 420
    }])
  });
});
