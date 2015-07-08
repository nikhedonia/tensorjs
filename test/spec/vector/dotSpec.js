import { dot } from "../../../src/vector/dot";

describe("dot()", ()=> {

  describe("when two vectors given", ()=> {
    it("should multiply and sum up every element ", ()=> {
      [1, 2]::dot([1, 2]).should.equal( 5 );
    });
  });

});
