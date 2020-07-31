function* generator(type, noise2dFunction, board) {
  let state = [];
  for(let x = 0; x < board.width; x++) {
    for(let y = 0; y < board.height; y++) {
      if (noise2dFunction(x, y) < 0.8) continue;
      state.push({ type, x, y });
    }
  }

  while (true) {
    yield state;
  }
}

export const make = (type, noise2dFunction, board) => {
  const terrainGenerator = generator(type, noise2dFunction, board);
  terrainGenerator.next();

  return terrainGenerator;
}
