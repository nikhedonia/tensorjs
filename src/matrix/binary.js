import { T } from '../einstein/tensor'

export const mult = (a, b) => T( [
    a[0].length,
    b.length,
    null,
    a.length,
  ],
  (i, j, k) => a[i][k] * b[k][j]
);
