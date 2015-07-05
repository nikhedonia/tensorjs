import { over } from "../../../src/tensor/over";

describe("over()", ()=> {
  describe("zero dimension", ()=> {
    it("should return zero", ()=> {
      [[]::over(i=>1)].should.deep.equal( [undefined] );
    });
  });

  describe("over one dimension", ()=> {
    it("should count", ()=> {
      [3]::over(i=>i).should.deep.equal( [0, 1, 2] );
    });
  });

  describe("over multiple dimensions", ()=> {
    it("should incremment indexes from right to left", ()=> {
      [2, 2, 2]::over((i, j, k)=>[i, j, k]).should.deep.equal([
        [[[0, 0, 0], [0, 0, 1]],
        [[0, 1, 0], [0, 1, 1]]],
        [[[1, 0, 0], [1, 0, 1]],
        [[1, 1, 0], [1, 1, 1]]],
      ]);
    });

    it("should switch to sum after undefined", ()=> {
      [2, null, 2]::over( (i, j)=>i + j ).should.deep.equal([1, 3]);
    });

  });

});
