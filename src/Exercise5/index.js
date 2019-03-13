import React from 'react';
import { Button, FlatList, Modal, View } from 'react-native';
import EditForm from './EditForm';

export default class Exercise5 extends React.Component {
  state = {
    widgets: ['foo', 'bar', 'baz'],
    showModal: false,
    editingIndex: -1,
  };

  add = () => {
    this.setState({ showModal: true });
  };

  edit = index => {
    this.setState({
      showModal: true,
      editingIndex: index,
    });
  };

  handleSave = name => {
    const { widgets, editingIndex } = this.state;

    let newWidgets;
    if (editingIndex === -1) {
      newWidgets = [...widgets, name];
    } else {
      newWidgets = widgets.slice();
      newWidgets[editingIndex] = name;
    }

    this.setState({
      widgets: newWidgets,
      showModal: false,
      editingIndex: -1,
    });
  };

  handleDelete = () => {
    const { widgets, editingIndex } = this.state;
    this.setState({
      showModal: false,
      editingIndex: -1,
      widgets: [
        ...widgets.slice(0, editingIndex),
        ...widgets.slice(editingIndex + 1),
      ],
    });
  };

  handleCancel = () => this.setState({ showModal: false, editingIndex: -1 });

  render() {
    const { widgets, showModal, editingIndex } = this.state;
    const editingName = editingIndex === -1 ? '' : widgets[editingIndex];

    return (
      <View>
        <Modal visible={showModal}>
          <EditForm
            name={editingName}
            onSave={this.handleSave}
            onDelete={this.handleDelete}
            onCancel={this.handleCancel}
          />
        </Modal>
        <Button
          testID="addButton"
          title="Add"
          onPress={this.add}
        />
        <FlatList
          data={widgets}
          keyExtractor={item => item}
          renderItem={({ item, index }) => (
            <Button title={item} onPress={() => this.edit(index)} />
          )}
        />
      </View>
    );
  }
}
