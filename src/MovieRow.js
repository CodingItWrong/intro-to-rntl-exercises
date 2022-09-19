import {StyleSheet, Text, View} from 'react-native';
import New from './assets/new.svg';

export default function MovieRow({movie}) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{movie.title}</Text>
      {movie.addedToday && <New fill="orange" width="30" height="30" />}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
  },
});
