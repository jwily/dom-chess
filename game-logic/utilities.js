const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

const XYtoAN = ([y, x]) => {
  const col = letters[x];
  const row = 8 - y;
  return col + row;
}

const ANtoXY = (string) => {
  const col = letters.indexOf(string[0]);
  const row = 8 - string[1];
  return [row, col]
}

export { XYtoAN, ANtoXY };
