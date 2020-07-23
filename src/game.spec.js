import * as Game from './game.js'
import * as Player from './player.js'

describe('game', () => {
  it('creates a game', ()=> {
    const game = Game.make();
    const state = game.next().value;

    expect(typeof state).toBe('object');

    game.return(null);
  });

  it('can accept a player', ()=> {
    const player = Player.make('Bob');

    const game = Game.make(player);
    const state = game.next().value;
    expect(state).toMatchObject({
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

  it('can accept board dimensions', () => {
    const board = {width: 10, height: 10}

    const player = Player.make('Bob');

    const game = Game.make(player, board);
    const state = game.next().value;

    expect(state).toMatchObject({
      board: {height: 10, width: 10}
    });

    state.money.forEach((spondulix) => {
      expect(spondulix.x).not.toBeNaN();
      expect(spondulix.y).not.toBeNaN();
    });

    player.return(null);
    game.return(null);
  });

  it('player can move in direction', () => {

    const player = Player.make('Bob');

    const game = Game.make(player);
    const state = game.next('right').value;
    expect(state).toMatchObject({
      player: {
        x: 1,
        y: 0,
        health: 100,
        name: 'Bob'
      }
    });

    player.return(null);
    game.return(null);
  })

  it('has money', () => {
    const player = Player.make('Johnny');
    const game = Game.make(player);

    expect(game.next().value).toHaveProperty('money');
  });
});
