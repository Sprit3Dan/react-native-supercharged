import * as React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Svg, Text as SvgText, Rect } from 'react-native-svg';

const HorizontalWrapper = ({ title, children }) => (
	<React.Fragment>
		<Text style={styles.wrapperTitle}>{title}</Text>
		<ScrollView horizontal>{children}</ScrollView>
	</React.Fragment>
);

const createIcon = text => ({ width, height }) => (
	<Svg width={width} height={height}>
		<Rect x={0} y={0} width={width} height={height} fill="#f6f8fa" />
		<SvgText fontSize={70} fontWeight="900" fill="#6a737d" x={15} y={height - 20}>
			{text[0].toUpperCase()}
		</SvgText>
	</Svg>
);

interface HorizontalItemProps {
	label: string;
	image?: (props: { width: number; height: number }) => JSX.Element;
}

export const HorizontalItem = ({ label, image }: HorizontalItemProps) => {
	let Image;
	if (image == null) {
		Image = createIcon(label);
	} else {
		Image = image;
	}
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
