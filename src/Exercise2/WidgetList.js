import React from 'react';
import { Text, View } from 'react-native';

const WidgetList = ({ loading, error, widgets }) => {
  if (loading) {
    return renderLoading();
  } else if (error) {
    return renderError();
  } else {
    return renderWidgets(widgets);
  }
};

const renderLoading = () => (
  <Text testID="loading">Loading…</Text>
);

const renderError = () => (
  <Text testID="error">An error occurred</Text>
);

const renderWidgets = (widgets) => (
  <View>
    {widgets.map(widget => (
      <Text key={widget.id}>
        {widget.name}
      </Text>
    ))}
  </View>
);

export default WidgetList;
