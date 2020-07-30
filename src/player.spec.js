import * as Player from './player.js'

describe('Player', () => {
  const name = 'Electric Boogaloo';
  let player = null;

  beforeEach(() => {
    player = Player.make(name);
  });

  it('creates a player with default values', () => {
    const state = player.next().value;

    expect(state).toEqual({
      x: 0,
      y: 0,
      health: 100,
      money: 0,
      name: name
    });
  });

  it.each`
    x    | y    | action
    ${0} |${-1} |${'up'}
    ${0} |${1}  |${'down'}
    ${1} |${0}  |${'right'}
    ${-1}|${0}  |${'left'}
  `("can move a player $action", ({x, y, action}) => {
    const state = player.next({ action }).value;

    expect(state).toMatchObject({x, y});
  });

  it('can add money', () => {
    const state = player.next({ action: 'add-money' }).value;

    expect(state).toMatchObject({
      money: 10,
    });
  });
});
