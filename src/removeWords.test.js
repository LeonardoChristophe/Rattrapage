import { describe } from "mocha";
import { expect, assert } from "chai";
import { removeWords } from "./removeWords";

const assert = require("chai").assert;

describe("removeWords", () => {
  it("should remove words", () => {
    assert.equal(
      removeWords("Hello, ceci est un test", ["ceci", "un"]),
      "Hello, est test"
    );
    assert.equal(removeWords("Hello Java", ["java"]), "Hello Java");
  });
});
