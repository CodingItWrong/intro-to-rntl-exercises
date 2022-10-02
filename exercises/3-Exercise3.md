# Exercise 3: Effects and Module Mocks

For this exercise, we are going to add tests for the `MovieList` component found in `src/MovieList.js`.

As in the previous exercises, the component is already written and functioning, but there are not yet any tests for it.

Create a file `src/MovieList.spec.js` and add all the tests that you need to specify the component's *data-loading and display* behavior.

Note that the component *also* has data creation behavior, because the `NewMovieForm` is embedded in it. Hold off on testing that behavior for now; we will save that for the "Going Further" section below.

## About the Component

The `MovieList` component handles loading movies from a server and displaying them. It delegates to `MovieRow` to handle the display of each movie. It also includes the `NewMovieForm`, allowing you to add additional movies to the server and the list.

## Designing Your Tests

As mentioned above, *start out by specifying the component's data-loading and display behavior.*

This component is wired up to the real API, but we don't want to make a real API request in our tests. There are several ways you can isolate the component from the API. To start out, use Jest module mocks to mock the `./api` module.

Note that `MovieList` displays the movies using `MovieRow`, which you've already tested directly. Because of that, you don't need to test every detail of `MovieRow` in the test for `MovieList`. Instead, test just enough to ensure the behavior of the `MovieList` component itself is working correctly.

As you're testing, remember that displaying the correct data on the screen is only one of the essential outputs of the component. If the component makes a request to the wrong URL on the server it won't work. Try changing the path passed to `api.get()` in the component. Does your test fail with that incorrect path? If not, how can you set up your test to ensure it does fail in that scenario?

## Getting Help

If you get stuck, feel free to ask questions in the workshop Discord chat, or check <https://reactnativetesting.io/component/effects-and-external-services>

## Going Further

If you finish the above steps of the exercise, try one or both of the following additional exercises:

1. Test the movie-creation functionality of `MovieList`. We've already tested `NewMovieForm` directly, but we haven't yet tested that the form is correctly wired up to save the data to the server.
2. Try to write the test of the data-loading functionality in a different way: this time use a different approach to isolating the component from the server. Instead of Jest module mocks, use [`nock`](https://github.com/nock/nock#nock). What are the differences in the code you write and what is being tested? What are the benefits and drawbacks you see of each approach?
