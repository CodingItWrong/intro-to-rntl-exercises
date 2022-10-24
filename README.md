# Intro to RNTL Workshop - Exercises

The exercise repository used in the ["Intro to React Native Testing Library"](https://reactnativetesting.io/reactadvanced22) workshop at React Advanced 2022.

This branch is the starting state of the exercises.

## Requirements

- [git](https://git-scm.com/)
- [Node](https://nodejs.org/) 16.x or above
- [Yarn 1.x](https://classic.yarnpkg.com/en/docs/install)
- At least one of the following ways to run a React Native app:
  - A physical Android or iOS device
  - [Android Studio](https://developer.android.com/studio/) for the Android Emulator
  - [Xcode](https://developer.apple.com/xcode/) for the iOS Simulator
- A code editor configured for React development

## Installation

Clone the repo locally:

```bash
git clone https://github.com/CodingItWrong/intro-to-rntl-exercises.git
```

Install the dependencies:

```bash
$ cd intro-to-rntl-exercises
$ yarn install
```

Get an API key:

- Go to <https://api.outsidein.dev> and click the "Create API Key" button. A personal API key will be created for you and shown to you.
- Copy the API key. Open the file `src/api.js` and replace the value of the `API_KEY` variable with the API key.

## Trying It Out

Do the following to make sure your local installation is working:

- Run `yarn test`. You should see output like the following, including "Tests: 1 todo, 1 total":

```text
 PASS  src/MovieRow.spec.js
  MovieRow
    ✎ todo EXERCISE 1

Test Suites: 1 passed, 1 total
Tests:       1 todo, 1 total
Snapshots:   0 total
Time:        0.83 s
Ran all test suites.

Watch Usage
 › Press f to run only failed tests.
 › Press o to only run tests related to changed files.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```

- Run `yarn start`. You should see the following prompt:

```
› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

› Press r │ reload app
› Press m │ toggle menu

› Press ? │ show all commands
```

- Launch the app on a device: either your physical phone, Android Emulator, or iOS Simulator. For instructions, see [Expo: Opening the app on your phone/tablet](https://docs.expo.dev/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet)
- Once the app is launched, make sure you can see the example movies "Vertigo" and "The Sound of Music" listed.
- Type in a movie title and click Save. Confirm the movie is added to the list, with a yellow icon appearing to the right of it

If you reached this point and everything is working, congratulations: you are ready for the workshop!

## License

MIT
