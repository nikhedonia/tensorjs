import { loop } from "../../../src/einstein/loop";

describe("loop()", ()=> {
  describe("zero dimension", ()=> {
    it("should return undefined", ()=> {
      [( (i)=>1 ) :: loop()] .should.deep.equal( [undefined] );
    });

  });

  describe("over one dimension", ()=> {
    it("should count", ()=> {
      ( (i)=>i ) :: loop([3]).should.deep.equal( [0,1,2] );
    });
  });

  describe("over multiple dimensions", ()=> {
    it("should incremment indexes from right to left", ()=> {
      ( (i, j, k)=>[i, j, k] ) :: loop(2, 2, 2) . should.deep.equal([
        [[[0, 0, 0], [0, 0, 1]],
        [[0, 1, 0], [0, 1, 1]]],
        [[[1, 0, 0], [1, 0, 1]],
        [[1, 1, 0], [1, 1, 1]]],
      ]);
    });

    it("should switch to sum after undefined", ()=> {
      ( (i, j)=>i+j ) :: loop(2, undefined,2) . should.deep.equal([1,3]);
    });

  });

});
