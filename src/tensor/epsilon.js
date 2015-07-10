
const mult = (a, b)=>a * b;

export function epsilon(...I) {
  return I.map((i, p)=>
      I.map( (j, q)=>
        (p >= q) || (i - j) / (p - q)
      ).reduce(mult, 1)
    ).reduce(mult, 1);
}
