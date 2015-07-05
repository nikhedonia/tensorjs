import { over } from "../tensor/over"

export const dot = (a, b) => [null, Math.min(a.length, b.length)]::over( (i) => a[i] * b[i] );
