import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default class EditForm extends Component {
  state = { name: this.props.name };

  handleChangeText = name => this.setState({ name });

  handleSave = () => {
    const { onSave } = this.props;
    const { name } = this.state;
    onSave(name);
  };

  handleDelete = () => this.props.onDelete();

  handleCancel = () => this.props.onCancel();

  render() {
    const { name } = this.state;
    return (
      <View style={{ marginTop: 100 }}>
        <Text>Name</Text>
        <TextInput
          testID="nameField"
          value={name}
          onChangeText={this.handleChangeText}
          style={{ borderWidth: 1 }}
          autoFocus={true}
        />
        <Button testID="saveButton" title="Save" onPress={this.handleSave} />
        <Button testID="deleteButton" title="Delete" onPress={this.handleDelete} />
        <Button testID="cancelButton" title="Cancel" onPress={this.handleCancel} />
      </View>
    );
  }
}
