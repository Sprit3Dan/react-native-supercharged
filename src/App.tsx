import * as React from 'react';

import {
		AppRegistry,
		StyleSheet,
		View,
		Text,
		Platform,
} from 'react-native';

const instructions = Platform.select({
		ios: 'Press Cmd+R to reload,\n' +
				 'Cmd+D or shake for dev menu',
		android: 'Double tap R on your keyboard to reload,\n' +
						 'Shake or press menu button for dev menu',
});

export class App extends React.Component<undefined, undefined> {
		public render(): JSX.Element {
				return (
						<View style={styles.container}>
								<Text style={styles.welcome}>
										Welcome to React Native!
								</Text>
								<Text style={styles.instructions}>
										To get started, edit App.js
								</Text>
								<Text style={styles.instructions}>
										{instructions}
								</Text>
						</View>
				);
		}
}

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

AppRegistry.registerComponent('HelloWorld', () => App);
