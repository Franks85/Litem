import React from "react";
import Landing from "../../../src/components/publicComponents/Landing/Landing";
import { render } from "../../setup/test_setup_utils";

describe("Render Landing Component", () => {
  const { getByText, getByTestId, container } = render(<Landing />);
  it("+++ action-btn content", () => {
    expect(getByTestId("action-btn")).toHaveTextContent("Get Started");
  });
});
