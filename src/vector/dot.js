import { over } from "../tensor/over"

export function dot(b) {
  return [-Math.min(this.length, b.length)]::over(
      (i) => this[i] * b[i]
  );
}
