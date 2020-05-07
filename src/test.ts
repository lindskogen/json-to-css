import { convert } from "./index";

describe("convert", () => {
  describe("when an object is provided", () => {
    it("returns a string", () => {
      expect(convert({})).toEqual("");
    });
  });
  describe("when border shorthand is provided", () => {
    it("returns the same value", () => {
      expect(
        convert({
          border: "1px solid coral",
        })
      ).toEqual("border: 1px solid coral;");
    });
  });
  describe("when property with px shorthand is provided", () => {
    describe("when number is not zero", () => {
      it("returns the value in px", () => {
        expect(
          convert({
            height: 255,
          })
        ).toEqual("height: 255px;");
      });
    });
    describe("when number is zero", () => {
      it("returns the value without px", () => {
        expect(
          convert({
            padding: 0,
          })
        ).toEqual("padding: 0;");
      });
    });
  });
  describe("when fontWeight is provided", () => {
    it("returns the value without px", () => {
      expect(
        convert({
          fontWeight: 600,
        })
      ).toEqual("font-weight: 600;");
    });
  });

  describe("hard test case", () => {
    it("works", () => {
      expect(
        convert({
          height: 255,
          padding: 24,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        })
      ).toEqual(
        "height: 255px;\npadding: 24px;\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: flex-start;"
      );
    });
  });
});
