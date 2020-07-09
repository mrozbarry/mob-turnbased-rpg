import * as Game from './game.js'
import * as Player from './player.js'

describe('game', () => {
  it('creates a game', ()=> {
    const game = Game.make();
    const state = game.next().value;
    expect(state).toEqual({
      player: undefined,
    });
    game.return(null);
  });

  it('can accept a player', ()=> {
    const player = Player.make('Bob');

    const game = Game.make(player);
    const state = game.next().value;
    expect(state).toEqual({
      player: {
        x: 0,
        y: 0,
        health: 100,
        name: 'Bob'
      }
    });
    player.return(null); 
    game.return(null);
  });

  xit('player can move in direction', () => {})
});
