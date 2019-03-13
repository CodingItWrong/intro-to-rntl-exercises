import React from 'react';
import { View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'React Native Testing',
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Button
          title="Exercise 5"
          onPress={() => navigation.navigate('Exercise5')}
        />
        <Button
          title="Exercise 6"
          onPress={() => navigation.navigate('Exercise6')}
        />
      </View>
    );
  }
}
