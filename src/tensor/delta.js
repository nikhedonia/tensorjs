export function delta(...i) {
  return i.every( x => x === i[0] ) ? 1 : 0;
}
