import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const isLight = hex => {
	// https://24ways.org/2010/calculating-color-contrast
	const r = parseInt(hex.substr(1, 2), 16);
	const g = parseInt(hex.substr(3, 2), 16);
	const b = parseInt(hex.substr(5, 2), 16);

	const yiq = (r * 299 + g * 587 + b * 114) / 1000;

	return yiq >= 128;
};

const isDark = hex => !isLight(hex);

export const Card = ({ title, description, style }) => {
	const backgroundColor = style.backgroundColor || '#ffffff';
	const isLightBg = isLight(backgroundColor);
	const titleColor = isLightBg ? '#84848a' : 'rgba(255,255,255, 0.7)';
	const descriptionColor = isLightBg ? '#000000' : '#ffffff';

	return (
		<View style={[style, { backgroundColor }, styles.container]}>
			<Text style={[styles.title, { color: titleColor }]}>{title}</Text>
			<Text style={[styles.description, { color: descriptionColor }]}>{description}</Text>
		</View>
	);
};

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
