import * as React from 'react';

import {
		AppRegistry,
		StyleSheet,
		View,
		Text,
		TouchableOpacity,
		Platform,
} from 'react-native';

const instructions = Platform.select({
		ios: 'Press Cmd+R to reload,\n' +
				 'Cmd+D or shake for dev menu',
		android: 'Double tap R on your keyboard to reload,\n' +
						 'Shake or press menu button for dev menu',
});

export class App extends React.Component<undefined, { greeting: String }> {
		state = {
				greeting: ''
		}
		
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

								<View testID="testBlock" style={{ paddingTop: 20, justifyContent: 'center', alignItems: 'center' }}>
										<Text style={{ fontSize: 25, marginBottom: 30 }}>This is block for e2e tests</Text>
										<Text style={{ fontSize: 20, marginBottom: 20 }}>{this.state.greeting}</Text>
										<TouchableOpacity testID="helloButton" onPress={() => this.setState({ greeting: 'Hello'}) }>
												<Text>Say Hello</Text>
										</TouchableOpacity>
										<TouchableOpacity testID="worldButton" onPress={() => this.setState({ greeting: 'World'}) }>
												<Text>Say World</Text>
										</TouchableOpacity>
								</View>
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
