# Exercise 1: Rendering

In this exercise, we are going to add tests for the `MovieRow` component found in `src/MovieRow.js`.

This component is already written and functioning. There is a test file for it, `src/MovieRow.spec.js`, but it does not yet contain any tests.

Add all the tests to `src/MovieRow.spec.js` that you need to fully specify the component's behavior. Feel free to modify the component as necessary to help you write better tests for it.

## About the Component

The `MovieRow` is used to display a single movie in the list in the app. Currently it just displays the movie title and whether or not the movie is newly added today.

## Designing Your Tests

As you think about which tests to add, think about the *contract* of the `MovieRow` component. What inputs does it take, and what are its outputs in response to those inputs? Which outputs are unconditional, and which are conditional? For conditional outputs, be sure to test both sides of the conditional.

As you decide what to check in your JSX, remember to focus on user-facing things. For this exercise you should not need to check for test ID or for component type (and these are best to avoid in general, too).

## Getting Help

If you get stuck, feel free to ask questions in the workshop Discord chat, or check <https://reactnativetesting.io/component/testing>
