import { describe } from "mocha";
import { assert } from "chai";
import { getMostPopularPlace } from "./getMostPopularPlaces";

describe("getMostPopularPlace", () =>
  function () {
    it("should return the most popular place", () => {
      assert.equal(
        getMostPopularPlace([
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

    it("should return the most popular place when there is a tie", () => {
      assert.equal(
        getMostPopularPlace([
          "Analamahitsy",
          "Analamahitsy",
          "Itaosy",
          "Behoririka",
          "Itaosy",
          "Itaosy",
          "Analamahitsy",
        ]),
        "Itaosy Analamahitsy Analamahitsy"
      );
    });
  });
