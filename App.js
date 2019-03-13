import React, { Component } from 'react';
import { Button, View } from 'react-native';
import Home from './src/HomeScreen';
import Exercise5 from './src/Exercise5';
import Exercise6 from './src/Exercise6';

export default class App extends Component {
  state = { exerciseShown: null }

  render() {
    switch (this.state.exerciseShown) {
      case 5:
        return (
          <View style={styles.container}>
            <Button
              title="Back"
              onPress={() => this.setState({ exerciseShown: null })}
            />
            <Exercise5 />
          </View>
        );
      case 6:
        return (
          <View style={styles.container}>
            <Button
              title="Back"
              onPress={() => this.setState({ exerciseShown: null })}
            />
            <Exercise6 />
          </View>
        );
      default:
        return (
          <View style={styles.container}>
            <Button
              title="Exercise 5"
              onPress={() => this.setState({ exerciseShown: 5 })}
            />
            <Button
              title="Exercise 6"
              onPress={() => this.setState({ exerciseShown: 6 })}
            />
          </View>
        );
    }
  }
}

const styles = {
  container: {
    marginTop: 40,
  },
};
