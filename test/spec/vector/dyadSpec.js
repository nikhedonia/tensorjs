import { dyad } from "../../../src/vector/dyad";

describe("dyad()", ()=> {

  describe("when two vectors given", ()=> {
    it("should miltiply each element and return a matrix", ()=> {
      dyad([1, 2, 3], [1, 2, 3]).should.deep.equal( [ [1, 2, 3], [2, 4, 6], [3, 6, 9] ] );
    });
  });

});
