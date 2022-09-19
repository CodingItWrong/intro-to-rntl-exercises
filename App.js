import {SafeAreaView, StatusBar} from 'react-native';
import MovieList from './src/MovieList';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <MovieList />
      </SafeAreaView>
    </>
  );
}
