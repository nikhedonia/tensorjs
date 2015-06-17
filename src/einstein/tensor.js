import { loop } from './loop'

export function T(dims,f){
  return f::loop(...dims);
}
