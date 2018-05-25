import * as React from 'react';
import { Platform, StyleSheet, AppRegistry } from 'react-native';
import {
	createStackNavigator,
	createSwitchNavigator,
	createBottomTabNavigator,
} from 'react-navigation';
import { makeHot, clearCacheFor, redraw } from 'haul/hot';
import { Provider } from 'mobx-react';
import { UserStore } from './User.store';

import { LoginScreen } from './Login';
import { HomeScreen } from './Home';
import { SettingsScreen } from './Settings';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

const HomeTabScreen = createBottomTabNavigator({
	Home: {
		getScreen: makeHot(() => HomeScreen, 'Home'),
	},
	Settings: {
		getScreen: makeHot(() => SettingsScreen, 'Settings'),
	},
});

const RootScreen = createSwitchNavigator({
	Login: {
		getScreen: makeHot(() => LoginScreen, 'Login'),
	},
	Home: {
		screen: HomeTabScreen,
	},
});

const App = () => (
	<Provider user={new UserStore()}>
		<RootScreen />
	</Provider>
);

export default App;

// @ts-ignore
if (module.hot) {
	// @ts-ignore
	module.hot.accept('./Login', () => {
		console.log('Update!');
		// @ts-ignore
		clearCacheFor(require.resolve('./Login'));
		redraw(() => require('./Login').LoginScreen, 'Login');
	});
	// @ts-ignore
	module.hot.accept('./Home', () => {
		// @ts-ignore
		clearCacheFor(require.resolve('./Home'));
		redraw(() => require('./Home').HomeScreen, 'Home');
	});
	// @ts-ignore
	module.hot.accept('./Settings', () => {
		// @ts-ignore
		clearCacheFor(require.resolve('./Settings'));
		redraw(() => require('./Settings').HomeScreen, 'Settings');
	});
}
