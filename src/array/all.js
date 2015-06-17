export function all(F){
  if( Array.isArray(this) ){
    return this.map(x=>x::all(F));
  }else{
    return F(this);
  }
}
