import React from "react";
import { Loader } from "../Loader";
import { Animated, StyleSheet, Dimensions } from "react-native";

import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const rendered = renderer.create(<Loader />).toJSON();
  expect(rendered).toBeTruthy();
});

it("prop color is set as backgroundColor", () => {
  const rendered = renderer.create(<Loader color="#00ff00" />).toJSON();
  expect(rendered.props.style.backgroundColor).toEqual("#00ff00");
});

it("style property right should be equal to device width by default", () => {
  const rendered = renderer.create(<Loader />).toJSON();
  expect(rendered.props.style.right).toEqual(Dimensions.get("window").width);
});
