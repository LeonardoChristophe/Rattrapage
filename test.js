import { describe } from "mocha";
import { assert } from "chai";
import { removeWords } from "./src/removeWords";

describe("removeWords", function () {
  it("should remove words from a sentence", function () {
    assert.equal(
      removeWords("Hello, ceci est un test", ["ceci", "un"]),
      "Hello, est test"
    );
  });

  it("should not remove words from the same sentence", function () {
    assert.equal(removeWords("Hello Java", ["java"]), "Hello Java");
  });
});
