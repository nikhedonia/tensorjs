export function remap(...mapping) {
  return (...i)=>
    mapping.map( (j)=> i[j] ).reduce( (T, i)=> T[i], this );
}
