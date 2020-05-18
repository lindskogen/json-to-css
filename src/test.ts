import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { convert } from "./mod.ts";

Deno.test("when an object is provided - returns a string", () => {
  assertEquals(convert({}), "");
});
Deno.test("when border shorthand is provided - returns the same value", () => {
  assertEquals(
    convert({
      border: "1px solid coral",
    }),
    "border: 1px solid coral;",
  );
});
Deno.test(
  "when property with px shorthand is provided - when number is not zero - returns the value in px",
  () => {
    assertEquals(
      convert({
        height: 255,
      }),
      "height: 255px;",
    );
  },
);
Deno.test(
  "when property with px shorthand is provided - when number is zero - returns the value without px",
  () => {
    assertEquals(
      convert({
        padding: 0,
      }),
      "padding: 0;",
    );
  },
);
Deno.test("when fontWeight is provided - returns the value without px", () => {
  assertEquals(
    convert({
      fontWeight: 600,
    }),
    "font-weight: 600;",
  );
});

Deno.test("hard test case - works", () => {
  assertEquals(
    convert({
      height: 255,
      padding: 24,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
    }),
    "height: 255px;\npadding: 24px;\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: flex-start;",
  );
});
