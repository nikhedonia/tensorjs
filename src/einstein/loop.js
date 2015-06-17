import { sum } from './sum'

export function loop(n,...ns){
  if(n==undefined){
    return this::sum(...ns);
  }
    
  let A=new Array(n);
  if(ns.length){
    for(let i=0;i<n;++i){
      A[i] = this.bind(this,i)::loop(...ns) ;
    }
  }else{
    for(let i=0;i<n;++i){
      A[i] = this.call(this,i);
    }    
  }
  return A;
}
