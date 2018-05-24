import * as React from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';
import { IUserStore } from './User.store';

@inject('user')
@observer
export class LoginScreen extends React.Component<{ user: IUserStore; navigation: any }, undefined> {
	trySignIn = () => {
		this.props.user.tryToSignIn().then(isAuthorized => {
			if (!isAuthorized) {
				return; // TODO: error
			}

			this.props.navigation.navigate('Home');
		});
	};

	public render() {
		return (
			<ScrollView
				contentContainerStyle={styles.container}
				scrollEnabled={false}
				keyboardShouldPersistTaps="always">
				<View style={styles.inner}>
					<Text style={styles.logo}>Example App</Text>
					<TextInput
						autoCapitalize="none"
						style={styles.input}
						testID="login"
						value={this.props.user.login}
						onChangeText={this.props.user.setLogin}
					/>
					<TextInput
						autoCapitalize="none"
						style={styles.input}
						testID="password"
						value={this.props.user.password}
						onChangeText={this.props.user.setPassword}
						secureTextEntry
					/>
					<View style={styles.buttonWrapper}>
						<TouchableOpacity style={styles.button} onPress={this.trySignIn}>
							<Text style={styles.buttonText}>Sign in</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		fontSize: 40,
		textAlign: 'center',
	},
	inner: {
		width: '75%',
	},
	input: {
		fontSize: 20,
		borderBottomWidth: 1,
		borderColor: '#ccc',
		margin: 10,
	},
	buttonWrapper: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	button: {
		backgroundColor: 'blue',
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius: 10,
		width: '50%',
	},
	buttonText: {
		color: 'white',
		textAlign: 'center',
	},
});
