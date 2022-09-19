import {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

export default function NewMovieForm({onCreate}) {
  const [inputText, setInputText] = useState('');

  function handleSend() {
    if (onCreate) {
      onCreate(inputText);
    }
    setInputText('');
  }

  return (
    <View style={styles.form}>
      <TextInput
        placeholder="New movie title"
        value={inputText}
        onChangeText={setInputText}
        style={styles.textField}
      />
      <Pressable onPress={handleSend} style={styles.saveButton}>
        <Text>Save</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  textField: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
  },
  saveButton: {
    backgroundColor: '#ddd',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 10,
    padding: 5,
  },
});
