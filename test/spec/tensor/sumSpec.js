import { sum } from "../../../src/tensor/sum";

describe("sum()", ()=> {
  describe("zero dimension", ()=> {
    it("should return 0", ()=> {
      [ []::sum(i=>1)].should.deep.equal( [0] );
    });
  });

  describe("over one dimension", ()=> {
    it("should sum correctly", ()=> {
      [ [3]::sum( (i)=>1 )].should.deep.equal( [3] );
    });
  });

  describe("over multiple dimensions", ()=> {
    it("should sum correctly", ()=> {
      [[2, 2]::sum((i, j)=>i * j)].should.deep.equal( [1] );
    });
  });
});
