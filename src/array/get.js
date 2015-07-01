export function get(...i) {
  return i.reduce( (T, i)=> T[i], this );
}
