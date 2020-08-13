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

  it('player cannot move left when at 0', () => {
    const board = {width: 2, height: 2};
    const player = Player.make('Bob');
    const game = Game.make(player, board);

    expect(game.next().value).toMatchObject({
      player: {
        x: 0,
        y: 0,
      }
    });

    const state = game.next('left').value;

    expect(state).toMatchObject({
      player: {
        x: 0,
        y: 0,
      }
    });

    player.return(null);
    game.return(null);
  });

  it('player cannot move right when at board x limit', () => {
    const board = {width: 1, height: 1};
    const player = Player.make('Bob');
    const game = Game.make(player, board);

    expect(game.next().value).toMatchObject({
      player: {
        x: 0,
        y: 0,
      }
    });

    const state = game.next('right').value;

    expect(state).toMatchObject({
      player: {
        x: 0,
        y: 0,
      }
    });

    player.return(null);
    game.return(null);
  });

  it('player cannot move down when at board y limit', () => {
    const board = {width: 1, height: 1};
    const player = Player.make('Bob');
    const game = Game.make(player, board);

    expect(game.next().value).toMatchObject({
      player: {
        x: 0,
        y: 0,
      }
    });

    const state = game.next('down').value;

    expect(state).toMatchObject({
      player: {
        x: 0,
        y: 0,
      }
    });

    player.return(null);
    game.return(null);
  })

  xit('can scroll the map', () => {
    const board = {width: 1, height: 3};
    const player = Player.make('Jim');
    const game = Game.make(player, board);

    game.next('down')
    
    expect(game.next().value.offset).toMatchObject({
        x: 0,
        y: 1,
    });

    player.return(null);
    game.return(null);
  });
});
