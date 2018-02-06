import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ActivityIndicator } from 'react-native';
import Loader from './src/loader';

export default class App extends React.Component {
  state = {
    showLoader: false
  }

  componentDidMount() {
    this.setState({ showLoader: true });
  }
  render() {
    return (
      <View style={styles.container}>
        <Loader loading={this.state.showLoader} />
        <Text>Love you babu</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <ActivityIndicator size="large" color="#0000ff" />
        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="Press Me"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
