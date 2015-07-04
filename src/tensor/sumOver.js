import { dim } from "../array/dim"
import { remap } from "../array/remap"
import { T } from "../einstein/tensor"

export function sumOver(...bits) {
  const dims = this::dim();
  var ll = [];
  var sl = [];
  var m = [];
  var k = 0;
  var s = bits.filter(b=>!b).length;
  dims.forEach( (d, i)=> {
    if (bits[i]) {
      ++k;
      m.push(i + s);
      sl.push(d);
    }else {
      ll.push(d);
      m.push(i - k);
    }
  });

  return T( [ ...ll, null, ...sl], this::remap(...m) );
}
