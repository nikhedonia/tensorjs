export function sum(n, ...ns) {
  let s = 0;
  if (ns.length) {
    for (let i = 0;i < n;++i) {
      s+= this.bind(this, i)::sum(...ns);
    }
  }else {
    for (let i = 0;i < n;++i) {
      s+= this(i);
    }
  }
  console.log('s',s);
  return s;
}
