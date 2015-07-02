export function remap(...mapping) {
  return (...i)=>
    i.map( (j)=> mapping[j] ).reduce( (T, i)=> T[i], this );
}
