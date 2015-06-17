


import {T} from './src/einstein/tensor'








var a=[[1,2],[3,4]];

const mult = (a,b) => T( [a[0].length,b.length,,a.length], (i,j,k) => a[i][k] * b[k][j] );


console.log(a, mult(a,a) );
