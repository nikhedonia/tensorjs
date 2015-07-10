import { epsilon } from "../../../src/tensor/epsilon";

describe("epsilon()", ()=> {
  it("should be 1 if indexes are in ascending order", ()=> {
    epsilon(1, 2, 3, 4, 5, 6).should.equal(1);
  });

  it("should be -1 if an even number of indexes are in descending order", ()=> {
    epsilon(6, 5, 4, 3, 2, 1).should.equal(-1);
  });

  it("should be 0 if an index ocurs multiple times", ()=> {
    epsilon(5, 4, 3, 2, 1, 5).should.equal(0);
  });

});
