import React from 'react';
import { Animated, StyleSheet, Dimensions } from 'react-native';

export default class Loader extends React.Component {
  width = Dimensions.get('window').width;
  counter = 1;
  timeout = undefined;

  state = {
    right: new Animated.Value(this.width)
  }

  componentWillReceiveProps(props) {
    if (!this.props.loading && props.loading) {
      this.animateLoading();
    } else if (this.props.loading && !props.loading) {
      this.animateLoading();
    }
  }

  animateLoading = () => {
    Animated.timing(
      this.state.right,
      {
        toValue: this.state.right._value - (this.state.right._value/(5 * this.counter)),
        duration: 50,
      }
    ).start();
    this.counter++;
    setTimeout(this.animateLoading, 50);
  }

  animateStoping = () => {
    Animated.timing(
      this.state.right,
      {
        toValue: 0,
        duration: 10,
      }
    ).start();
  }

  render() {
    return (
      <Animated.View style={{...styles.container, right: this.state.right}} />
    );
  }
}

const styles = {
  container: {
    height: 3,
    backgroundColor: '#ff0000',
    position: 'absolute',
    top: 0,
    left: 0,
  },
};
