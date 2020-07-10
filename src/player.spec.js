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

  it('can move a player up', () => {
    const name = 'Electric Boogaloo';
    const player = Player.make(name);
    const state = player.next('up').value;

    expect(state).toEqual({
      x: 0,
      y: -1,
      health: 100,
      name: name
    });
  });


  it('can move a player down', () => {
    const name = 'Electric Boogaloo';
    const player = Player.make(name);
    const state = player.next('down').value;

    expect(state).toEqual({
      x: 0,
      y: 1,
      health: 100,
      name: name
    });
  });

  it('can move a player right', () => {
    const name = 'Electric Boogaloo';
    const player = Player.make(name);
    const state = player.next('right').value;

    expect(state).toEqual({
      x: 1,
      y: 0,
      health: 100,
      name: name
    });
  });

  it('can move a player left', () => {
    const name = 'Electric Boogaloo';
    const player = Player.make(name);
    const state = player.next('left').value;

    expect(state).toEqual({
      x: -1,
      y: 0,
      health: 100,
      name: name
    });
  });

});
