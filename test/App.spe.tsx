// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";
import { shallow } from "enzyme";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import App from "../src/components/App";

describe("App", () => {
  it("should render App component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
    expect(wrapper.find("h1").text()).toBe("Hello there");
  });
});
