This is a new [**React Native**](https://reactnative.dev) boilerplate, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Features

- React Native (^0.72.7): Used for building the native app with React.
- React: Empowers the native app with React.
- [React Navigation](https://reactnavigation.org/): Handles routing and navigation within the app, featuring a default splash screen setup.
- [React i18next](https://www.npmjs.com/package/react-i18next): Manages internationalization within your app.
- [React Native MMKV](https://github.com/mrousavy/react-native-mmkv): A highly efficient and compact mobile key-value storage solution.
- [Axios](https://github.com/axios/axios): Used for making HTTP requests.
- SCSS: To better manage your theme
- Typescript: Used to improve readability and maintainability
- Prettier: Linter & Husky: We don't like committing bad code
- [Redux Persist](https://www.npmjs.com/package/redux-persist): Persist and rehydrate a redux store
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview): A powerful data fetching and caching tool
- [React Native Config](https://www.npmjs.com/package/react-native-config): Used for expose config variables to your code, supporting iOS, Android and Windows
- [React Native Localize](https://www.npmjs.com/package/react-native-localize): A toolbox for app localization
- [React Native Svg](https://github.com/software-mansion/react-native-svg): Don't worry about how to import svg or custom fonts into the code, we've already taken care of it
- React Native Flipper/Redux Flipper/React Navigation Devtool: App ready for debugging
- BONUS: [Ramda](https://ramdajs.com/) & [Dayjs](https://day.js.org/): Some very useful libraries for managing dates and data

# Getting Started

## Quick start

To create a new project using this boilerplate simply run:

```bash
npx react-native@latest init your_app_name --template this_repo_url
```

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using Yarn
yarn android
```

### For iOS

```bash
# using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

# Assets installation

Whether you add additional fonts to the project, make sure to run the following command to manually link assets:

```bash
npx react-native-asset
```

## Contributors ✨

<table>
   <tbody>
      <tr>
         <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/fspecchio/">
            <img src="https://media.licdn.com/dms/image/C4E03AQGn4Udt3YHzbw/profile-displayphoto-shrink_800_800/0/1516640084064?e=1706745600&v=beta&t=T1ae-p0dGu20BsVpa4r8OUNcSFOKHSxpvmteyOQaZxY" width="100px;" alt="Francesco Specchio"/>
            <br /><b>Francesco Specchio</b></a>
         </td>
         <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/riccardo-mirarchi-a3b1a2185/">
            <img src="https://avatars.githubusercontent.com/u/69994296?v=4" width="100px;" alt="Riccardo Mirarchi"/>
            <br /><b>Riccardo Mirarchi</b></a>
         </td>
      </tr>
   </tbody>
</table>

Contributions of any kind are welcome!

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
