import React from "react";
import PropTypes from "prop-types";
import {
  Animated,
  StyleSheet,
  Dimensions,
  NativeModules,
  Platform
} from "react-native";

if (Platform.OS === "ios") {
  let iosStatusBarHeight = 20;
  NativeModules.StatusBarManager.getHeight(statusBarHeight => {
    iosStatusBarHeight = statusBarHeight;
  });
}

export class Loader extends React.Component {
  width = Dimensions.get("window").width;
  counter = 1;
  timeout = undefined;

  state = {
    right: new Animated.Value(this.width)
  };

  componentWillReceiveProps(props) {
    if (!this.props.loading && props.loading) {
      this.animateLoading(this.width);
    } else if (this.props.loading && !props.loading) {
      this.animateStoping();
    }
  }

  animateLoading = right => {
    const newRight = right - right / (3 * this.counter);
    Animated.timing(this.state.right, {
      toValue: newRight,
      duration: 100
    }).start();
    this.counter++;
    this.timeout = setTimeout(this.animateLoading.bind(this, newRight), 100);
  };

  animateStoping = () => {
    Animated.timing(this.state.right, {
      toValue: 0,
      duration: 500
    }).start();
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.hideLoader, 500);
  };

  hideLoader = () => {
    Animated.timing(this.state.right).stop();
    this.setState({ right: new Animated.Value(this.width) });
    this.counter = 1;
  };

  getTopMargin = () => {
    if (this.props.topMargin) {
      return this.props.topMargin;
    }
    if (Platform.OS === "ios" && this.props.iosBelowStatusBar) {
      return iosStatusBarHeight;
    }
    if (Platform.OS === "android" && this.props.androidBelowStatusBar) {
      return NativeModules.StatusBarManager.HEIGHT;
    }
    return 0;
  };

  render() {
    const style = {
      ...loaderStyle,
      right: this.state.right,
      backgroundColor: this.props.color,
      top: this.getTopMargin()
    };
    return <Animated.View style={style} />;
  }
}

Loader.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  topMargin: PropTypes.number,
  iosBelowStatusBar: PropTypes.bool,
  androidBelowStatusBar: PropTypes.bool
};

Loader.defaultProps = {
  loading: false,
  color: "#ff0000",
  iosBelowStatusBar: false,
  androidBelowStatusBar: true
};

const loaderStyle = {
  position: "absolute",
  height: 3,
  left: 0
};
