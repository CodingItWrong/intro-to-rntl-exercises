import {fireEvent, render, screen} from '@testing-library/react-native';
import NewMovieForm from './NewMovieForm';

describe('NewMovieForm', () => {
  describe('pressing send', () => {
    const movieTitle = 'Fake Movie Title';

    let createHandler;

    function renderAndSave() {
      createHandler = jest.fn().mockName('createHandler');
      render(<NewMovieForm onCreate={createHandler} />);

      fireEvent.changeText(
        screen.getByPlaceholderText('New movie title'),
        movieTitle,
      );
      fireEvent.press(screen.getByText('Save'));
    }

    it('clears the new movie title field', () => {
      renderAndSave();
      expect(screen.getByPlaceholderText('New movie title')).toHaveProp(
        'value',
        '',
      );
    });

    it('calls the create handler', () => {
      renderAndSave();
      expect(createHandler).toHaveBeenCalledWith(movieTitle);
    });
  });
});
