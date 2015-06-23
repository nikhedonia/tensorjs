import { dim } from "../../../src/array/dim";

describe("dim()", ()=> {
  describe("objects without lenght property", ()=> {
    it("should have no dim ", ()=> {
      ({})::dim().should.deep.equal([]);
    });
  });

  describe("arrays", ()=> {
    it("should have correct dim ", ()=> {
      ([ [ [1,2,3],[4,5,6] ] ])::dim().should.deep.equal([1,2,3]);
    });
  });

});
