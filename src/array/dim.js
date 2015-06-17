export function dim(){
  let dims=[];
  let A=this;
  while( A.length ){
    dims.push(A.length);
    A=A[0];
  }
  return dims;
}
