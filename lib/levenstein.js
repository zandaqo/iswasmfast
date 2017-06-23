module.exports = (word, reference) => {
  const wlen = word.length;
  const rlen = reference.length;

  let col = new Uint8Array(50);
  let prevCol = new Uint8Array(50);
  let tempCol;

  for (let i = 0; i < 50; i++) prevCol[i] = i;
  for (let i = 0; i < wlen; i++) {
    col[0] = i + 1;
    for (let j = 0; j < rlen; j++) {
      col[j + 1] = Math.min(prevCol[1 + j] + 1, col[j] + 1,
        prevCol[j] + (word[i] === reference[j] ? 0 : 1));
    }
    tempCol = col;
    col = prevCol;
    prevCol = tempCol;
  }
  return prevCol[rlen];
};
