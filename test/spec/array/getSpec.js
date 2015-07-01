import { get } from "../../../src/array/get";

describe("get()", ()=> {

  describe("given an array as this and indexes as args", ()=> {
    it("should return the element", ()=> {
      [[[1, 2], [3, 4]]]::get(0, 1).should.deep.equal([3, 4]);
    });
  });

});
