import { remapAll } from "../../../src/array/remapAll";

describe("remapAll()", ()=> {

  describe("given an array as this and indexes as args", ()=> {
    it("should reorder its elements", ()=> {
      [ [1, 2], [3, 4] ]::remapAll(1, 0).should.deep.equal(
      [ [1, 3], [2, 4] ]
      );
    });
  });

});
