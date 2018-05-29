import * as React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

const HorizontalWrapper = ({ title, children }) => (
	<React.Fragment>
		<Text style={styles.wrapperTitle}>{title}</Text>
		<ScrollView horizontal>{children}</ScrollView>
	</React.Fragment>
);

export const HorizontalItem = ({ label, image }) => {
	const Image = image;
	return (
		<View style={styles.wrapper}>
			<View style={styles.inner}>
				<Image width={100} height={100} />
			</View>
			<Text style={styles.label}>{label}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapperTitle: {
		fontSize: 20,
		fontWeight: '700',
		marginLeft: 10,
		marginBottom: 10,
	},
	wrapper: {
		flexDirection: 'column',
		marginLeft: 10,
	},
	inner: {
		overflow: 'hidden',
		borderRadius: 20,
		marginBottom: 10,
	},
	label: {
		fontSize: 13,
		fontWeight: '700',
		marginBottom: 10,
	},
});

export const HorizontalCards = {
	Wrapper: HorizontalWrapper,
	Item: HorizontalItem,
};
