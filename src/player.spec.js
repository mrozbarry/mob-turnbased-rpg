import * as Player from './player.js'

describe('Player', () => {
  it('creates a player with default values', () => {
    const name = 'Electric Boogaloo';
    const player = Player.make(name);
    const state = player.next().value;

    expect(state).toEqual({
      x: 0,
      y: 0,
      health: 100,
      name: name
    });
  });
});
