import * as Money from './money.js';

describe('money', () => {
  it('place money in world', () => {
    const numberOfMoney = 33;
    const boardWidth = 0;
    const boardHeight = 0;
    const money = Money.make(numberOfMoney, boardWidth, boardHeight);
    const state = money.next().value;

    expect(state).toHaveLength(numberOfMoney);
    state.forEach(money => {
      expect(Object.keys(money)).toEqual(['x', 'y']);
      expect(money.x).toBe(0);
      expect(money.y).toBe(0);
    });
  });

  it('can remove money from the state by coordinates', () => { 
    const numberOfMoney = 1;
    const boardWidth = 50;
    const boardHeight = 50;
    const money = Money.make(numberOfMoney, boardWidth, boardHeight);
    const state = money.next().value;

    expect(state).toHaveLength(numberOfMoney);

    const {x, y} = state[0];
    money.next({action:'pick-up', x, y});

    const nextState = money.next().value;
    expect(state).toHaveLength(0);
  })

  it('can remove multiple money from the state by coordinates', () => { 
    const numberOfMoney = 2;
    const boardWidth = 0;
    const boardHeight = 0;
    const money = Money.make(numberOfMoney, boardWidth, boardHeight);
    const state = money.next().value;

    expect(state).toHaveLength(numberOfMoney);

    const {x, y} = state[0];
    money.next({action:'pick-up', x, y});

    const nextState = money.next().value;
    expect(state).toHaveLength(0);
  })
});
