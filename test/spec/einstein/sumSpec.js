import { sum } from "../../../src/einstein/sum";

describe("sum()", ()=> {
  describe("zero dimension", ()=> {
    it("should return 0", ()=> {
      [( (i)=>1 ) :: sum()].should.deep.equal( [0] );
    });
  });

  describe("over one dimension", ()=> {
    it("should sum correctly", ()=> {
      [( (i)=>1 ) :: sum(3)].should.deep.equal( [3] );
    });
  });

  describe("over multiple dimensions", ()=> {
    it("should sum correctly", ()=> {
      [( (i, j)=>i*j )::sum(2, 2)].should.deep.equal( [1] );
    });
  });
});
