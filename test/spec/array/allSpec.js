import { all } from "../../../src/array/all";

describe("all()", ()=> {

  describe("non-arrays", ()=> {
    it("should map value", ()=> {
      5::all(x=>x * 2).should.equal(10);
    });
  });

  describe("arrays", ()=> {
    it("should map every element", ()=> {
      ([ [ [1, 2, 3], [4, 5, 6] ] ])::all(x=>x * 2).should.deep.equal([
         [ [2, 4, 6], [8, 10, 12] ],
      ]);
    });
  });

});
