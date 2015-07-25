

function T(F){
  return F::L(...this);
}

function dim(){
  var A=[];
  var L=this;
  while( L.length ){
    A.push(L.length);
    L=L[0];
  }
  return A;
}

function S(n,...N){
  var S=0;

  if(N.length){
    for(var i=0;i<n;++i){
      S+=( this.bind(this,i)::S(...N ) );
    }
  }else{
    for(var i=0;i<n;++i){
      S+=this(i);
    }    
  }

  return S;
}

function L(n,...N){
  var A=[];
  
  if(n==undefined){
    return this::S(...N);
  }
    
  if(N.length){
    for(var i=0;i<n;++i){
      A.push( this.bind(this,i)::L(...N ) );
    }
  }else{
    for(var i=0;i<n;++i){
      A.push( this(i) );
    }    
  }
  return A;
}

var m=[[1,1],[1,1]];
var v=[1,2];


var M= [2,2]::T( i => j =>  m[j][i] * v[j]  )



console.log( M::dim() );
