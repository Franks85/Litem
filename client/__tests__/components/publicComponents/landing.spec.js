import React from "react";
import { shallow, mount } from "enzyme";
import Landing from "../../../src/components/publicComponents/Landing/Landing";

describe("Landing shallow Render REACT COMPONENTS", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Landing />);
  });

  it("+++ render the DUMB component", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("+++ h2 header value ", () => {
    expect(wrapper.find("h1").get(0).props.children).toBe("LITEM SERVICE");
  });
});
