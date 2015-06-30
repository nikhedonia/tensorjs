import { T } from "../einstein/tensor"

export const dot = (a, b) => T([, Math.min(a.length, b.length) ], (i) => a[i] * b[i] );
