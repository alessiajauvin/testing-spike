import { multiplyRandom } from "./math.util";

describe("math.util", () => {
  test("multiplyRandom can handle array of number", () => {
    jest.spyOn(Math, "random").mockReturnValue(2);
    expect(multiplyRandom([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
  });

  test("multiplyRandom can handle single number", () => {
    multiplyRandom(1);
  });
});
