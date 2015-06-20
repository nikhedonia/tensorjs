import { loop } from "../../../src/einstein/loop";

describe("loop()", ()=>{
    describe("over one index", ()=>{
        it("should clone", ()=>{
          const v = [1,2,3];
          ( (i)=>v[i] ) :: loop([3]).should.deep.equal( v );
        });
    });
});
