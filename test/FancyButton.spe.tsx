// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";
import { shallow, mount } from "enzyme";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import FancyButton from "../src/components/FancyButton";

describe("FancyButton", () => {
  it("should render component", () => {
    const wrapper = shallow(<FancyButton label="label" />);
    expect(wrapper).toBeDefined();
  });
  it("should have 'default text' as text", () => {
    const expectedText = "default text";
    const wrapper = shallow(<FancyButton label={expectedText} />);
    expect(wrapper.text()).toBe(expectedText);
  });

  it("should have 'i was clicked' as text after click", () => {
    const expectedText = "i was clicked";
    const wrapper = mount(<FancyButton label="some text" />);
    wrapper.simulate("click");
    expect(wrapper.text()).toBe(expectedText);
  });
});
