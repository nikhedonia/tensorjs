export function sum(F) {
  let s = 0;
  const [n, ...ns] = this;
  if (ns.length) {
    for (let i = 0;i < n;++i) {
      s+= ns::sum(F.bind(F, i));
    }
  }else {
    for (let i = 0;i < n;++i) {
      s+= F(i);
    }
  }
  return s;
}
