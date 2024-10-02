import { describe } from "mocha";
import { expect, assert } from "chai";
import { getMostPopularPlaces } from "./getMostPopularPlaces.js";

describe("getMostPopularPlaces ()", function () {
  it("should return the most popular places", function () {
    assert.equal(
      getMostPopularPlaces([
        "Analamahitsy",
        "Analamahitsy",
        "Itaosy",
        "Behoririka",
        "Itaosy",
        "Itaosy",
      ]),
      "Itaosy Analamahitsy"
    );
  });
});
