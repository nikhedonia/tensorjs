

function T(dims,F){
  return F::Loop(...dims);
}

function dim(){
  let A=[];
  let L=this;
  while( L.length ){
    A.push(L.length);
    L=L[0];
  }
  return A;
}

function Sum(n,...ns){
  let S=0;

  if(ns.length){
    for(let i=0;i<n;++i){
      S+=( this.bind(this,i)::Sum(...s) );
    }
  }else{
    for(let i=0;i<n;++i){
      S+=this(i);
    }    
  }

  return S;
}

function Loop(n,...ns){
  if(n==undefined){
    return this::Sum(...ns);
  }
    
  let A=new Array(n);
  if(ns.length){
    for(let i=0;i<n;++i){
      A[i] = this.bind(this,i)::Loop(...ns) ;
    }
  }else{
    for(let i=0;i<n;++i){
      A[i] = this.call(this,i);
    }    
  }
  return A;
}

function all(F){
  if( Array.isArray(this) ){
    return this.map(x=>x::all(F));
  }else{
    return F(this);
  }
}


var m=[[1,1],[1,1]];
var v=[1,2];

var M= T( [2,2] , (i,j) => m[j][i] * v[j]  )


console.log(M)// , M::all(x=>x+1) );
