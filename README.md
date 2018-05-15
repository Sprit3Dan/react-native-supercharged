# react-native-supercharged

Missing but very needed parts for default React Native template.

## Motivation

Starting new projects we realized that every time we spent too much time adding similar tools to new `react-native init` project. Such things like test frameworks, formatters and linters, typescript support are boring to set every time, so we created the template that include next tools out of the box:
- [TypeScript](https://www.typescriptlang.org) support
- [Haul](https://github.com/callstack/haul) for bundling
- [Jest](https://facebook.github.io/jest) (unit testing)
- [Detox](https://github.com/wix/detox) (e2e testing)
- [Prettier](https://github.com/prettier/prettier) for code formatting
- [Tslint](https://palantir.github.io/tslint) for linting
- [Fastlane](https://fastlane.tools)

## Getting started

### 1. To create new project use [react-native-cli](https://facebook.github.io/react-native/docs/getting-started.html#the-react-native-cli) command line tool

```sh
react-native init MyProject --template git://github.com/Sprit3Dan/react-native-supercharged
```

`MyProject` is the name of your project.

### 2. Go to new generated folder

```sh
cd MyProject
```

### 3. Run script to complete template setup
```sh
node scripts/completeSetup.js
```

That's it, you bootstrap new project!

## Run application

All methods use [fastlane](https://fastlane.tools) to automate all staff. You can see what each command do [here](/fastlane/Fastfile).

### 1. Run application in debug mode

#### iOS

```sh
fastlane ios debug
```

#### Android

```sh
fastlane android debug
```

### 2. Build application in release mode

#### iOS

```sh
fastlane ios release
```

#### Android

```sh
fastlane android release
```

As you can see, it's very intuitive and easy to remember

## Test application

Out of the box you can write both unit and integration tests.

### Unit tests

```sh
fastlane ios test_unit
```

or

```sh
fastlane android test_unit
```

### Integration (End-to-end) tests

```sh
fastlane ios test_e2e
```

or

```sh
fastlane android test_e2e
```

## Codestyle

We use [prettier](https://github.com/prettier/prettier) so you don't need to worry and argue for code style, let tool to autoformat your code and save your time for greater things.
