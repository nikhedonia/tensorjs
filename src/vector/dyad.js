import { T } from "../einstein/tensor"

export const dyad = (a, b) => T([a.length, b.length], (i, j) => a[i] * b[j] );
