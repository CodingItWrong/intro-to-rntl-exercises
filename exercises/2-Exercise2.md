# Exercise 2: Actions and Mocks

In this exercise, we are going to add tests for the `NewMovieForm` component found in `src/NewMovieForm.js`.

As in Exercise 1, the component is already written and functioning, but there are not yet any tests for it. This time, there is no test file yet.

Create a file `src/NewMovieForm.spec.js` and add all the tests that you need to fully specify the component's behavior.

## About the Component

The `NewMovieForm` component consists only of a text field and a save button. The user can type in the name of a movie and click "Save". The component will pass the name they entered to the `onCreate` function prop passed to the component, then it will clear the text field.

## Designing Your Tests

As in exercise 1, when thinking about which tests to add you should think about the contract of the component. You can still test the `NewMovieForm` component's outputs for a given set of inputs. Unlike the component in exercise 1, this component is interactive, so its inputs and outputs will be fairly different than the previous component.

Be sure to test the component in isolation from the rest of the app. The component is not directly wired up to the API, and we don't want to wire it up to the API in the test. We want to limit the test to just the responsibilities of `NewMovieForm` itself.

## Getting Help

If you get stuck, feel free to ask questions in the workshop Discord chat, or check <https://reactnativetesting.io/component/testing#interaction>
