import { remap } from "../../../src/array/remap";

describe("remap()", ()=> {

  describe("given an array as this and indexes as args", ()=> {
    it("should change permutate the indexes", ()=> {
      [ [1, 2], [2, 1] ]::remap(1, 0)(0, 1).should.equal(2);
    });
  });

});
