import * as React from 'react';
import { Platform, StyleSheet, AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'mobx-react';
import { UserStore } from './User.store';

import { LoginScreen } from './Login';
import { HomeScreen } from './Home';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

const RootScreen = createStackNavigator({
	Login: {
		screen: LoginScreen,
	},
	Home: {
		screen: HomeScreen,
	},
});

export const App = () => (
	<Provider user={new UserStore()}>
		<RootScreen />
	</Provider>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

AppRegistry.registerComponent('Example', () => App);
