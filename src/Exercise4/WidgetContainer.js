import React, { Component } from 'react';
import { Text, View } from 'react-native';
import api from './api';

export default class WidgetContainer extends Component {
  state = {
    widgets: [],
  }

  componentDidMount() {
    return api.get('/widgets').then(response => {
      this.setState({ widgets: response.data });
    });
  }

  render() {
    return (
      <View>
        {this.state.widgets.map(widget => <Text key={widget}>{widget}</Text>)}
      </View>
    );
  }
}
