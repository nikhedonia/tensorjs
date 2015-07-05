import { over } from "../tensor/over"

export const dyad = (a, b) => [a.length, b.length]::over( (i, j) => a[i] * b[j] );
