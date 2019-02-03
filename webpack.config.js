/* eslint-disable */
module.exports = {
	entry: './dist/react-leaflet-dialog.min.js',
	output: {
		library: {
			root: 'ReactLeafletDialog',
			amd: 'react-leaflet-dialog',
			commonjs: 'react-leaflet-dialog'
		},
		libraryExport: 'default',
		libraryTarget: 'umd'
	},
	externals: {
		leaflet: {
			commonjs: 'leaflet',
			commonjs2: 'leaflet',
			root: 'L'
		},
		'react-leaflet': {
			commonjs: 'react-leaflet',
			commonjs2: 'react-leaflet',
			root: 'ReactLeaflet'
		},
		react: {
			commonjs: 'react',
			commonjs2: 'react',
			root: 'React'
		}
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react'],
                    plugins: ['transform-class-properties', 'transform-object-rest-spread']
                }
			},
			{
				test: /\.css$/,
				exclude: /(node_modules)((?!leaflet-dialog).)*$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'postcss-loader' }
				]
			},
			{
				test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'url?limit=100000&name=[name].[ext]' }
				]
			}
		]
	}
};

