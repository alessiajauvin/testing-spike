import { render } from "@testing-library/react";
import ComponentA from "./ComponentA";

jest.mock("./ComponentB", () => ({
  __esModule: true,
  default: "component-b",
}));

test("ComponentA renders correctly", () => {
  const { container } = render(<ComponentA />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <component-b
        value="1"
      />
      <button>
        Click me!
      </button>
    </div>
  `);
});
