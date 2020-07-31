import * as Terrain from './terrain.js';
import SimplexNoise from 'simplex-noise';

describe('terrain', () => {
  it('can place rocks in the world', () => {
    const rocks = Terrain.make(
      '*',
      ((x, y) => 1),
      { width: 1, height: 1 },
    );

    const state = rocks.next().value;

    expect(state).toHaveLength(1);
    state.forEach(rock => {
      expect(Object.keys(rock)).toEqual(['type', 'x', 'y']);
      expect(rock.type).toBe('*');
      expect(rock.x).toBe(0);
      expect(rock.y).toBe(0);
    });
  });

  it('can use the noise generator to create stuff', () => {
    const noise = new SimplexNoise('test');
    const rocks = Terrain.make(
      '*',
      ((x,y) => noise.noise2D(x,y)),
      { width: 10, height: 10},
    );

    const state = rocks.next().value;
    console.log(state);

    expect(state).toMatchSnapshot();

  });
});

// https://github.com/jwagner/simplex-noise.js
