import { over } from "../tensor/over"

export function dyad(b) {
  return [this.length, b.length]::over(
      (i, j) => this[i] * b[j]
  );
}
