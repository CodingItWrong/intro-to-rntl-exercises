import {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import MovieRow from './MovieRow';
import NewMovieForm from './NewMovieForm';
import api from './api';

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.get('/movies').then(response => {
      setMovies(response.data);
    });
  }, []);

  function handleCreate(title) {
    api.post('/movies', {title}).then(response => {
      setMovies([...movies, response.data]);
    });
  }

  return (
    <View style={styles.container}>
      <NewMovieForm onCreate={handleCreate} />
      <FlatList
        data={movies}
        keyExtractor={item => item.id}
        renderItem={({item}) => <MovieRow movie={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
