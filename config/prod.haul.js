const webpack = require('webpack');
const tsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = ({ platform }, { module, resolve }) => ({
	entry: './src/App.tsx',
	module: {
		...module,
		rules: [
			{
				exclude: '/node_modules/',
				test: /\.tsx?$/,
				use: [
					{ loader: 'babel-loader' },
					{ loader: 'ts-loader' },
				]
			},
			...module.rules,
		]
	},
	resolve: {
		...resolve,
		extensions: [
			'.ts',
			'.tsx',
			...resolve.extensions,
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			// Don't delete this or you can have rigid bundle debugging
			'process.env': {
				NODE_ENV: process.env.NODE_ENV != null ? JSON.stringify(process.env.NODE_END) : '"production"',
			},
			// Place for your variables
			__DEV__: false,
			__USE_MOCKS__: false,
		}),
		new tsConfigPathsPlugin({ configFile: path.join(__dirname, '..', 'tsconfig.json') }),
		...resolve.plugins,
	]
});
