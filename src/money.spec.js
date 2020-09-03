import * as Money from './money.js';

describe('money', () => {
  it('place money in world', () => {
    const numberOfMoney = 1;

    const board = { width: 0, height: 0 };
    const noise2dFunction = () => 1;
    const money = Money.make(noise2dFunction, board);
    const state = money.next().value;

    expect(state).toHaveLength(numberOfMoney);
    state.forEach(money => {
      expect(Object.keys(money)).toEqual(['x', 'y']);
      expect(money.x).toBe(0);
      expect(money.y).toBe(0);
    });
    money.return();
  });

  it('can remove money from the state by coordinates', () => { 
    const numberOfMoney = 1;
    const board = { width: 0, height: 0 };
    const noise2dFunction = () => 1;
    const money = Money.make(noise2dFunction, board);
    const state = money.next().value;

    expect(state).toHaveLength(numberOfMoney);

    const {x, y} = state[0];
    const { value: nextState } = money.next({action:'pick-up', x, y});

    expect(nextState).toHaveLength(0);
  });
});
