import React from 'react';
import { Button, FlatList, Modal, View } from 'react-native';
import EditForm from './EditForm';
import api from './api';

export default class Exercise6 extends React.Component {
  state = {
    widgets: [],
    showModal: false,
    editingIndex: -1,
  };

  componentDidMount() {
    api
      .get('widgets')
      .then(response => {
        this.setState({ widgets: response.data.data });
      })
      .catch(console.error);
  }

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
      const requestBody = {
        data: {
          type: 'widgets',
          attributes: { name },
        },
      };
      api
        .post('widgets', requestBody)
        .then(response => {
          const widget = response.data.data;
          newWidgets = [...widgets, widget];
          this.setState({
            widgets: newWidgets,
            showModal: false,
            editingIndex: -1,
          });
        })
        .catch(console.error);
    } else {
      const { id } = widgets[editingIndex];
      const requestBody = {
        data: {
          type: 'widgets',
          id,
          attributes: { name },
        },
      };

      api
        .patch(`widgets/${id}`, requestBody)
        .then(() => {
          newWidgets = widgets.slice();
          newWidgets[editingIndex].attributes.name = name;

          this.setState({
            widgets: newWidgets,
            showModal: false,
            editingIndex: -1,
          });
        })
        .catch(console.error);
    }
  };

  handleDelete = () => {
    const { widgets, editingIndex } = this.state;

    const { id } = widgets[editingIndex];
    api
      .delete(`widgets/${id}`)
      .then(() => {
        const newWidgets = [
          ...widgets.slice(0, editingIndex),
          ...widgets.slice(editingIndex + 1),
        ];

        this.setState({
          showModal: false,
          editingIndex: -1,
          widgets: newWidgets,
        });
      })
      .catch(console.error);
  };

  handleCancel = () => this.setState({ showModal: false, editingIndex: -1 });

  render() {
    const { widgets, showModal, editingIndex } = this.state;
    const editingName =
      editingIndex === -1 ? '' : widgets[editingIndex].attributes.name;

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
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <Button
              title={item.attributes.name}
              onPress={() => this.edit(index)}
            />
          )}
        />
      </View>
    );
  }
}
