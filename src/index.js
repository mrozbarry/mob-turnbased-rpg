import app from './app';

const world = document.querySelector('#world');

app(
  'Perpooply',
  10,
  10,
  (worldString) => {
    world.innerHTML = worldString;
  },
  (update) => {
    document.addEventListener('keydown', (event) => {
      switch(event.key) {
        case 'ArrowUp':
          return update('up');
        case 'ArrowDown':
          return update('down');
        case 'ArrowLeft':
          return update('left');
        case 'ArrowRight':
          return update('right');

      }
    });
  },
);
