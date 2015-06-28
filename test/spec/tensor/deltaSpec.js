import { delta } from "../../../src/tensor/delta";

describe("delta()", ()=> {

  describe("definition", ()=> {
    it("should return 1 if no indexes are given", ()=> {
      delta().should.equal(1);
    });

    it("should return 1 if indexes are equal to each other", ()=> {
      delta(0, 0, 0).should.equal(1);
    });

    it("should return 0 if indexes are not equal to each other", ()=> {
      delta(0, 0, 1).should.equal(0);
    });

  });


});
