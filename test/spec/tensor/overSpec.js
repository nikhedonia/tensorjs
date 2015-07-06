import { over } from "../../../src/tensor/over";

describe("over()", ()=> {
  describe("over undefined dimension", ()=> {
    it("should return evaluated Function", ()=> {
      [[]::over(i=>1)].should.deep.equal( [1] );
    });
  });

  describe("over one dimension", ()=> {
    it("should count", ()=> {
      [3]::over(i=>i).should.deep.equal( [0, 1, 2] );
    });
  });

  describe("over multiple positive dimensions", ()=> {
    it("should incremment indexes from right to left", ()=> {
      [2, 2, 2]::over((i, j, k)=>[i, j, k]).should.deep.equal([
        [[[0, 0, 0], [0, 0, 1]],
        [[0, 1, 0], [0, 1, 1]]],
        [[[1, 0, 0], [1, 0, 1]],
        [[1, 1, 0], [1, 1, 1]]],
      ]);
    });
  });

  describe("over negative dimensions", ()=> {
    it("should sum over negative indexes if they are on the end", ()=> {
      [2, -2]::over( (i, j)=>i + j ).should.deep.equal([1, 3]);
    });

    it("should sum over negative indexes if they are at the beginning", ()=> {
      [-2, 2]::over( (i, j)=>i + j ).should.deep.equal([1, 3]);
    });

    it("should sum over negative indexes if they are at random place", ()=> {
      [-2, 2, -2, 2, -2]::over( (i, j, k, l, m)=> i * j * k * l * m ).should.deep.equal([
        [0, 0],
        [0, 1],
      ]);
    });
  });

});
