import { sumOver } from "../../../src/tensor/sumOver";

describe("sumOver()", ()=> {

  describe("given an array as this and array-bitField", ()=> {
    it("should sum up accordingly", ()=> {
      [ [ [1, 2], [3, 4] ] ]::sumOver(1, 1, 0).should.deep.equal(
      [ 4, 6 ]
      );
    });
  });

});
