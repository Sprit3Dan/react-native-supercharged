import * as React from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';
import { Card } from './Card';
import { HorizontalCards } from './HorizontalCards';

import TsIcon from './ts.svg';
import JestIcon from './jest.svg';
import PrettierIcon from './prettier-icon.svg';
import FastlaneIcon from './fastlane-icon.svg';
import LintIcon from './lint-icon.svg';

export class HomeScreen extends React.Component {
	constructor(props) {
		super(props);

		this.scrollY = new Animated.Value(0);
		this.titleOpacity = new Animated.Value(0);
		this.titleOpacityActive = false;

		this.headerTranslate = this.scrollY.interpolate({
			inputRange: [0, HEADER_SCROLL_DISTANCE],
			outputRange: [0, -HEADER_SCROLL_DISTANCE],
			extrapolate: 'clamp',
		});
	}

	scrollY: Animated.Value;
	headerTranslate: Animated.AnimatedInterpolation;
	titleOpacity: Animated.Value;
	titleOpacityActive: boolean;

	onScroll = ({ nativeEvent }) => {
		const offset = nativeEvent.contentOffset.y;
		this.scrollY.setValue(offset);

		if (offset > HEADER_MIN_HEIGHT && !this.titleOpacityActive) {
			this.titleOpacityActive = true;
			Animated.spring(this.titleOpacity, {
				toValue: 1,
				useNativeDriver: true,
			}).start();
		}
		if (offset <= HEADER_MIN_HEIGHT && this.titleOpacityActive) {
			this.titleOpacityActive = false;
			Animated.spring(this.titleOpacity, {
				toValue: 0,
				useNativeDriver: true,
			}).start();
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<Animated.ScrollView
					contentContainerStyle={styles.scrollViewContent}
					scrollEventThrottle={1}
					onScroll={this.onScroll}>
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
					<Card
						title="FROM THE CREATORS"
						description="Welcome to example!"
						style={{ backgroundColor: '#f7f7f7' }}
					/>
					<Card
						title="FROM THE CREATORS"
						description="Welcome to example!"
						style={{ backgroundColor: '#f7f7f7' }}
					/>
					<Card
						title="FROM THE CREATORS"
						description="Welcome to example!"
						style={{ backgroundColor: '#f7f7f7' }}
					/>
				</Animated.ScrollView>
				<Animated.View
					style={[styles.header, { transform: [{ translateY: this.headerTranslate }] }]}>
					<View style={{ flex: 1 }} />
					<Text style={styles.title}>Example App</Text>
				</Animated.View>
				<View style={styles.secondHeader}>
					<Animated.View style={{ opacity: this.titleOpacity }}>
						<Text style={styles.secondHeaderTitle}>Example App</Text>
					</Animated.View>
				</View>
			</View>
		);
	}
}

const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		fontSize: 28,
		fontWeight: '800',
		marginLeft: 10,
		marginBottom: 10,
	},
	header: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		overflow: 'hidden',
		backgroundColor: '#fff',
		height: HEADER_MAX_HEIGHT,
		flexDirection: 'column',
	},
	secondHeader: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		overflow: 'hidden',
		backgroundColor: '#fff',
		height: HEADER_MIN_HEIGHT,
		paddingTop: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	secondHeaderTitle: {
		fontSize: 16,
		fontWeight: '800',
	},
	scrollViewContent: {
		marginTop: HEADER_MAX_HEIGHT,
	},
});
