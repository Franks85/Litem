import React from "react";
import Landing from "../../../src/components/publicComponents/Landing/Landing";
import { render } from "../../setup/test_setup_utils";

describe("Render Landing Component", () => {
  const { getByText, getByTestId, container } = render(<Landing />);
  it("+++ slide action-btn", () => {
    expect(getByTestId("action-btn")).toBeInTheDOM();
    expect(getByTestId("action-btn")).toHaveTextContent("Get Started");
  });
});
