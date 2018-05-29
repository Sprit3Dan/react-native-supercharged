import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Card } from './Card';

const HorizontallCards = ({ title, children }) => (
	<View>
		<Text>{title}</Text>
		<ScrollView horizontal>{children}</ScrollView>
	</View>
);

export class HomeScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.label}>Title</Text>
				<ScrollView contentContainerStyle={styles.inner}>
					<Card
						title="FROM THE CREATORS"
						description="Welcome to example!"
						style={{ backgroundColor: '#f7f7f7' }}
					/>
					<HorizontallCards title="Features">
						<Card
							title="Test2"
							description="TypeScript support!"
							style={{ backgroundColor: '#123c69' }}
						/>
						<View>
							<Image
								style={{ width: 300, height: 20 }}
								source={{ uri: 'https://github.com/Microsoft/TypeScript/blob/master/doc/logo.svg' }}
							/>
						</View>
						<Card title="Test2" description="Hi there!" style={{ backgroundColor: '#123c69' }} />
						<Card title="Test2" description="Hi there!" style={{ backgroundColor: '#123c69' }} />
						<Card title="Test2" description="Hi there!" style={{ backgroundColor: '#123c69' }} />
						<Card title="Test2" description="Hi there!" style={{ backgroundColor: '#123c69' }} />
						<Card title="Test2" description="Hi there!" style={{ backgroundColor: '#123c69' }} />
						<Card title="Test2" description="Hi there!" style={{ backgroundColor: '#123c69' }} />
						<Card title="Test2" description="Hi there!" style={{ backgroundColor: '#123c69' }} />
					</HorizontallCards>
					<Card title="Test2" description="Hi there!" style={{ backgroundColor: '#123c69' }} />
					<Card title="Test2" description="Hi there!" style={{ backgroundColor: '#123c69' }} />
					<Card title="Test2" description="Hi there!" style={{ backgroundColor: '#123c69' }} />
					<Card title="Test2" description="Hi there!" style={{ backgroundColor: '#123c69' }} />
					<Card title="Test2" description="Hi there!" style={{ backgroundColor: '#123c69' }} />
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 25,
	},
	inner: {
		paddingTop: 10,
	},
	label: {
		fontSize: 30,
	},
});
