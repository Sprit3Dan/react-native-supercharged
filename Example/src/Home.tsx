import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Card } from './Card';
import { HorizontalCards } from './HorizontalCards';

import TsIcon from './ts.svg';
import JestIcon from './jest.svg';
import PrettierIcon from './prettier-icon.svg';
import FastlaneIcon from './fastlane-icon.svg';
import LintIcon from './lint-icon.svg';

export class HomeScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.label}>Example App</Text>
				<ScrollView contentContainerStyle={styles.inner}>
					<Card
						title="FROM THE CREATORS"
						description="Welcome to example!"
						style={{ backgroundColor: '#f7f7f7' }}
					/>
					<HorizontalCards.Wrapper title="Features">
						<HorizontalCards.Item label="TypeScript" image={props => <TsIcon {...props} />} />
						<HorizontalCards.Item
							label="Haul"
							image={({ width, height }) => (
								<Image source={require('./haul-logo.png')} style={{ width, height }} />
							)}
						/>
						<HorizontalCards.Item label="Jest" image={props => <JestIcon {...props} />} />
						<HorizontalCards.Item label="Detox" />
						<HorizontalCards.Item label="Prettier" image={props => <PrettierIcon {...props} />} />
						<HorizontalCards.Item label="Tslint" image={props => <LintIcon {...props} />} />
						<HorizontalCards.Item label="Fastlane" image={props => <FastlaneIcon {...props} />} />
					</HorizontalCards.Wrapper>
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
		fontWeight: '800',
		marginLeft: 10,
	},
});
