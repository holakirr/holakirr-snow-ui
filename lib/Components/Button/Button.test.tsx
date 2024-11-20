import { render } from "@testing-library/react";
import { Button } from "./";

describe(`Component: ${Button.name}`, () => {
	it("should render", () => {
		const { container } = render(<Button>Button</Button>);

		expect(container).toMatchInlineSnapshot(`
			<div>
			  <button
			    class="bg-red-300"
			  >
			    Button
			  </button>
			</div>
		`);
	});
});
