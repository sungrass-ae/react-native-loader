import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ActivityIndicator
} from "react-native";
import { Loader } from "rn-loader";

export default class App extends React.Component {
  state = {
    showLoader: false
  };

  showLoader = () => {
    this.setState({ showLoader: true });
  };

  hideLoader = () => {
    this.setState({ showLoader: false });
  };

  render() {
    return (
      <View style={styles.container}>
        <Loader loading={this.state.showLoader} />
        <View style={styles.buttonWrapper}>
          <Button onPress={this.showLoader} title="Show Loader" />
        </View>
        <View style={styles.buttonWrapper}>
          <Button onPress={this.hideLoader} title="Hide Loader" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonWrapper: {
    margin: 10
  }
});
