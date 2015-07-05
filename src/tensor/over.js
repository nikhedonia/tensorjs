import { sum } from "./sum"

export function over(F) {
  const [n, ...ns] = this;
  if (n == undefined ) {
    if (!ns.length) { return }
    return ns::sum(F);
  }

  let A = new Array(n);
  if (ns.length > 0) {
    for (let i = 0; i < n; ++i) {
      A[i] = ns::over(F.bind(F, i));
    }
  }else {
    for (let i = 0; i < n; ++i) {
      A[i] = F.call(F, i);
    }
  }
  return A;
}
