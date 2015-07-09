import { over } from "../tensor/over"

export function transpose() {
  return [this[1].length, this[0].length]::over(
      (i, j)=> this[j][i]
  );
}
