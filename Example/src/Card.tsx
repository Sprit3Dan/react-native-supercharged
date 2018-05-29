import * as React from 'react';
import { Animated, View, Text, StyleSheet, ViewStyle } from 'react-native';
import { RawButton, State } from 'react-native-gesture-handler';

const isLight = hex => {
	// https://24ways.org/2010/calculating-color-contrast
	const r = parseInt(hex.substr(1, 2), 16);
	const g = parseInt(hex.substr(3, 2), 16);
	const b = parseInt(hex.substr(5, 2), 16);

	const yiq = (r * 299 + g * 587 + b * 114) / 1000;

	return yiq >= 128;
};

const isDark = hex => !isLight(hex);

interface CardProps {
	title: string;
	description: string;
	style: ViewStyle;
}

export class Card extends React.Component<CardProps, undefined> {
	constructor(props) {
		super(props);

		this._scale = new Animated.Value(1);
	}

	_scale: Animated.Value;

	onHandlerStateChange = ({ nativeEvent }) => {
		console.log(nativeEvent.state);
		if (nativeEvent.state === State.ACTIVE) {
			Animated.spring(this._scale, {
				velocity: 0.5,
				toValue: 0.95,
				useNativeDriver: true,
			}).start();
		}
		if (nativeEvent.state === State.END || nativeEvent.state === State.CANCELLED) {
			Animated.spring(this._scale, {
				velocity: 0.5,
				toValue: 1,
				useNativeDriver: true,
			}).start();
		}
	};

	render() {
		const { title, description, style } = this.props;

		const backgroundColor = style.backgroundColor || '#ffffff';
		const isLightBg = isLight(backgroundColor);
		const titleColor = isLightBg ? '#84848a' : 'rgba(255,255,255, 0.7)';
		const descriptionColor = isLightBg ? '#000000' : '#ffffff';

		return (
			<RawButton
				onGestureEvent={this.onHandlerStateChange}
				onHandlerStateChange={this.onHandlerStateChange}
				shouldCancelWhenOutside>
				<Animated.View
					style={[
						style,
						{ backgroundColor, transform: [{ scale: this._scale }] },
						styles.container,
					]}>
					<Text style={[styles.title, { color: titleColor }]}>{title}</Text>
					<Text style={[styles.description, { color: descriptionColor }]}>{description}</Text>
				</Animated.View>
			</RawButton>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		borderRadius: 10,
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowRadius: 8,
		shadowOpacity: 0.1,
		padding: 20,
		marginBottom: 20,
		marginRight: 10,
		marginLeft: 10,
	},
	title: {
		fontSize: 16,
		marginBottom: 5,
		fontWeight: 'bold',
	},
	description: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 20,
	},
});
