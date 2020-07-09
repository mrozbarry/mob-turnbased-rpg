import * as Game from './game.js'

describe('game', () => {
  it('creates a game', ()=> {
    const game = Game.make();
    const state = game.next().value;
    expect(state).not.toBeNull();

  })
})
