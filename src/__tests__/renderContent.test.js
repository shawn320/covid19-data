import React from "react";
import Content from "../components/content";
import { shallow, mount } from "enzyme";

// This is where the tests will be written using 'it' blocks
describe("content", () => {
  it("renders", () => {
    shallow(<Content />);
  });

  it("contents", () => {
    const wrapper = mount(<Content />);
    expect(wrapper.find("tbody").children).toHaveLength(1);
  });
});
