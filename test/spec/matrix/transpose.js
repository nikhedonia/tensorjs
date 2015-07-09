import { transpose } from "../../../src/matrix/get";

describe("transpose()", ()=> {
  it("should swap row with cols", ()=> {
    [ [1, 2, 3], [4, 5, 6] ]::transpose().should.deep.equal(
    [ [1, 4], [2, 5], [3, 6] ]
    );
  });
});
