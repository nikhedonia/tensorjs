export function over(F) {
  if (!this.length) { return F() };
  const [n, ...ns] = this;
  if (n > 0) {
    let A = new Array(n);
    for (let i = 0; i < n; ++i) {
      A[i] = ns::over(F.bind(F, i));
    }
    return A;
  }else if (n < 0) {
    const N = -n;
    return ns::over((...args)=> {
      let value = 0
      for ( let i = 0; i < N; ++i ) {
        value += F( i, ...args );
      }
      return value;
    });
  }
}

